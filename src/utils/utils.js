export const teencodeConvertHandler = letter => {
  if (letter.includes('phò')) {
    return '4`'
  }
  if (letter.includes('rác')) {
    return 'rack'
  }
  if (letter.includes('rách')) {
    return 'rack'
  }
  if (letter.includes('rưởi')) {
    return 'rửi'
  }
  if (letter.includes('địt')) {
    return 'djt'
  }
  if (letter.includes('mày')) {
    return 'm@`y'
  }
  if (letter.includes('con')) {
    return 'k0n'
  }
  return letter
}
