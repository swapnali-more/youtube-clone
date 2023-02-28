import { Button, Icon, Stack } from '@mui/material'
import React from 'react'
import { categories } from "../Utils/constants"

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack direction="row" sx={{ overflowY: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' } }}>
      {categories.map(({ name, icon }) => (
        <Button
          key={name}
          onClick={() => setSelectedCategory(name)}
          sx={{
            backgroundColor: name === selectedCategory && '#FC1503',
            color: '#fff',
            justifyContent: 'left',
            borderRadius: 20,
            mb: 1,
            opacity: name === selectedCategory ? 1 : 0.8,
          }}
          className='category-btn'
        >
          <Icon sx={{marginRight: 1}}>{icon}</Icon>
          {name}
        </Button>
      ))}
    </Stack>
  )
}

export default Sidebar
