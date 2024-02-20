import { Grid } from '@mui/material'
import React from 'react'
import AcademicHoverCard1 from './AcademicHoverCard1'
const AcademicHoverCard = () => {
  return (
    <Grid container my={4} spacing={2} className="academic-hover-card-grid">
        <Grid item xs sm md>
            <AcademicHoverCard1/>
        </Grid>
        <Grid item xs sm md>
            <AcademicHoverCard1/>
        </Grid>
        <Grid item xs sm md>
            <AcademicHoverCard1/>
        </Grid>

    </Grid>
  )
}

export default AcademicHoverCard