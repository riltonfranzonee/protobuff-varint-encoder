const decoder = (bytes: bigint[]): bigint => {
  let number: bigint = 0n;

  bytes = bytes.map((byte, index) => {
    byte = byte & 0x7fn; // discard MSB
    byte = byte << (7n * BigInt(index)) // shift X bits to the left, depending on the position
    return byte
  })

  // reverse to put it in little-endian
  bytes.reverse().forEach(byte => {
    number += byte; // concatenate bytes
  })

  return number;
}

export { decoder };