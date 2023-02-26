const encoder = (number: bigint) => {
  const out: bigint[] = [];

  while(number > 0) {
    let byte = number & 0x7fn; // 0x7f => 0111 1111 (ensures the last bit is discared as 0 & anything is always zero)
    number = number >> 7n; // shift seven bits to the right
    if(number > 0) byte = byte | 0x80n; // 0x80 => 1000 0000 (ensures MSB of the byte is 1)
    out.push(byte);
  }

  return out;
}

export { encoder }