/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @oncall react_native
 */

'use strict';

const path = require('path');

require('eslint-plugin-lint').load(path.join(__dirname, 'rules'));

/**
 * ESLint config for TypeScript definition files (.d.ts).
 *
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      // These files have valid use of `any`, unfortunately, flow-api-translator
      // strips all comments other than JSBlock comments, so we can't add
      // `// eslint-disable-next-line @typescript-eslint/no-explicit-any` in the
      // source .ts files. Commece crying.
      files: [
        'packages/metro-runtime/types/polyfills/require.d.ts',
        'packages/metro/types/DeltaBundler/WorkerFarm.d.ts',
      ],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
