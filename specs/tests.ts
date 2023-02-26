import assert from 'assert';
import fs from 'fs';
import { decoder } from '../decoder';
import { encoder } from '../encoder';

const tests = [
  { file: "samples/1.uint64", expectedValue: [0x01n] },
  { file: "samples/150.uint64", expectedValue: [0x96n, 0x01n] },
  { file: "samples/maxint.uint64", expectedValue: [0xffn, 0xffn, 0xffn, 0xffn, 0xffn, 0xffn, 0xffn, 0xffn, 0xffn, 0x1n] }
]

tests.forEach(({ file, expectedValue }) => {
  const num = fs.readFileSync(file).readBigUInt64BE();
  const encoded = encoder(num);
  assert.deepEqual(encoder(num), expectedValue);
  assert.deepEqual(decoder(encoded), num);
});