const decoder = (bytes: bigint[]): bigint => {
  bytes = bytes.map((byte, index) => {
    byte = byte & 0x7fn; // discard MSB
    byte = byte << (7n * BigInt(index)); // shift X bits to the left, depending on the position
    return byte;
  })

  // reverse to put it in little-endian
  const decoded = bytes.reverse().reduce((currTotal, byte) => 
    currTotal + byte // concatenate bytes
  )

  return decoded;
}

export { decoder };