import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Grid } from '@mui/material'
import React from 'react'
import '../CSS/course.css';

const CourseLeftBar = () => {
  return (
    <Grid>
                <Grid item xs sm md>
                <FormControl sx={{ m: 3 }}>
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
                    <FormHelperText>Be careful</FormHelperText>
                </FormControl>
                </Grid>
                <Grid item xs sm md>
                <FormControl sx={{ m: 3 }}>
                    <FormLabel className="course-left-box1-header">Course Catergory</FormLabel>
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