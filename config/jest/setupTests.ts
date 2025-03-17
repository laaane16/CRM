import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'node:util';

import { fetch } from 'cross-fetch';

global.fetch = fetch;

if (!global.TextEncoder) {
  global.TextEncoder = TextEncoder;
}

// if (!global.TextDecoder) {
//   global.TextDecoder = TextDecoder;
// }
