import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { exerciseOptions, youtubeOptions, fetchData } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])
  const { id } = useParams()
  const maxCarouselLength = 7 

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = `https://exercisedb.p.rapidapi.com`
      const youtubeSearchUrl = `https://youtube-search-and-download.p.rapidapi.com`          

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exerciseDetailData)      
      
      const exercisesVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
      setExerciseVideos(exercisesVideoData)

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
      const carouselTargetMuscleExercises = targetMuscleExercisesData.length > maxCarouselLength
        ? targetMuscleExercisesData.slice(0, maxCarouselLength)
        : targetMuscleExercisesData
        console.log(carouselTargetMuscleExercises.length)
      setTargetMuscleExercises(carouselTargetMuscleExercises)

      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
      const carouselEquipmentExercises = equipmentExercisesData.length > maxCarouselLength
        ? equipmentExercisesData.slice(0, maxCarouselLength) 
        : equipmentExercisesData
      setEquipmentExercises(carouselEquipmentExercises)
    }

    fetchExerciseData()
  }, [id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail