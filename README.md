# LJournal

[![CircleCI](https://circleci.com/gh/BrianLusina/brianlusina.github.io.svg?style=svg)](https://circleci.com/gh/BrianLusina/brianlusina.github.io)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Personal blog built with [ReactJS](https://reactjs.org/) and [Gatsby](https://www.gatsbyjs.org/).

__Why document and open source my blog site?__

Part of the belief that OSS is the future and also fosters a community of developers, on top of which not only allows growth, but learnings. And with any OSS, it is important that a document is created to allow contributors to jump on board easily.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Clone the repository:

```bash
# if using ssh
git clone git@github.com:BrianLusina/brianlusina.github.io.git
# or if using https
git clone https://github.com/BrianLusina/brianlusina.github.io.git
```

## Prerequisites

A couple of things you will need to install in order to run this project:

1. [Node and NPM](https://nodejs.org/en/)

    Node is a JavaScript Runtime Environment. Installation instructions can be found in the link provided. By installing Node, you will also be installing npm. Node version used is __10.x__

2. [Yarn](https://yarnpkg.com) - (Optional)

    Yarn is an alternative package manager to npm. It is not necessary to use, but, if you prefer using yarn, then follow the instructions set out in the download section of the link provided. It is advised, that one package manager is picked due to how differently the  dependency graph is managed by both.

## Installing

Installing dependencies is straight forward:

```bash
npm install
# or
yarn install
```

This should set you up to install the dependencies as needed and get you running.

## Running tests

Tests have been written with [Jest](https://facebook.github.io/jest/) and [Enzyme](https://github.com/airbnb/enzyme). Running the tests can be done as follows:

```bash
yarn test
# or
npm run test
```

To generate a coverate report:

```bash
yarn test:cover
# or
npm run test:cover
```

## Deployment

Deployment has been configured to work on any system or static server as necessary. Therefore deployment can be to either a microservice application with this running in its own container, or to a static site or to even github pages.

The pipeline set here is to deploy this to a seperate static server when in development in order to do testing and to [github pages](https://pages.github.com/) when finally moving to production. Ideally,this being a blog site which primarily serves static content, that should not matter where it is deployed, as long as it is accessible and can handle incoming traffic.

Tools used for deployment:

+ [Docker](https://www.docker.com/)

  There is a [Dockerfile](./Dockerfile) available at the root of the project. Which entails instructions on how to deploy this to a system/server that supports running dockerized applications.

+ [Surge](https://surge.sh)

  Surge is a static hosting site and is used when deploying in development. In order to use this, ensure that you have an account with surge and have the necessary credentials in order to deployto a static site. In its place, any other static hosting site can be used, e.g. [Netlify](https://www.netlify.com/).

  To publish directly, you can use:

  ```bash
  yarn publish:staging
  ```

  > this will run a build and then publish to surge, ensure you change the domain name to something else though :)

+ [Github Pages](https://pages.github.com/)

  Github Pages has been used as the production site for the blog. This can be changed to something else however. In its place, anything else can be used.
  To publish to github pages, you can run the following command:

  ```bash
  yarn publish:prod
  ```

  > this runs a buld and publishes to github pages.

  > NB: Ensure that you change the [homepage](./package.json#homepage) attribute in the [package.json](./package.json) file to something else however.

## Built With

1. [JavaScript Language](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript) - Programming language
2. [ReactJS](https://reactjs.org/) - JavaScript library for building UI.
3. [Gatsby](https://www.gatsbyjs.org/) - Static site generator
4. [Redux](https://redux.js.org/) - Predictable State container for JS apps.
5. [React-Redux](https://github.com/reduxjs/react-redux) - React Bindings for Redux

## Versioning

[SemVer](https://semver.org/) is used for versioning. For the versions available, see the [tags](https://github.com/BrianLusina/brianlusina.github.io/tags) on this repository.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Acknowledgements

A hat tip to [Unsplash](https://unsplash.com) for images and [Html5Up](https://html5up.net) for themes.