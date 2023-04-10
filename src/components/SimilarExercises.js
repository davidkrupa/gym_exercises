import React from 'react'
import { Box, Typography } from '@mui/material'

import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box
      sx={{ mt: { lg: '100px', xs: '80px' }}}
    >
      <Typography variant="h3" mb={5}>
        Exercises for the same muscle group
      </Typography>
      {targetMuscleExercises.length ? 
        <HorizontalScrollbar data={targetMuscleExercises} /> :
        <Loader />
      }
      <Typography variant="h3" mb={5} mt={5}>
        Exercises that use the same equipment
      </Typography>
      {equipmentExercises.length ? 
        <HorizontalScrollbar data={equipmentExercises} /> :
        <Loader />
      }
    </Box>
  )
}

export default SimilarExercises