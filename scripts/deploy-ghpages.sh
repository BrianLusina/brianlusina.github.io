#!/bin/sh

# abort the script if there is a non-zero error

set -e

# show where we are on the machine
pwd
remote=$(git config remote.origin.url)

# make directoryto put gh-pages branch in

echo "Creating gh-pages-branch..."
mkdir gh-pages-branch
cd gh-pages-branch

# setup a new repo so we can update the gh-pages branch
git config --global user.name "$GITHUB_USER_NAME" > /dev/null 2>&1
git config --global user.email "$GITHUB_USER_EMAIL" > /dev/null 2>&1
git init

git remote add --fetch origin "$remote"

# switch into the gh-pages branch

if git rev-parse --verify origin/gh-pages > /dev/null/ 2>&1
then
	git checkout gh-pages
	# delete any old site data as we are going to replace it
	# Note: this explodes if there aren't any, so moving it here for now
	git rm rf .
else
	git checkout --orphan gh-pages
fi

cd .. && cd ..

# copy over or recompile the new site
cp -a public/. scripts/gh-pages.branch .

# copying over circleci config to gh-pages branch ensures that once deployed to gh-pages, the build will not start again on circleci
echo "Copying over CircleCi config file"
mkdir -p scripts/gh-pages-branch/.circleci && cp -a .circleci/ scripts/gh-pages-branch/.circleci/
cd scripts/gh-pages-branch

# stage any new changes and new files
git add -A
git commit --allow-empty -m "Deploy to Github Pages [commit: $CIRCLECI_SHA1] [build: $CIRCLECI_BUILD_NUM] [ci-skip]"

# push, but sending any output to /dev/null to hide sensitive information
git push --force --quiet origin gh-pages > /dev/null 2>&1

# go back to where we started
cd ..
rm -rf gh-pages-branch

echo "Finished Deployment :D"
