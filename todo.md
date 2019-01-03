# TODO

+ [x] Add tests
+ [x] Update Readme
+ [x] Tags on posts
  + [x] Miniposts Tags on sidebar when a tag is selected
+ [x] Paginate Home page
+ [x] Miniposts on pages
+ [x] Integrate [Github GraphQL API](https://developer.github.com/v4/) to allow querying of projects worked on and currently working on
+ [ ] Integrate Search functionality to allow for searching for tags and blogs.
    References:
    1. [Gatsby Search](https://www.gatsbyjs.org/docs/adding-search/)
+ [ ] Integrate Menu component
+ [ ] Integrate comments on blog posts?
     References:
     1. [Pusher](https://pusher.com/tutorials/realtime-comments-gatsby-blog) and [this](https://codeburst.io/create-a-live-comment-feed-with-pusher-and-gatsby-react-graphql-node-js-3db043d4916)
     2. [Just Comments](https://just-comments.com/pricing.html) and [this](https://60devs.com/add-comments-to-your-gatsbyjs-blog-within-two-minutes.html)
+ [ ] Improve on responsive design on blog page
 + [ ] decouple style sheets by components. Each component should be collocated with its stylesheet
+ [x] Fix running in docker container which will allow distributing this blog in multi-container application(s)
    Reference:
    1. [React with nginx](https://mherman.org/blog/2017/12/07/dockerizing-a-react-app/#react-router-and-nginx)
+ [ ] Setup deployment process to deploy to Docker registry
+ [ ] Domain registration for hosting
+ [ ] Styles and animations for transitions between pages
+ [x] Configure prettier linting
+ [x] Configure automated creation of git tags on CI on successful production builds
    References:
        1. [ghr](https://github.com/tcnksm/ghr)
        2. [circleCi automated releases](https://dzone.com/articles/automate-github-releases-with-circleci)
        3. [Semantic Release](https://github.com/semantic-release/semantic-release)
+ [x] Configure git hooks and commit messages using commitizen
    + [x] pre-commit should run tests
    + [x] pre-push should run lint
    References:
        1. [Proper git flow](https://hackernoon.com/15-tips-to-enhance-your-github-flow-6af7ceb0d8a3)
        2. [commitizen](https://github.com/commitizen/cz-cli)
        3. [commitlint](https://github.com/marionebl/commitlint)
+ [] Configure custom 404 page
