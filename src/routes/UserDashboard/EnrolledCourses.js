import React from 'react'
import CourseCard from '../Course/CourseCard'
import { Grid } from '@mui/material'
import '../CSS/enrolledcourses.css'
import EnrolledCourseCard from './EnrolledCourseCard'


const EnrolledCourses = () => {
  return (
    <div>
    <div className='enrolled-courses-headline'>Your Enrolled Courses</div>
    <Grid container className='enrolled-courses-course-card'>
        <EnrolledCourseCard/>
        <EnrolledCourseCard/>
        <EnrolledCourseCard/>
        <EnrolledCourseCard/>
        <EnrolledCourseCard/>
        <EnrolledCourseCard/>
        <EnrolledCourseCard/>
        <EnrolledCourseCard/>
    </Grid>
    </div>
    
  )
}

export default EnrolledCourses