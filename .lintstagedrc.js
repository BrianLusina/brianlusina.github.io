module.exports = {
  '*.{js,jsx}': ['eslint --fix', 'git add'],
  '*.{png,jpeg,jpg,gif,svg}': ['imagemin-lint-staged', 'git add'],
}
