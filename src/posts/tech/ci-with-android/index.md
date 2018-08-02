---
path:  "/tech/ci-with-android"
title: Continuous Integration and Deployment with Android, the right way.
subtitle: Continuous Deployment in Android
excerpt: Continuous Integration has become an essential part of any software project in recent times. With how fast technology keeps changing and how quickly libraries and dependencies get re-written, it becomes essential for your application code to be maintained, tested and delivered to users quickly and efficiently. This will usually involve you re-writing some old code, testing your new feature and then deploying to users for them to enjoy your new feature in your application.
tags: [Android, kotlin, CI, Continuous Integration, Continuous Deployment]
date: "2017-10-21T12:00:00+00:00"
author:
  name: Brian Lusina
  link: "/brian_lusina"
  avatar: brian_lusina.jpg
image:
 feature: cicd_android_feature.png
 teaser: cicd_android_thumb.jpg
 thumbnail: cicd_android_thumb.jpg
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

1.  **Gradle properties file**

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

These configurations assume you have such values in your application. The only values that will really be essential to your build environment are `VERSION_CODE`, `VERSION_NAME` and `RELEASE_TRACK`.

Version code and name are used as unique identifiers for your application when deploying on playstore while release track is used to identify which track your current release will be published on(either beta, alpha or production).

I prefer setting the track to beta, so as to enable the current release to be first pushed to beta testers before it is upgraded to production. Also beta track is what I use when building from `develop` or `staging` branch, which ensures that the master branch will only be used for `production` releases.

Here is how we can generate the `RELEASE_TRACK` value dynamically:

```properties
/**
 * Gets the release track to use for deployment
 * Release tracks are either "alpha", "beta", "production", "rollout"
 * */
def getReleaseTrack = { ->
    try{
        Properties properties = new Properties()
        properties.load(new FileInputStream("gradle.properties"))
        return Integer.parseInt(properties.getProperty("RELEASE_TRACK"))
    }catch (ignored){
        return "alpha"
    }
}
```

> This will get the release track from the properties file and if it can not get that from the file, then the default is alpha release track. This ensure that we do not touch the production/rollout tracks and leave that up to the CI to handle when the build and tests succeeds.

And to even make it more dynamic we can create a shell script that the CI handles before building the application

```bash
# updates the version code based on the current branch
function updateVersionCodeAndTrack(){
    versionCode=$(git rev-list --first-parent --count origin/${CIRCLE_BRANCH})
    versionName=$(git describe --dirty)

#    if ["${versionName}" == "fatal: No names found, cannot describe anything."]; then
#        major=$(expr ${CIRCLE_BUILD_NUM} - ${CIRCLE_PREVIOUS_BUILD_NUM})
#        versionName=${major}.0.0
#    fi

    if ["${versionName}" == "fatal: No names found, cannot describe anything."]; then
        versionName=1.0.0
    fi

    if [ "${CIRCLE_BRANCH}" == "develop" ]; then
    	echo "VERSION_NAME=${versionName}" >> ${GRADLE_PROPERTIES}
	    echo "VERSION_CODE=${versionCode}" >> ${GRADLE_PROPERTIES}
	    echo "RELEASE_TRACK=\"beta\"" >> ${GRADLE_PROPERTIES}

	elif [ "${CIRCLE_BRANCH}" == "master" ] ; then
    	echo "VERSION_NAME=${versionName}" >> ${GRADLE_PROPERTIES}
	    echo "VERSION_CODE=${versionCode}" >> ${GRADLE_PROPERTIES}
        echo "RELEASE_TRACK=\"production\"" >> ${GRADLE_PROPERTIES}
	fi
}
```

> As you can see, the release track is updated according to the branch the CI is running on. ${GRADLE_PROPERTIES} is simply the location of the `gradle.properties` file.

2.  **KeyStore**

Android applications have to be signed in order for PlayStore to accept your release APK. This is a simple file (with a .jks extension) that authenticates your application with PlayStore. It is a MUST have when creating releases, otherwise PlayStore will not let your application into the _Pearly Gates_ that is Google PlayStore.

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

_NB: This file is not pushed to Github_ as it contains your sensitive information for creating your keystore file.

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
 * Gets the  service account email gradle.properties file, Ensure that you have a
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

- **getVersionCode** function

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

- **getVersionName** function

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

- **getServiceAccountKey** Function

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

> Notice the `rootProject.ext.<VALUE>.`
> This is referencing the values we set in the ext block in our gradle.properties file at the root
> level of the project.
> This will be used to setup the signing of the apk when creating a release build.

