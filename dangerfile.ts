import { danger, warn, markdown } from 'danger';

// Setup
const { pr } = danger.github;
const modifiedFiles = danger.git.modified_files;
const packageChanged = modifiedFiles.includes('package.json');
const lockfileChanged = modifiedFiles.includes('yarn.lock');

// Always ensure we assign someone, so that our Slackbot can do its work correctly
if (pr.assignee === null) {
  fail('Please assign someone to merge this PR, and optionally include people who should review.');
}

const bigPRThreshold = 600;
if (pr.additions + pr.deletions > bigPRThreshold) {
  warn(`:exclamation: Big PR`);
  markdown(
    `>: Pull Request size seems relatively large. If Pull Request contains multiple changes, split each into separate PR will helps faster, easier review.`,
  );
}

if (packageChanged && !lockfileChanged) {
  const message = 'Changes were made to package.json, but not to yarn.lock';
  const idea = 'Perhaps you need to run `yarn install`?';
  warn(`${message} - <i>${idea}</i>`);
}
