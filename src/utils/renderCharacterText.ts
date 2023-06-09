const renderCharacterText = (characters: number) => {
  if (characters === 1) return `${characters} caracter`
  return `${characters} caracteres`
}

export default renderCharacterText
