'use strict';

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';
const DEPRECATED = 'off';
const UNKNOWN = 'off'; // useful when adding new rules at once.  I first write in all the rules and set them to UNKNOWN and then change them to OFF, WARN, or ERROR as I individually address them.

module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'jest': true,
    'node': true,
  },
  'root': true,
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
    'project': './tsconfig.json',
    'tsconfigRootDir': './',
  },
  'plugins': [
    '@typescript-eslint',
    'babel',
    'no-secrets',
    'eslint-comments',
    'ramda',
    'react',
    'react-hooks',
    'import',
    'jest',
    'jest-formatting',
    'simple-import-sort',
  ],
  'rules': {
    // plugin:eslint ******************************************************************
    // rules URL: https://github.com/eslint/eslint/tree/master/docs/rules
    // Possible Errors
    'for-direction': ERROR,
    'getter-return': ERROR,
    'no-async-promise-executor': ERROR,
    'no-await-in-loop': ERROR,
    'no-compare-neg-zero': ERROR,
    'no-cond-assign': ERROR,
    'no-console': [OFF, { 'allow': ['warn', 'error'] }], // TEMPORARY
    'no-constant-condition': ERROR,
    'no-control-regex': ERROR,
    'no-debugger': ERROR,
    'no-dupe-args': ERROR,
    'no-dupe-keys': ERROR,
    'no-duplicate-case': ERROR,
    'no-empty': ERROR,
    'no-empty-character-class': ERROR,
    'no-ex-assign': ERROR,
    'no-extra-boolean-cast': ERROR,
    'no-extra-parens': OFF, // handled by `@typescript-eslint/no-extra-parens`
    'no-extra-semi': ERROR,
    'no-func-assign': ERROR,
    'no-inner-declarations': OFF, // doesn't play nice with namespaces https://github.com/typescript-eslint/typescript-eslint/issues/239
    'no-invalid-regexp': ERROR,
    'no-irregular-whitespace': ERROR,
    'no-misleading-character-class': ERROR,
    'no-obj-calls': ERROR,
    'no-prototype-builtins': ERROR,
    'no-regex-spaces': ERROR,
    'no-sparse-arrays': ERROR,
    'no-template-curly-in-string': ERROR,
    'no-unexpected-multiline': ERROR,
    'no-unreachable': ERROR,
    'no-unsafe-finally': ERROR,
    'no-unsafe-negation': ERROR,
    'require-atomic-updates': ERROR,
    'use-isnan': ERROR,
    'valid-typeof': OFF, // handled by the babel plugin

    // Best Practices
    'accessor-pairs': ERROR,
    'array-callback-return': ERROR,
    'block-scoped-var': ERROR,
    'class-methods-use-this': ERROR,
    'complexity': [ERROR, {'max': 50}],
    'consistent-return': OFF,
    'curly': ERROR, // if you have a problem with this read https://dwheeler.com/essays/apple-goto-fail.html
    'default-case': ERROR,
    'dot-location': [ERROR, 'property'],
    'dot-notation': ERROR,
    'eqeqeq': ERROR,
    'guard-for-in': ERROR,
    'max-classes-per-file': [WARN, 3],
    'no-alert': ERROR,
    'no-caller': ERROR,
    'no-case-declarations': ERROR,
    'no-div-regex': ERROR,
    'no-else-return': ERROR,
    'no-empty-function': OFF,
    'no-empty-pattern': ERROR,
    'no-eq-null': ERROR,
    'no-eval': ERROR,
    'no-extend-native': ERROR,
    'no-extra-bind': ERROR,
    'no-extra-label': ERROR,
    'no-fallthrough': ERROR,
    'no-floating-decimal': ERROR,
    'no-global-assign': ERROR,
    'no-implicit-coercion': ERROR,
    'no-implicit-globals': ERROR,
    'no-implied-eval': ERROR,
    'no-invalid-this': OFF, // handled by the babel plugin
    'no-iterator': ERROR,
    'no-labels': ERROR,
    'no-lone-blocks': ERROR,
    'no-loop-func': ERROR,
    'no-magic-numbers': OFF, // sounds good in theory, but works poorly in practice
    'no-multi-spaces': ERROR,
    'no-multi-str': ERROR,
    'no-new': ERROR,
    'no-new-func': ERROR,
    'no-new-wrappers': ERROR,
    'no-octal': ERROR,
    'no-octal-escape': ERROR,
    'no-param-reassign': ERROR,
    'no-proto': ERROR,
    'no-redeclare': ERROR,
    'no-restricted-properties': OFF,
    'no-return-assign': ERROR,
    'no-return-await': ERROR,
    'no-script-url': ERROR,
    'no-self-assign': ERROR,
    'no-self-compare': ERROR,
    'no-sequences': ERROR,
    'no-throw-literal': ERROR,
    'no-unmodified-loop-condition': ERROR,
    'no-unused-expressions': OFF, // handled by the babel plugin
    'no-unused-labels': ERROR,
    'no-useless-call': ERROR,
    'no-useless-catch': ERROR,
    'no-useless-concat': ERROR,
    'no-useless-escape': ERROR,
    'no-useless-return': ERROR,
    'no-void': ERROR,
    'no-warning-comments': OFF,
    'no-with': ERROR,
    'prefer-named-capture-group': OFF,
    'prefer-promise-reject-errors': ERROR,
    'radix': ERROR,
    'require-await': OFF, // see `typescript-eslint/require-await`
    'require-unicode-regexp': OFF,
    'vars-on-top': ERROR,
    'wrap-iife': ERROR,
    'yoda': OFF, // not needed because `no-cond-assign` covers this error

    // Strict Mode
    'strict': OFF, // TypeScript takes care of this

    // Variables
    'init-declarations': OFF,
    'no-delete-var': ERROR,
    'no-label-var': ERROR,
    'no-restricted-globals': ERROR,
    'no-shadow': OFF,
    'no-shadow-restricted-names': ERROR,
    'no-undef': ERROR,
    'no-undef-init': ERROR,
    'no-undefined': OFF, // I look forward to a world where the problem that necessitates this rule's existence doesn't exist anymore.  Although shadowing `undefined` is super nasty, the utility of this language primitive is too strong to disable outright.
    'no-unused-vars': OFF, // handled by typescript-eslint:no-unused-vars
    'no-use-before-define': OFF, // handled by `typescript-eslint:no-use-before-define`

    // Node.js and CommonJS
    'callback-return': OFF,
    'global-require': WARN,
    'handle-callback-err': OFF,
    'no-buffer-constructor': ERROR,
    'no-mixed-requires': ERROR,
    'no-new-require': ERROR,
    'no-path-concat': ERROR,
    'no-process-env': OFF,
    'no-process-exit': ERROR,
    'no-restricted-modules': [ERROR, 'left-pad'],
    'no-sync': OFF,

    // Stylistic Issues
    'array-bracket-newline': [ERROR, 'consistent'],
    'array-bracket-spacing': [ERROR, 'never'],
    'array-element-newline': [ERROR, 'consistent'],
    'block-spacing': ERROR,
    'brace-style': [ERROR, '1tbs'],
    'camelcase': OFF, // handled by the babel plugin
    'capitalized-comments': OFF, // the reality is that to many things exist in comments that should not be bound by rules (compiler directives, jsDoc, type information, etc.)
    'comma-dangle': [ERROR, 'always-multiline'],
    'comma-spacing': ERROR,
    'comma-style': ERROR,
    'computed-property-spacing': ERROR,
    'consistent-this': OFF,
    'eol-last': ERROR,
    'func-call-spacing': OFF, // doesn't work with typescript and generics
    'func-name-matching': ERROR,
    'func-names': UNKNOWN,
    'func-style': [ERROR, 'declaration', { 'allowArrowFunctions': true }],
    'function-paren-newline': OFF,
    'id-blacklist': OFF,
    'id-length': [ERROR, {
      'min': 2,
      'exceptions': [
        'x', 'y', 'a', 'b', // commonly used in general purpose comparator functions where (definitionally, since the functions are general purpose) no better name can be given
        '_', // often used to indicate an intentionally unused variable as well as for underscore/lodash/ramda/scoreunder/etc.
        't', // commonly used in many testing frameworks
        'i', 'j' // iterators
      ],
      'properties': 'never', // sometimes there are properties in existing data (i.e. 3rd party data) you are trying to map to that you simply can't control.
    }],
    'id-match': OFF,
    'implicit-arrow-linebreak': [ERROR, 'beside'],
    'indent': [ERROR, 2, { 'SwitchCase': 1 }],
    'jsx-quotes': ERROR,
    'key-spacing': [ERROR, { 'mode': 'minimum' }],
    'keyword-spacing': ERROR,
    'line-comment-position': OFF,
    'linebreak-style': [ERROR, 'unix'],
    'lines-around-comment': OFF, // unfortunately, this doesn't play nice with allowing comments at the start of TypeScript types and interfaces.
    'lines-between-class-members': [ERROR, 'always', { 'exceptAfterSingleLine': true }],
    'max-depth': [ERROR, 7],
    'max-len': [WARN, {
      'code': 150,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
      'ignoreComments': true,
      'ignoreTrailingComments': true,
    }],
    'max-lines': [ERROR, { 'max': 1000 }],
    'max-lines-per-function': [ERROR, {
      'max': 150,
      'skipBlankLines': true,
      'skipComments': true,
      'IIFEs': false,
    }],
    'max-nested-callbacks': ERROR,
    'max-params': [ERROR, { 'max': 9 }], // the reason for this precaution is that many libraries (both in terms of the typescript types and the implementations themselves) that seem magical suddenly become very un-magical and break horribly when you get into a large number of arguments because the authors have (often silently) decided that they don't want to actually support variadic arguments for realz while at the same time appear like they do.  For example: https://github.com/ramda/ramda/blob/v0.26.1/source/internal/_arity.js is a function almost every ramda call passes through.
    'max-statements': [ERROR, { 'max': 30 }],
    'max-statements-per-line': [ERROR, { 'max': 2 }],
    'multiline-comment-style': OFF, // The programmer should be free to comment code how they like (that is to say, almost never).
    'multiline-ternary': OFF, // Too many "legit" patterns exist on both sides of this fence.  For example JSX should most often be multiline, but short values should most often be single line.
    'new-cap': OFF, // handled by the babel plugin
    'new-parens': OFF, // If everyone was doing this I would go along with it, but it's borderline inconsequential since usage of `new` should be very sparing.
    'newline-per-chained-call': ERROR,
    'no-array-constructor': ERROR,
    'no-bitwise': ERROR,
    'no-continue': OFF,
    'no-inline-comments': OFF, // inline comments === good.
    'no-lonely-if': ERROR,
    'no-mixed-operators': ERROR,
    'no-mixed-spaces-and-tabs': ERROR,
    'no-multi-assign': ERROR,
    'no-multiple-empty-lines': [WARN, { 'max': 3, 'maxBOF': 0, 'maxEOF': 0 }],
    'no-negated-condition': ERROR,
    'no-nested-ternary': ERROR,
    'no-new-object': ERROR,
    'no-plusplus': ERROR,
    'no-restricted-syntax': [ERROR,
      "BinaryExpression[operator='in']", // I've seen quite a few bugs from junior developers that use the `in` operator as a kind of null check (for example in an `if statement`) while not realizing how the operator really works.
    ],
    'no-tabs': ERROR,
    'no-ternary': OFF, // ternarys are more complex, yes, but it's a level of complexity I think is more than acceptable in the context of the kinds of functional programming usecases this config is intended for.
    'no-trailing-spaces': ERROR,
    'no-underscore-dangle': OFF, // it has a legitimate semantic meaning that's widely used.
    'no-unneeded-ternary': ERROR,
    'no-whitespace-before-property': ERROR,
    'nonblock-statement-body-position': OFF, // not needed because the `curly` rule handles this case.
    'object-curly-newline': OFF, // handled by babel plugin
    'object-curly-spacing': OFF, // handled by the babel plugin
    'object-property-newline': OFF, // this is very subject to the length of the identifiers and values.
    'one-var': [ERROR, 'never'],
    'one-var-declaration-per-line': OFF, // the `one-var` setting of 'never' ensures multi-line declarations are not allowed.
    'operator-assignment': ERROR, // clarity comes at the cost of disallowing terseness.
    'operator-linebreak': OFF, // too many edge cases here, unfortunately.
    'padded-blocks': OFF, // there are situations where this helps and situations where it doesn't.
    'padding-line-between-statements': OFF,
    'prefer-object-spread': ERROR,
    'quote-props': [ERROR, 'as-needed', { 'numbers': true }], // I have at times used the `'numbers': false` option, but I have learned that some people are not aware that object keys can only ever be strings in javascript (well, or symbols, but anyway). Despite
    'quotes': OFF, // handled by the babel plugin
    'semi': OFF, // handled by babel plugin
    'semi-spacing': ERROR,
    'semi-style': ERROR,
    'sort-keys': ERROR, // call me crazy, go ahead.  The reason I think this rule is helpful is because often junior programmers will rely on the order of object properties despite that an object is an unordered collection according to the javascript spec.  This also therefore prevents a footgun where some browsers (e.g. chrome) respect insertion order, but others (e.g. safari) do not.
    'sort-vars': ERROR, // multiple declaration is turned off anyway.
    'space-before-blocks': ERROR,
    'space-before-function-paren': [ERROR, {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always',
    }],
    'space-in-parens': ERROR,
    'space-infix-ops': ERROR,
    'space-unary-ops': ERROR,
    'spaced-comment': [ERROR, 'always', {
      'exceptions': ['/', '*', '-', '* '], // for ASCII art :)
      'markers': ['///'], // for typescript directives, doxygen, vsdoc, etc. (which use `///`)
    }],
    'switch-colon-spacing': ERROR,
    'template-tag-spacing': ERROR,
    'unicode-bom': ERROR,
    'wrap-regex': ERROR,


    // ECMAScript 6
    'arrow-body-style': [ERROR, 'as-needed'],
    'arrow-parens': [ERROR, 'as-needed'],
    'arrow-spacing': [ERROR, { 'before': true, 'after': true }],
    'constructor-super': ERROR,
    'generator-star-spacing': ERROR,
    'no-class-assign': ERROR,
    'no-confusing-arrow': [ERROR, { 'allowParens': true }],
    'no-const-assign': ERROR,
    'no-dupe-class-members': ERROR,
    'no-duplicate-imports': ERROR,
    'no-new-symbol': ERROR,
    'no-restricted-imports': OFF, // this is a project-by-project kind of rule
    'no-this-before-super': ERROR,
    'no-useless-computed-key': ERROR,
    'no-useless-constructor': OFF, // this is handled by `typescript-eslint/no-useless-constructor`
    'no-useless-rename': ERROR,
    'no-var': ERROR,
    'object-shorthand': [ERROR, 'always'],
    'prefer-arrow-callback': ERROR,
    'prefer-const': ERROR,
    'prefer-destructuring': [ERROR, { 'array': false }],
    'prefer-numeric-literals': ERROR,
    'prefer-rest-params': ERROR,
    'prefer-spread': ERROR,
    'prefer-template': ERROR,
    'require-yield': ERROR,
    'rest-spread-spacing': ERROR,
    'sort-imports': OFF, // must be off due to `simple-import-sort/sort`
    'symbol-description': ERROR,
    'template-curly-spacing': ERROR,
    'yield-star-spacing': ERROR,

    // plugin:ramda ************************************************************
    // rules URL: https://github.com/ramda/eslint-plugin-ramda
    'ramda/always-simplification': ERROR,
    'ramda/any-pass-simplification': ERROR,
    'ramda/both-simplification': ERROR,
    'ramda/complement-simplification': ERROR,
    'ramda/compose-pipe-style': OFF, // I use pipe everywhere.
    'ramda/compose-simplification': ERROR,
    'ramda/cond-simplification': ERROR,
    'ramda/either-simplification': ERROR,
    'ramda/eq-by-simplification': ERROR,
    'ramda/filter-simplification': ERROR,
    'ramda/if-else-simplification': ERROR,
    'ramda/map-simplification': ERROR,
    'ramda/merge-simplification': ERROR,
    'ramda/no-redundant-and': ERROR,
    'ramda/no-redundant-not': ERROR,
    'ramda/no-redundant-or': ERROR,
    'ramda/pipe-simplification': ERROR,
    'ramda/prefer-both-either': OFF, // I don't see the deep value here.  sometimes the list shrinks and grows over time and I don't want to bother flipping it back and forth between both and allPass just for nothing.
    'ramda/prefer-complement': ERROR,
    'ramda/prefer-ramda-boolean': OFF, // yeah.. not necessary
    'ramda/prop-satisfies-simplification': ERROR,
    'ramda/reduce-simplification': ERROR,
    'ramda/reject-simplification': ERROR,
    'ramda/set-simplification': ERROR,
    'ramda/unless-simplification': ERROR,
    'ramda/when-simplification': ERROR,

    // plugin:babel ************************************************************
    // rules URL: https://github.com/babel/eslint-plugin-babel
    'babel/camelcase': OFF, // too many standards that matter (e.g. react components absolutely must start with a capital letter) exist that foil this plan.
    'babel/new-cap': OFF, // `new` should, these days, basically not be used.
    'babel/no-invalid-this': ERROR,
    'babel/no-unused-expressions': ERROR,
    'babel/object-curly-spacing': [WARN, 'always', { 'arraysInObjects': true }],
    'babel/quotes': [ERROR, 'single', { 'avoidEscape': true }],
    'babel/semi': OFF, // handled by `typescript-eslint:semi`
    'babel/valid-typeof': ERROR,

    // plugin:eslint-comments **************************************************
    // rules URL: https://github.com/mysticatea/eslint-plugin-eslint-comments/tree/master/docs/rules
    'eslint-comments/disable-enable-pair': ERROR,
    'eslint-comments/no-aggregating-enable': ERROR,
    'eslint-comments/no-duplicate-disable': ERROR,
    'eslint-comments/no-unlimited-disable': ERROR,
    'eslint-comments/no-unused-disable': ERROR,
    'eslint-comments/no-unused-enable': ERROR,
    'eslint-comments/no-restricted-disable': OFF, // this is a project-by-project setting
    'eslint-comments/no-use': OFF, // exceptions exist.  it's javascript, after all.

    // plugin:no-secrets *******************************************************
    // rules URL: https://github.com/nickdeis/eslint-plugin-no-secrets
    'no-secrets/no-secrets': [ERROR, { 'tolerance': 6 }],

    // plugin:@typescript-eslint ***********************************************
    // rules URL: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
    '@typescript-eslint/adjacent-overload-signatures': ERROR,
    '@typescript-eslint/array-type': ERROR,
    '@typescript-eslint/await-thenable': ERROR,
    '@typescript-eslint/ban-ts-ignore': OFF, // I wish.. but in my experience there still exist edge cases where it's necessary to use a @ts-ignore
    '@typescript-eslint/ban-types': [ERROR, {
      'types': {
        'String': {
          'message': 'use `string` instead',
          'fixWith': 'string',
        },
        'Array': 'use something like `any[]` instead',
        'Object': "usage of Object is too wide.  If you really don't know then use `any` or `unknown` instead.",
      },
    }],
    '@typescript-eslint/no-floating-promises': ERROR,
    '@typescript-eslint/camelcase': OFF, // this is handled by the babel plugin
    '@typescript-eslint/class-name-casing': ERROR,
    '@typescript-eslint/consistent-type-assertions': ERROR,
    '@typescript-eslint/consistent-type-definitions': [ERROR, 'interface'],
    '@typescript-eslint/explicit-function-return-type': OFF, // type inference is your friend.  use it.
    '@typescript-eslint/explicit-member-accessibility': OFF, // I'm going to wait to see how the TC-39 proposal for `#` to denote private class members comes together.
    '@typescript-eslint/func-call-spacing': ERROR,
    '@typescript-eslint/generic-type-naming': OFF, // I find naming of generic type variables can often be a good thing.
    '@typescript-eslint/indent': OFF, // I wish I could use this but as of v1.7.1 there doesn't seem to be a way to allow a type to be on mutiple lines (e.g. `type X = A & B & C & D & E & F & G` which is absolutely required in some cases (such as typing a redux reducer))
    '@typescript-eslint/interface-name-prefix': OFF, // we have IDEs now.  it's ok.  please write your VB somewhere else.
    '@typescript-eslint/member-delimiter-style': ERROR,
    '@typescript-eslint/member-naming': OFF, // I'm going to wait to see how the TC-39 proposal for `#` to denote private class members comes together.
    '@typescript-eslint/member-ordering': ERROR,
    '@typescript-eslint/no-array-constructor': ERROR,
    '@typescript-eslint/no-empty-function': OFF, // the usefullness of noop functions in functional programming aside, I think the UX of having every function at some point (while you're writing it) trigger this error is more harm than the rule is worth
    '@typescript-eslint/no-empty-interface': OFF, // Often has legitimate use when mocking out an API or showing intent
    '@typescript-eslint/no-explicit-any': OFF, // I look forward to the day when I can confidently write Elm **cough** I mean TypeScript this way
    '@typescript-eslint/no-extra-parens': OFF, // I find that often parens are used to make the intention of the author clearer in a world where ternarys are fully embraced.
    '@typescript-eslint/no-extraneous-class': ERROR,
    '@typescript-eslint/no-for-in-array': ERROR,
    '@typescript-eslint/no-inferrable-types': ERROR,
    '@typescript-eslint/no-misused-new': ERROR,
    '@typescript-eslint/no-misused-promises': ERROR,
    '@typescript-eslint/no-namespace': ERROR,
    '@typescript-eslint/no-non-null-assertion': ERROR, // I'll quote a friend (who is a better programmer than I am) about the non null assertion: "I wish I never learnd of its existence."  Indeed, I view this character as a member of the same family as `any` and `@ts-ignore`.
    '@typescript-eslint/no-parameter-properties': ERROR,
    '@typescript-eslint/no-require-imports': ERROR,
    '@typescript-eslint/no-this-alias': ERROR,
    '@typescript-eslint/no-type-alias': OFF, // The absence of Opaque types in TypeScript is the only remaining feature I miss from FlowType.  Until such a thing is implemented some day (and we seem to get closer every major release) I will continue to use aliases for primitive types.
    '@typescript-eslint/no-unnecessary-qualifier': ERROR,
    '@typescript-eslint/no-unnecessary-type-arguments': ERROR,
    '@typescript-eslint/no-unnecessary-type-assertion': ERROR,
    '@typescript-eslint/no-unused-vars': ERROR,
    '@typescript-eslint/no-use-before-define': ERROR,
    '@typescript-eslint/no-useless-constructor': ERROR,
    '@typescript-eslint/no-var-requires': ERROR,
    '@typescript-eslint/prefer-for-of': ERROR,
    '@typescript-eslint/prefer-function-type': OFF, // Certain abstractions read clearer when documented by interfaces, even those with only one call signature
    '@typescript-eslint/prefer-includes': ERROR,
    '@typescript-eslint/prefer-namespace-keyword': OFF, // in facor of
    '@typescript-eslint/prefer-readonly': ERROR, // abiding by this rule will ease transition to the private methods proposal https://github.com/tc39/proposal-private-methods which, because it's at stage 3, will be in the language
    '@typescript-eslint/prefer-regexp-exec': ERROR,
    '@typescript-eslint/prefer-string-starts-ends-with': ERROR,
    '@typescript-eslint/promise-function-async': OFF, // situations were Promise.all is involved make this one tricky to follow in practice whilst keeping the right semantics of using regular promise calls.
    '@typescript-eslint/require-array-sort-compare': ERROR,
    '@typescript-eslint/require-await': OFF, // The primary problem here is that often you need a function to satisfy a certain interface that may require async behavior.  Some implementations may simply just not require async behavior (i.e. awaiting) while others absolutely do.
    '@typescript-eslint/restrict-plus-operands': ERROR,
    '@typescript-eslint/semi': ERROR,
    '@typescript-eslint/strict-boolean-expressions': ERROR,
    '@typescript-eslint/triple-slash-reference': ERROR,
    '@typescript-eslint/type-annotation-spacing': ERROR,
    '@typescript-eslint/typedef': ERROR,
    '@typescript-eslint/unbound-method': ERROR,
    '@typescript-eslint/unified-signatures': ERROR,

    // plugin:react ************************************************************
    // rules URL: https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    'react/boolean-prop-naming': OFF, // I'll name my variables whatever I wish thank you very much
    'react/button-has-type': ERROR,
    'react/default-props-match-prop-types': OFF, // #ProptypesAreDead
    'react/destructuring-assignment': ERROR,
    'react/display-name': OFF, // the problem with this rule is that errors on stateless functional components called as functions (not components) e.g. `renderThings(props)` and not `<RenderThings {...props} />`
    'react/forbid-component-props': OFF, // this is a project-by-project setting
    'react/forbid-dom-props': OFF, // this is a project-by-project setting
    'react/forbid-elements': OFF, // this is a project-by-project setting,
    'react/forbid-foreign-prop-types': ERROR,
    'react/forbid-prop-types': OFF, // TypeScript fills this void
    'react/no-access-state-in-setstate': ERROR,
    'react/no-array-index-key': ERROR,
    'react/no-children-prop': ERROR,
    'react/no-danger': ERROR,
    'react/no-danger-with-children': ERROR,
    'react/no-deprecated': ERROR,
    'react/no-did-mount-set-state': [ERROR, 'disallow-in-func'],
    'react/no-did-update-set-state': [ERROR, 'disallow-in-func'],
    'react/no-direct-mutation-state': ERROR,
    'react/no-find-dom-node': ERROR,
    'react/no-is-mounted': ERROR,
    'react/no-multi-comp': OFF, // I find this pattern useful. It's one of those things that needs to be left up to discretion.
    'react/no-redundant-should-component-update': ERROR,
    'react/no-render-return-value': ERROR,
    'react/no-set-state': OFF, // while enabling this rule should be most project's goal, it's not always ideal (for fast and frequently updating UI, for example) to go through redux for _every_ single thing.
    'react/no-string-refs': ERROR,
    'react/no-this-in-sfc': ERROR,
    'react/no-typos': ERROR,
    'react/no-unescaped-entities': ERROR,
    'react/no-unknown-property': ERROR,
    'react/no-unsafe': ERROR,
    'react/no-unused-prop-types': ERROR,
    'react/no-unused-state': ERROR,
    'react/no-will-update-set-state': [ERROR, 'disallow-in-func'],
    'react/prefer-es6-class': ERROR,
    'react/prefer-read-only-props': ERROR,
    'react/prefer-stateless-function': ERROR,
    'react/prop-types': OFF, // TypeScript handles this
    'react/react-in-jsx-scope': ERROR,
    'react/require-default-props': OFF, // TypeScript handles this
    'react/require-optimization': OFF, // this rule makes sense if you weren't depending on redux and things like reselect and re-reselect like I often do.
    'react/require-render-return': ERROR,
    'react/self-closing-comp': ERROR,
    'react/sort-comp': ERROR, // hate me if you wish.
    'react/sort-prop-types': ERROR, // TypeScript handles this
    'react/state-in-constructor': ERROR,
    'react/static-property-placement': ERROR,
    'react/style-prop-object': ERROR,
    'react/void-dom-elements-no-children': ERROR,

    // JSX rules
    'react/jsx-boolean-value': ERROR,
    'react/jsx-child-element-spacing': ERROR,
    'react/jsx-closing-bracket-location': ERROR,
    'react/jsx-closing-tag-location': ERROR,
    'react/jsx-curly-brace-presence': ERROR,
    'react/jsx-curly-new-line': OFF, // reasonable people disagree but I think this can be left up to the developer, although I don't feel strongly.  If there was a "if the first predicate is x number of characters long" option, I would feel differently.
    'react/jsx-curly-spacing': ERROR,
    'react/jsx-equals-spacing': ERROR,
    'react/jsx-filename-extension': [ERROR, { 'extensions': ['.jsx', '.tsx']}],
    'react/jsx-first-prop-new-line': [ERROR, 'multiline'],
    'react/jsx-fragments': [ERROR, 'element'], // I don't find it a bad thing to import `Fragment`.  at least that way it's crystal-clear what the author intended.  In a few years if it's super common to use the shorthand I could be persuaded to switch camps.  also the thing about fragments not being able to have a key or attribute when using the shorthand sways my opinion.
    'react/jsx-handler-names': OFF, // naming is hard.  often there's a good reason.  if you can't do naming well.. I don't believe a linter can save you.
    'react/jsx-indent': [ERROR, 2],
    'react/jsx-indent-props': [ERROR, 2],
    'react/jsx-key': ERROR,
    'react/jsx-max-depth': [WARN, { 'max': 25 }], // this is almost useless, but not completely so I set it to a somewhat absurd maximum.  Using things like styled-components and styletron increases the jsx depth quite a bit (necessarily) in complex layouts.
    'react/jsx-max-props-per-line': OFF, // the `max-len` rule takes care of this
    'react/jsx-no-bind': [ERROR, { 'ignoreRefs': true }],
    'react/jsx-no-comment-textnodes': ERROR,
    'react/jsx-no-duplicate-props': ERROR,
    'react/jsx-no-literals': OFF, // yeah... this rule shouldn't exist - we should just fix the syntax highlighters.
    'react/jsx-no-target-blank': ERROR,
    'react/jsx-no-undef': ERROR,
    'react/jsx-one-expression-per-line': OFF, // I don't see the value here.
    'react/jsx-pascal-case': ERROR,
    'react/jsx-props-no-multi-spaces': ERROR,
    'react/jsx-props-no-spreading': ERROR, // I firmly believe that (except in rare cases) this behavior is the source of many bugs (that I have seen) and should require an explanation (i.e. when this rule is disabled) every time.
    'react/jsx-sort-default-props': ERROR,
    'react/jsx-sort-props': ERROR, // hate me if you wish.  the goal of this project is for the code to be as consistent as possible.
    'react/jsx-tag-spacing': ERROR,
    'react/jsx-uses-react': ERROR,
    'react/jsx-uses-vars': ERROR,
    'react/jsx-wrap-multilines': ERROR,

    // plugin:react-hooks ******************************************************
    // rules URL: https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': ERROR, // Checks rules of Hooks
    'react-hooks/exhaustive-deps': ERROR, // Checks effect dependencies

    // plugin:import ***********************************************************
    // Static analysis
    // rules URL: https://github.com/benmosher/eslint-plugin-import#rules
    'import/default': ERROR,
    'import/named': ERROR,
    'import/namespace': ERROR,
    'import/no-absolute-path': ERROR,
    'import/no-cycle': ERROR,
    'import/no-dynamic-require': ERROR,
    'import/no-internal-modules': OFF, // this is a project-by-project need
    'import/no-relative-parent-imports': OFF, // I don't see the value in this one.
    'import/no-restricted-paths': ERROR,
    'import/no-self-import': ERROR,
    'import/no-useless-path-segments': ERROR,
    'import/no-webpack-loader-syntax': OFF, // this is a project-by-project need

    // Helpful warnings
    'import/export': ERROR,
    'import/no-deprecated': ERROR,
    'import/no-extraneous-dependencies': OFF, // doesn't play nice with monorepos, unfortunately
    'import/no-mutable-exports': ERROR,
    'import/no-named-as-default': ERROR,
    'import/no-named-as-default-member': ERROR,

    // Module systems
    'import/no-amd': ERROR,
    'import/no-commonjs': ERROR,
    'import/no-nodejs-modules': OFF,
    'import/unambiguous': ERROR,

    // Stylistic
    'import/dynamic-import-chunkname': ERROR,
    'import/exports-last': OFF, // I see no reason exports can't be sprinkled throughout the file
    'import/extensions': OFF, // this is configured on a per-project basis
    'import/first': ERROR,
    'import/group-exports': OFF, // tooling should easily answer the question of "what's exported from this module".  no need to do anything the IDE does for you.
    'import/max-dependencies': [WARN, { 'max': 40 }], // I _almost_ want to turn this rule off, but setting it to a high number with a lighter infraction (a WARN) seems better.
    'import/newline-after-import': ERROR,
    'import/no-anonymous-default-export': ERROR, // since I've opted to not disallow default exports entirely, it seems at least good to make them annoying to use.
    'import/no-default-export': OFF, // unfortunately some systems (e.g. Gatsby) hinge on usage of default exports.
    'import/no-duplicates': ERROR,
    'import/no-named-default': ERROR,
    'import/no-named-export': OFF,
    'import/no-namespace': OFF, // typescript uses namespace imports - I'm not otherwise sure what the motivation for turning this off would be
    'import/no-unassigned-import': ERROR,
    'import/order': OFF, // must be off due to `simple-import-sort/sort`
    'import/prefer-default-export': OFF, // named exports are better (for one reason, because TypeScript can automatically import a named resource)

    // plugin:simple-import-sort ***********************************************
    // rules URL: https://github.com/lydell/eslint-plugin-simple-import-sort
    'simple-import-sort/sort': OFF, // annoying? yes.  helps keep code extremely consistent? also yes.  OFF, though, for now, until the tooling can improve

    // plugin:jest *************************************************************
    // rules URL: https://github.com/jest-community/eslint-plugin-jest#rules
    'jest/consistent-test-it': ERROR,
    'jest/expect-expect': ERROR,
    'jest/lowercase-name': ERROR,
    'jest/no-alias-methods': ERROR,
    'jest/no-commented-out-tests': ERROR,
    'jest/no-disabled-tests': OFF, // I think having the ability to use .skip is legitimate
    'jest/no-duplicate-hooks': ERROR,
    'jest/no-empty-title': ERROR,
    'jest/no-expect-resolves': ERROR,
    'jest/no-export': ERROR,
    'jest/no-focused-tests': ERROR,
    'jest/no-hooks': ERROR,
    'jest/no-identical-title': ERROR,
    'jest/no-if': ERROR,
    'jest/no-jasmine-globals': ERROR,
    'jest/no-jest-import': ERROR,
    'jest/no-large-snapshots': ERROR,
    'jest/no-mocks-import': ERROR,
    'jest/no-standalone-expect': ERROR,
    'jest/no-test-callback': ERROR,
    'jest/no-test-prefixes': ERROR,
    'jest/no-test-return-statement': ERROR,
    'jest/no-truthy-falsy': ERROR,
    'jest/no-try-expect': ERROR,
    'jest/prefer-called-with': ERROR,
    'jest/prefer-expect-assertions': OFF, // I really just don't see the value of having this rule.
    'jest/prefer-inline-snapshots': ERROR,
    'jest/prefer-spy-on': ERROR,
    'jest/prefer-strict-equal': ERROR,
    'jest/prefer-to-be-null': ERROR,
    'jest/prefer-to-be-undefined': ERROR,
    'jest/prefer-to-contain': ERROR,
    'jest/prefer-to-have-length': ERROR,
    'jest/prefer-todo': ERROR,
    'jest/require-tothrow-message': ERROR,
    'jest/valid-describe': ERROR,
    'jest/valid-expect': ERROR,
    'jest/valid-expect-in-promise': ERROR,

    // plugin:jest-formatting **************************************************
    // rules URL: https://github.com/dangreenisrael/eslint-plugin-jest-formatting#rule-documentation
    'jest-formatting/padding-before-describe-blocks': ERROR,
  },
  'settings': {
    'react': {
      'version': '16.8',
    },
  },
};
