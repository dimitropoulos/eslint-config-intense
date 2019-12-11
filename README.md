# eslint-config-intense

This pakage provides an extremely strict and meticulous eslint config that is aimed at TypeScript, React, Jest, and Ramda.

The goal of this project is to use eslint tooling to create as much safety as possible.

## Usage

1. Install the correct versions of each peer dependency:

    ```shell
    npm info "eslint-config-intense@latest" peerDependencies
    ```

    > TIP: if using *npm 5+* you can use this shortcut:
    >
    > ```shell
    > npx install-peerdeps --dev eslint-config-intense
    > ```

2. Add a `.eslintrc.js` to the root of your project that looks like this:
    ```js
    module.exports = {
      extends: 'eslint-config-intense',
      rules: {
        // include any project-specific overrides here
      },
    };

    ```
