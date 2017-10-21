---
layout: article
categories:  tech
title: Continuous Integration and Deployment with Android, the right way.
excerpt: Continuous Deployment in Android
author: brian_lusina
share: true
tags: [Android, kotlin, CI, Continuous Integration, Continuous Deployment]
image:
 feature: cicd_android_feature.png
 teaser: cicd_android_thumb.jpg
 thumb: cicd_android_thumb.jpg
---

Continuous Integration has become an essential part of any software project in recent times. With how fast technology keeps changing and how quickly libraries and dependencies get re-written, it becomes essential for your application code to be maintained, tested and delivered to users quickly and efficiently. This will usually involve you re-writing some old code, testing your new feature and then deploying to users for them to enjoy your new feature in your application.

Obviously this is not usually easy in Android development as the ecosystem is vast and development can be sometimes slow, especially when you have to deal with recompiling and rebuilding a project every time there is a change you have made to your code (honestly, do not like this part of the job). The even bigger challenge comes when you have to create a release, sign it and manually deploy it on PlayStore. This process becomes even more tedious!

The good thing is there are many Continuous Integration and Deployment providers that take away the manual process of things and make it more automatic, so that you only deal with the writing of code and they deal with the deployment of the product.

You will find a lot of these tools used for web projects, OS images servers, but not so much for mobile applications, yet the delivery is more or less the same. Luckily these same tools can be used to deploy your mobile applications and today you shall learn how.

### A couple of things

There are a couple of things that I need to mention before I proceed. 

