const checkSchemaType = (value: string | undefined) =>
  typeof value === 'string' ? value : ''

export default checkSchemaType
