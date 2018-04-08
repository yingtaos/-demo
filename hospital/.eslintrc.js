// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': 0,
		'indent': 0,
    'space-before-function-paren': 0,
    "space-infix-ops": 0,
    "comma-spacing": 0,
    "quotes": [1, "single"],
    "space-before-blocks": [0, "always"],
    "semi-spacing": [0, {"before": false, "after": false}],
    "key-spacing": [0, { "beforeColon": false, "afterColon": false }],
    "no-sequences": 0,
    "yoda": 0,
    "block-spacing": 0,
    "keyword-spacing":0,
    "no-undef": 0,
    "no-return-assign": 0,
    "no-unused-expressions": 0,
    "no-trailing-spaces": 0,
    "no-unused-vars": 0,
    "padded-blocks": 0,
    "func-call-spacing": 0,
    "one-var": 0,
    "eqeqeq": 0,
    "wrap-iife": 0,
    "no-mixed-operators": 0,
    "new-parens": 0,
    "space-unary-ops": 0,
    "no-redeclare": 0,
    "eol-last": 0,
    "new-cap": 0,
    "quotes": 0,
    "no-tabs":0,
    "spaced-comment": 0,
    "comma-style": 0,
    "no-mutiple-empty-lines": 0,
    "arrow-spacing":0,
    "space-in-parens": 0,
    "no-mixed-spaces-and-tabs":0,
    "comma-dangle": 0,
    "handle-callback-err": 0,
    "no-multiple-empty-lines": 0,
    "object-property-newline" : 0,
    "no-multi-spaces" :0,
    "valid-typeof":0,
    "no-inner-declarations":0,
    "curly":0,
    "camelcase":0,
    "no-useless-return":0,
    "no-dupe-keys":0,
    "Fvalid-template-root":0,
    "no-side-effects-in-computed-properties":0,
    "return-in-computed-property":0
  }
}
