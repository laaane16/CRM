/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-prettier/recommended'],
  rules: {
    'scss/double-slash-comment-whitespace-inside': null,
    'no-descending-specificity': null,
    'selector-class-pattern': '[a-zA-z]',
  },
};
