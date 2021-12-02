module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '*.{js,jsx,tsx,ts,scss,sass}': ["stylelint 'src/**/*.{js,jsx,ts,tsx,scss,sass}'"],
  '*.{png,jpeg,jpg,gif,svg}': ['imagemin-lint-staged'],
};
