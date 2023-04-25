import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Typography, styled } from '@mui/material'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import education from '_mocks/education'
import { useState } from 'react'

const StyledTabList = styled(TabList)(({ theme }) => ({
  borderBottom: theme.palette.mode === 'dark' ? '1px solid #3c3c3c' : '1px solid #dedede'
}))

const StyledTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000'
}))

const Education = () => {
  const [value, setValue] = useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) =>
    setValue(newValue)

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <StyledTabList onChange={handleChange}>
            <StyledTab label='Desenvolvimento de Software' value='1' />
            <StyledTab label='Engenharia civil' value='2' />
          </StyledTabList>
        </Box>
        {education.map(({ id, institution, duration, description }) => (
          <TabPanel key={id} value={id}>
            <Typography>Instituição: {institution}</Typography>
            <Typography>Duração: {duration}</Typography>
            <Typography>{description}</Typography>
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  )
}

export default Education
