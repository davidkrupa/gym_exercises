import React from 'react'
import { Box } from '@mui/material'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"

import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard'

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  }

    const scrollbar = data.map(item => {
        return (
            <Box 
                key={item.id || item}
                itemID={item.id || item}
                title={item.id || item}
                m="0 40px"
            >
                {
                  isBodyParts ? 
                  <BodyPart 
                      item={item} 
                      bodyPart={bodyPart} 
                      setBodyPart={setBodyPart} 
                  /> : 
                  <ExerciseCard exercise={item}/>
                }
            </Box>
        )
    })

  return (
    <Carousel responsive={responsive} >
      {scrollbar}
    </Carousel>

  )
}

export default HorizontalScrollbar