First, the examples I shall use will be referencing [CircleCI](https://circleci.com/), but does not mean that they can only be used with CircleCI, any CI provider will do the trick.

Secondly, I assume that you already have a test setup for you Android application and also an Android application you are working on.

Third, I also assume that you have a PlayStore developer account where you will deploy your application.

Whether you have these setup or not, the following will prove to be helpful for you down the line.


### Getting started and setting up.

Assuming you already have a working Android project with which you need to automate the boring stuff of testing and deployment, there are a couple of things you will need to have to make the process even smoother.


1. **Gradle properties file**

Think of this as a file you, your team and your CI should only know about. This is normally labelled as `gradle.properties` file and contains API keys, Secret Keys and Base URls that your application uses when communicating with a service provider.

This file should not be checked into a VCS(Github, Gitlab, Bitbucket, etc) as you do not want to expose these secret keys to the public. But if they are not checked into a VCS, then how will your CI know how to build your application properly? 

```properties
DEV_API_BASE_URL=<YOUR_DEV_BASE_URL>
API_BASE_URL=<YOUR_BASE_URL>
API_KEY=<YOUR_API_KEY>
GITHUB_TOKEN=<YOUR_GITHUB_TOKEN>
SERVICE_ACCOUNT_EMAIL=<YOUR_SERVICE_ACCOUNT_EMAIL>
VERSION_NAME=1.0.0
VERSION_CODE=1
RELEASE_TRACK=beta
```
> A typical generic `gradle.properties` file with secret keys and what not.

This


2. **KeyStore**

Android applications have to be signed in order for PlayStore to accept your release APK. This is a simple file (with a .jks extension) that authenticates your application with PlayStore. It is a MUST have when creating releases, otherwise PlayStore will not let your application into the *Pearly Gates* that is Google PlayStore.

To create a KeyStore file, simply follow instructions outlined [here](https://developer.android.com/studio/publish/app-signing.html#generate-key) and when you are done, come back here with your new shiny keystore file and we can proceed. 

Once you have your File in place, we can now automate the signing of the application easily.

This file is not pushed to Github and as such means that your CI has be be aware of its `existence` and build your application as you would locally. but how would it go about this process?

We start off by creating a `keystore.properties` file. The contents of this will are simple.

```properties
keyAlias=<KEY_ALIAS>
keyPassword=<KEY_PASSWORD>
storeFile=<STORE_FILE>
storePassword=<STORE_PASSWORD>
```
> keystore.properties file contents, note the <> brackets are where you place your values you used when creating your keystore file.

This file can be placed anywhere in your project tree, but, I advice placing this file at the root of your project tree for easier retrieval. 

*NB: This file is not pushed to Github* as it contains your sensitive information for creating your keystore file.

Once that is in place we can now update your project level `build.gradle` file. This will be found at the root of your project tree. The update we make will be used to extract information from your `keystore.properties` file and be used to sign your application

```properties

/**
 * Get version code from git history
 * This will dynamically increase the version code
 * If it fails to get from git, it will get it from the properties file, ensure that there is a properties
 * file at root of project
 * */
def getVersionCode = { ->
    try{
        def stdout = new ByteArrayOutputStream()
        exec {
            commandLine "git", "rev-list", "--first-parent", "--count", "origin/master"
            standardOutput = stdout
        }
	    Random random = new Random()

        // this ensures that the version code remains unique for every build
	    def number = random.nextInt(10) + random.nextInt(5) * random.nextInt(7) + random.nextInt(4)
        return Integer.parseInt(stdout.toString().trim()) + number
    }catch (ignored){
        Properties properties = new Properties()
        properties.load(new FileInputStream("gradle.properties"))
        return Integer.parseInt(properties.getProperty("VERSION_CODE"))
    }
}

/**
 * Get version name will ensure that the version name of the application remains unique and ever changing
 * for easier tracking. This will pull the information from git
 * */
def getVersionName = { ->
    try {
        def stdout = new ByteArrayOutputStream()
        exec {
            commandLine "git", "describe" "--dirty"
            standardOutput = stdout
        }
        return stdout.toString().trim()
    }catch (ignored){
        Properties properties = new Properties()
        properties.load(new FileInputStream("gradle.properties"))
        return properties.getProperty("VERSION_NAME")
    }
}


/**
 * Gets the Moja service account email gradle.properties file, Ensure that you have a
 * gradle.properties file in root project directory
 * */
def getServiceAccountKey = { ->
    try {
        Properties properties = new Properties()
        properties.load(new FileInputStream("gradle.properties"))
        return properties.getProperty("SERVICE_ACCOUNT_EMAIL")
    } catch (Exception ignored) {
        return ""
    }
}

ext {
    // configurations to send to Play Store for automated publishing
    pk12KeyFile = rootProject.file("keystores/moja_publish_key.p12")
    pJsonKeyFile = rootProject.file("keystores/moja_publish_key.json")
    serviceAccountEmail = getServiceAccountKey()

    debugKeystorePropertiesFile = rootProject.file("keystores/debug.keystore.properties")
    debugKeystoreProperties = new Properties()
    debugKeystoreProperties.load(new FileInputStream(ext.debugKeystorePropertiesFile))

    keystorePropertiesFile = rootProject.file("keystores/keystore.properties")
    keystoreProperties = new Properties()
    keystoreProperties.load(new FileInputStream(ext.keystorePropertiesFile))
    
    // ...........
}

```
> A section of project level `build.gradle` file

A couple of new things you have probably noticed.

+ **getVersionCode** function

This, as the name suggests, builds a version code number for your application. This makes sure that you do not have to manually update it every single time you want to upload a new release of your application to PlayStore.

Let us have a look at it again:

```properties
/**
 * Get version code from git history
 * This will dynamically increase the version
 code
 * If it fails to get from git, it will get it from the properties file, ensure that there is a properties
 * file at root of project
 * */
def getVersionCode = { ->
    try{
        def stdout = new ByteArrayOutputStream()
        exec {
            commandLine "git", "rev-list", "--first-parent", "--count", "origin/master"
            standardOutput = stdout
        }
	    Random random = new Random()

        // this ensures that the version code remains unique for every build
	    def number = random.nextInt(10) + random.nextInt(5) * random.nextInt(7) + random.nextInt(4)
        return Integer.parseInt(stdout.toString().trim()) + number
    }catch (ignored){
        Properties properties = new Properties()
        properties.load(new FileInputStream("gradle.properties"))
        return Integer.parseInt(properties.getProperty("VERSION_CODE"))
    }
}
``` 
> This randomizes the version code to ensure that it is unique on every build. This removes the pain point of having to update the version code every single time.

+ **getVersionName** function

This is used to get the version name, nothing fancy about this, but what is unique about it is how it gets the version name.

```properties
/**
 * Get version name will ensure that the version name of the application remains unique and ever changing
 * for easier tracking. This will pull the information from git
 * */
def getVersionName = { ->
    try {
        def stdout = new ByteArrayOutputStream()
        exec {
            commandLine "git", "describe" "--dirty"
            standardOutput = stdout
        }
        return stdout.toString().trim()
    }catch (ignored){
        Properties properties = new Properties()
        properties.load(new FileInputStream("gradle.properties"))
        return properties.getProperty("VERSION_NAME")
    }
}
```
> This will get the version name from the tags you have pushed to Github. Check [here](https://git-scm.com/book/en/v2/Git-Basics-Tagging) for how to create tags on Github. This will then build a unique version name for you to use when identifying to users the version they are downloading or updating.


+ **getServiceAccountKey** Function

```properties
/**
 * Gets the service account email gradle.properties file, Ensure that you have a
 * gradle.properties file in root project directory
 * */
def getServiceAccountKey = { ->
    try {
        Properties properties = new Properties()
        properties.load(new FileInputStream("gradle.properties"))
        return properties.getProperty("SERVICE_ACCOUNT_EMAIL")
    } catch (Exception ignored) {
        return ""
    }
}

```
> This gets the service account email that you will have to create on Google Play Services account to enable automated deployment of your application. Check [here](https://github.com/codepath/android_guides/wiki/Automating-Publishing-to-the-Play-Store) for more information on that


Once that is setup, we add the following lines in your `app` module `build.gradle` file:

```gradle
android {

  // other configuration ....
    signingConfigs {
        release {
            keyAlias rootProject.ext.keystoreProperties['keyAlias']
            keyPassword rootProject.ext.keystoreProperties['keyPassword']
            storeFile rootProject.file(rootProject.ext.keystoreProperties['storeFile'])
            storePassword rootProject.ext.keystoreProperties['storePassword']
        }
    }

    buildTypes {
        release {
            minifyEnabled true
            shrinkResources true
            debuggable false
            zipAlignEnabled true
            signingConfig signingConfigs.release
            //proguardFiles 'proguard-android-optimize.txt', getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }

        debug {
            debuggable true
            minifyEnabled false
            applicationIdSuffix ".debug"
            testCoverageEnabled true
        }       
    }
```
> Notice the `rootProject.ext.<VALUE>. This is referencing the values we set in the ext block in our gradle.properties file at the root level of the project`. This will be used to setup the signing of the apk when creating a release build.
