/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @oncall react_native
 */

import type {IncomingMessage} from 'http';
/**
 * Attempt to parse a request body as JSON.
 */
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export type JsonBody = Promise<any>;
declare function parseJsonBody(
  req: IncomingMessage,
  options?: {strict?: boolean},
): JsonBody;
export default parseJsonBody;