3.  **Github Triplet Plugin**

This plugin automates the deplyoment to PlayStore when CI tests pass. This includes release notes, screenshots, whats new section, version name, icons etc.
One caveat is that you will have to manually upload the APK to PlayStore the first time, but after that this plugin will handle the automation so that all you have to do is focus on the code and features you create. More on this plugin can be found [here](https://github.com/Triple-T/gradle-play-publisher). This includes setup and how to use it. I advice you read through it and understand before proceeding.

### CI configuration

Once we have all this configured, we can then configure Circle CI config file to automate the process. This will run the build, test the application and deploy to PlayStore based on your configuration settings above.

There are a couple of scripts that may need to be included to make it much easier for deployment of the application. Remember how I mentioned that it is not good practice for the `jks` file to be pushed to Github or any VCS you use? Yes, these scripts ensure that the automation is seamless as if it were running on your development machine. I will start off with a couple of things you will need to setup.

- **Circle CI environment variables**

Start off by setting Circle CI environment variables, These will be used to setup values that are specific for the project and also that will be used by the scripts we will write up. Some of the environment variables you may need to setup:

```plain
DEV_API_BASE_URL=<YOUR_DEV_BASE_URL>
API_BASE_URL=<YOUR_BASE_URL>
API_KEY=<YOUR_API_KEY>
GITHUB_TOKEN=<YOUR_GITHUB_TOKEN>
SERVICE_ACCOUNT_EMAIL=<YOUR_SERVICE_ACCOUNT_EMAIL>
VERSION_NAME=1.0.0
VERSION_CODE=1
RELEASE_TRACK=beta
PUBLISH_JSON_KEY=<JSON_FILE>
KEY_STORE_URI=<KEY_STORE_URI>
STORE_FILE=<STORE_FILE>
```

> You may notice that the values are somewhat the same as the ones in your `gradle.properties` file, with 3 new additions.

`PUBLISH_JSON_KEY`, this is a unique key that you will use to verify you are the authorized account when publishing to PlayStore. Refer to [this](https://github.com/codepath/android_guides/wiki/Automating-Publishing-to-the-Play-Store) for more information on this.

Once you have your JSON file, copy and paste that information as an env variable.

`KEY_STORE_URI` is, as the suffix suggests, uri location of your keystore file. Considering that you can not (and should not) push this to Github, you should be able to still access this somehow right?

There is an easy way to do this using DropBox, yes, DropBox. A very simple hack is to upload your keystore file there and create a shareable link for the keystore file. With this, then you should be able to use that link to download the file and create a key store on your CI.

```bash
export STORE_FILE_LOCATION=$HOME"/app-dir/app.jks"

# download key store file from remote location
# keystore URI will be the location uri for the *.jks file for signing application
function downloadKeyStoreFile {
    # use curl to download a keystore from $KEYSTORE_URI, if set,
    # to the path/filename set in $KEYSTORE.
    echo "Looking for $STORE_FILE_LOCATION ..."

    if [ ! -f ${STORE_FILE_LOCATION} ] ; then
        echo "Keystore file is missing, performing download"
        # we're using curl instead of wget because it will not
        # expose the sensitive uri in the build logs:
        curl -L -o ${STORE_FILE} ${KEY_STORE_URI}
    else
            echo "Keystore uri not set.  .APK artifact will not be signed."
    fi
}
```

> This is a sample of the function you can use to download the keystore file in your project root and set up for successful builds.

- **Circle CI config.yml file**

Configuring the `config.yml` file should be painless and easy, considering all the workload will be done by the scripts (will include in a few minutes).

Some of the scripts you can use for deployment:

```bash
#!/usr/bin/env bash

# 1. http://deathstartup.com/?p=81
# 2. https://gist.github.com/KioKrofovitch/716e6a681acb33859d16
# 3. https://stackoverflow.com/questions/35440907/can-circle-ci-reference-gradle-properties-credentials

export GRADLE_PROPERTIES=$HOME"/app-dir/gradle.properties"
export KEYSTORE_PROPERTIES=$HOME"/app-dir/keystores/keystore.properties"
export PUBLISH_KEY_FILE=$HOME"/app-dir/keystores/publish_key.json"
export STORE_FILE_LOCATION=$HOME"/app-dir/app.jks"

function copyEnvVarsToProperties {

    echo "Gradle Properties should exist at $GRADLE_PROPERTIES"
    echo "Keystore Properties should exist at $KEYSTORE_PROPERTIES"

    if [ ! -f "$KEYSTORE_PROPERTIES" ]
    then
        echo "${KEYSTORE_PROPERTIES} does not exist...Creating file"

        touch ${KEYSTORE_PROPERTIES}

        echo "keyAlias=$KEY_ALIAS" >> ${KEYSTORE_PROPERTIES}
        echo "keyPassword=$KEY_PASSWORD" >> ${KEYSTORE_PROPERTIES}
        echo "storeFile=$STORE_FILE" >> ${KEYSTORE_PROPERTIES}
        echo "storePassword=$STORE_PASSWORD" >> ${KEYSTORE_PROPERTIES}
    fi

    if [ ! -f "$GRADLE_PROPERTIES" ]
    then
        echo "${GRADLE_PROPERTIES} does not exist...Creating Properties file"

	echo "API_BASE_URL=$API_BASE_URL" >> ${GRADLE_PROPERTIES}
	echo "DEV_API_BASE_URL=$DEV_API_BASE_URL" >> ${GRADLE_PROPERTIES}
	echo "API_KEY=$API_KEY" >> ${GRADLE_PROPERTIES}
	echo "SERVICE_ACCOUNT_EMAIL=$SERVICE_ACCOUNT_EMAIL" >> ${GRADLE_PROPERTIES}

    fi

    if [ ! -f "$PUBLISH_KEY_FILE" ]
    then
        echo "${PUBLISH_KEY_FILE} does not exist...creating properties file"

        touch ${PUBLISH_KEY_FILE}

        echo "$PUBLISH_JSON_KEY" >> ${PUBLISH_KEY_FILE}
    fi
}


# download key store file from remote location
# keystore URI will be the location uri for the *.jks file for signing application
function downloadKeyStoreFile {
    # use curl to download a keystore from $KEYSTORE_URI, if set,
    # to the path/filename set in $KEYSTORE.
    echo "Looking for $STORE_FILE_LOCATION ..."

    if [ ! -f ${STORE_FILE_LOCATION} ] ; then
        echo "Keystore file is missing, performing download"
        # we're using curl instead of wget because it will not
        # expose the sensitive uri in the build logs:
        curl -L -o ${STORE_FILE} ${KEY_STORE_URI}
    else
            echo "Keystore uri not set.  .APK artifact will not be signed."
    fi
}

# updates the version code based on the current branch
function updateVersionCodeAndTrack(){
    versionCode=$(git rev-list --first-parent --count origin/${CIRCLE_BRANCH})
    versionName=$(git describe --dirty)

#    if ["${versionName}" == "fatal: No names found, cannot describe anything."]; then
#        major=$(expr ${CIRCLE_BUILD_NUM} - ${CIRCLE_PREVIOUS_BUILD_NUM})
#        versionName=${major}.0.0
#    fi

    if ["${versionName}" == "fatal: No names found, cannot describe anything."]; then
        versionName=1.0.0
    fi

    if [ "${CIRCLE_BRANCH}" == "develop" ]; then
    	echo "VERSION_NAME=${versionName}" >> ${GRADLE_PROPERTIES}
	    echo "VERSION_CODE=${versionCode}" >> ${GRADLE_PROPERTIES}
	    echo "RELEASE_TRACK=\"beta\"" >> ${GRADLE_PROPERTIES}

	elif [ "${CIRCLE_BRANCH}" == "master" ] ; then
    	echo "VERSION_NAME=${versionName}" >> ${GRADLE_PROPERTIES}
	    echo "VERSION_CODE=${versionCode}" >> ${GRADLE_PROPERTIES}
        echo "RELEASE_TRACK=\"production\"" >> ${GRADLE_PROPERTIES}
	fi
}

# execute functions
copyEnvVarsToProperties
downloadKeyStoreFile
updateVersionCodeAndTrack
```

> A sample script for CircleCI to use in build and deployment circleci_env_setup.sh

Now onto the part where magic happens! The `config.yml` file!

CircleCI made version 2.0 of their build tool easy and intuitive to use, making creating a proper workflow easy. Here is a sample `config.yml` file with all the bells and whistles that allow for continuous integration and deployment of and Android application.

```yaml
version: 2
jobs:
       build:
                working_directory: ~/appp-dir
                docker:
                        - image: circleci/android:api-26-alpha
                environment:
                        # Customize the JVM maximum heap limit
                        _JAVA_OPTIONS: "-XX:+UnlockExperimentalVMOptions -XX:+UseCGroupMemoryLimitForHeap"
                        JVM_OPTS: -Xmx3200m
                        TERM: dumb

                steps:
                        # checkout onto repo
                        - checkout

                        # setup environment for downloading necessary assets to use for deployment
                        - run:
                                name: Setup environment
                                command: ./scripts/circleci_env_setup.sh

                        # Download and cache dependencies
                        - restore_cache:
                                key: App-{{ checksum "build.gradle" }}-{{ .Branch }}
                                keys:
                                      - app-{{ checksum "app/build.gradle" }}

                        # download dependencies
                        - run:
                               name: Download dependencies
                               command: ./gradlew androidDependencies

                        - save_cache:
                                key: App-{{ checksum "build.gradle" }}-{{ .Branch }}
                                paths: ~/.gradle
                                keys:
                                      - app-{{ checksum "app/build.gradle" }}

                        - persist_to_workspace:
                                root: .
                                paths: .

       test:
               docker:
                       - image: circleci/android:api-26-alpha
               working_directory: ~/moja-dir
               steps:
                       - attach_workspace:
                              at: .

                       - restore_cache:
                              key: App-{{ checksum "build.gradle" }}-{{ .Branch }}
                              keys:
                                      - app-{{ checksum "app/build.gradle" }}

                       - run:
                               name: Run Tests
                               command: ./gradlew test

                       - store_test_results:
                               path: ~/app-dir/app/build/test-results/

                       - store_artifacts:
                               path: ~/app-dir/app/build/reports/tests/
                               destination: /app/reports/

                       - persist_to_workspace:
                               root: .
                               paths: .

       deployBeta:
               docker:
                       - image: circleci/android:api-26-alpha

               working_directory: ~/app-dir
               steps:
                       - attach_workspace:
                              at: .

                       - restore_cache:
                              key: App-{{ checksum "build.gradle" }}-{{ .Branch }}
                              keys:
                                      - app-{{ checksum "app/build.gradle" }}

                       - run:
                              name: Assemble APKs and distribute to Beta Testing
                              command: ./scripts/circleci_beta_setup.sh

                       - store_artifacts:
                               path: ~/app-dir/app/build/outputs/apk/
                               destination: /app/apks/

                       - deploy:
                               name: Deploy to Play Store
                               command: ./gradlew :app:publishApkRelease

       deployProd:
               docker:
                       - image: circleci/android:api-26-alpha

               working_directory: ~/app-dir
               steps:
                       - attach_workspace:
                              at: .

                       - restore_cache:
                              key: App-{{ checksum "build.gradle" }}-{{ .Branch }}
                              keys:
                                      - app-{{ checksum "app/build.gradle" }}

                       - run:
                               name: Create Apk(s)
                               command: ./gradlew :app:assembleRelease

                       - store_artifacts:
                               path: ~/app-dir/app/build/outputs/apk/release/
                               destination: /app/apks/

                       - store_artifacts:
                               path: ~/app-dir/app/build/outputs/mapping/
                               destination: /app/mapping/

                       - deploy:
                               name: Deploy to Play Store
                               command: ./gradlew :app:publishApkRelease

# define work flows
workflows:
        version: 2
        build-test-distribute-deploy:
                jobs:
                        - build

                        - test:
                                requires:
                                        - build

                        # deploys to Beta
                        - deployBeta:
                                requires:
                                        - test
                                filters:
                                        branches:
                                                only:
                                                        - staging
                                                ignore:
                                                        - /^dev-.*/
                                                        - develop
                                                        - master
                                                        - /^feature-.*/
                                                        - /^feature/.*/
                                                        - /^bugfix-.*/
                                                        - /^bugfix/.*/
                                                        - /^hotfix/.*/

                        # will only deploy if on master and release branches
                        - deployProd:
                                requires:
                                        - test
                                filters:
                                        branches:
                                                only:
                                                        - master
                                                ignore:
                                                        - /^dev-.*/
                                                        - develop
                                                        - staging
                                                        - /^feature-.*/
                                                        - /^feature/.*/
                                                        - /^bugfix-.*/
                                                        - /^bugfix/.*/
                                                        - /^hotfix/.*/
```

> `config.yml` file for building, tesing and deploying to PlayStore.

That pretty much wraps it up for CI and CD with CircleCI for Android. Give it a try and automate the process, the only thing that you will need to do is:

- write tests
- write code to pass tests
- git add .
- git commit
- git push
- Deploy
- Pray (just kidding)
- No, really. Pray!
- Win

Hope this is helpful, until next time Droids!
