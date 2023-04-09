import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ExerciseVideos = ({ exerciseVideos, name }) => {

  return (
    <Box 
      sx={{ marginTop: { lg: '200px', xs: '20px' }}} 
      p="20px"
    >
      <Typography variant='h3' mb='33px'>
        Watch <span style={{color: '#FF2625', textTransform: 'capitalize'}}>{name}</span> exercise videos
      </Typography>
      <Stack 
        justifyContent="flex-start" 
        flexWrap="wrap" 
        alignItems="center"
        sx={{ 
          flexDirection: {lg: 'row' }, 
          gap: { lg: '110px', xs: '70px' }
        }}
      >
        {exerciseVideos.contents?.slice(0, 3).map((item, index) => (
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferer"
              border="1px solid red"
            >
              <img 
                src={item.video.thumbnails[0].url} 
                alt={item.video.title}
                loading="lazy"
              />
              <Typography variant='h5' color='#000' my={2}>
                {item.video.title}
              </Typography>
              <Typography variant='h6' color='#000'>
                {item.video.channelName}
              </Typography>
            </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos