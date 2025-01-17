import React from 'react'
import { Grid, Typography, Paper, Box } from '@mui/material'
import SalesChart from './components/SalesChart'
import CategoryChart from './components/CategoryChart'
import ActivityChart from './components/ActivityChart'
import Map from './components/Map'

const App: React.FC = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Sales Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Monthly Sales Trend
            </Typography>
            <SalesChart />
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Sales by Category
            </Typography>
            <CategoryChart />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Customer Locations
            </Typography>
            <Map />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              User Activity by Hour
            </Typography>
            <ActivityChart />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
