import { GlobalStyles as MUIGlobalStyles } from '@mui/material'

const GlobalStyles: React.FC = (): JSX.Element => {
  const inputGlobalStyles = (
    <MUIGlobalStyles
      styles={{
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box'
        },
        html: {
          fontSize: '62.5%',
          WebkitOverflowScrolling: 'touch',
          minHeight: '100vh'
        },
        body: {
          width: '100%',
          minHeight: '100vh'
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none'
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none'
            }
          }
        },
        img: {
          display: 'block'
        },
        ul: {
          margin: 0,
          padding: 0
        },
        a: {
          textDecoration: 'none'
        },
        '::-webkit-scrollbar': {
          width: '10px'
        },
        '::-webkit-scrollbar-thumb': {
          background: '#ff6563'
        },
        '::-webkit-scrollbar-thumb: hover': {
          background: '#ff574a'
        }
      }}
    />
  )

  return inputGlobalStyles
}

export default GlobalStyles
