/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'scss/double-slash-comment-whitespace-inside': null,
    'no-descending-specificity': null,
    'selector-class-pattern': '[a-zA-Z]',
    'custom-property-pattern': '[a-zA-Z]',
    'font-family-no-missing-generic-family-keyword': null,
    'selector-pseudo-class-no-unknown': null,
  },
};
