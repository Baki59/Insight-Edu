import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Grid } from '@mui/material'
import React from 'react'
import '../CSS/course.css';

const CourseLeftBar = () => {
  return (
    <Grid className='course-leftbar'>
                <Grid item xs sm md>
                <FormControl sx={{ m: 3 }} className='course-left-bar-form-control1'>
                    <FormLabel className="course-left-box1-header">Course Pricing</FormLabel>
                    <FormGroup>
                    <FormControlLabel
                        control={
                        <Checkbox />
                        }
                        label="Free Course"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox />
                        }
                        label="Premium Course"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox />
                        }
                        label="Scholarship"
                    />
                    </FormGroup>
                    {/* <FormHelperText>Be careful</FormHelperText> */}
                </FormControl>
                </Grid>
                <Grid item xs sm md>
                <FormControl sx={{ m: 3 }} className='course-left-bar-form-control2'>
                    <FormLabel className="course-left-box1-header">Course Catergory</FormLabel>
                    <FormGroup className='course-left-bar-formgroup'>
                    <FormControlLabel
                        control={
                        <Checkbox />
                        }
                        label="Free Course"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox />
                        }
                        label="Premium Course"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox />
                        }
                        label="Scholarship"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox />
                        }
                        label="Scholarship"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox />
                        }
                        label="Scholarship"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox />
                        }
                        label="Scholarship"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox />
                        }
                        label="Scholarship"
                    />
                    </FormGroup>
                </FormControl>

                </Grid>
                </Grid>
  )
}

export default CourseLeftBar