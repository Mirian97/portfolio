type TMaxLength = number | undefined
type TValue = string | number | readonly string[] | undefined

const getCharactersRemaining = (maxLength: TMaxLength, value: TValue): TMaxLength => {
  if (maxLength && typeof value === 'string') {
    return maxLength - value.length
  }
  return undefined
}

export default getCharactersRemaining
