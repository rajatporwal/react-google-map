import React, { useState } from 'react'
import { Paper, makeStyles, Typography } from '@material-ui/core'
import GmapsAddress from './GmapsAddress'
import WithGoogleApi from './WithGoogleApi'

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'block',
    marginLeft: '25%',
    padding: theme.spacing(3),
    width: '50%',
  },
  component: {
    width: '100%',
    height: '100%',
  },
  sections: {
    padding: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(1),
  },
}))

const sampleData = {
  vendorStreetAddress: {
    caption: 'Indore, Indore Tahsil, India',
    heart: { lat: 22.7203616, lng: 75.8681996 },
  },
}

const App = () => {
  const [streetAddr, setStreetAddr] = useState(sampleData.vendorStreetAddress)
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
        <WithGoogleApi apiKey="Enter API Key Here">
          <Typography className={classes.sections}>STREET ADDRESS MODE</Typography>
          <GmapsAddress className={classes.component} value={streetAddr} onChange={setStreetAddr} />
        </WithGoogleApi>
    </Paper>
  )
}

export default App
