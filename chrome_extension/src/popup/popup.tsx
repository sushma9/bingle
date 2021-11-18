import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material'
import 'fontsource-roboto'
import './popup.css'
import {
  getStoredOverlayOption,
  setStoredOverlayOption,
  LocalStorage,
} from '../utils/storage'

const App: React.FC<{}> = () => {
  const [options, setOptions] = useState<LocalStorage | null>(null)

  useEffect(() => {
    // Set options from saved options in local storage.
    getStoredOverlayOption().then((options) => setOptions(options))
  }, [])

  const handleOptionsChange = (e) => {
    const selectedValue = e.target.value

    setStoredOverlayOption(selectedValue).then(() => {
      setOptions(selectedValue)
    })
  }

  if (!options) {
    return null
  }

  return (
    <Box px="8px" py="4px">
      <FormControl component="fieldset">
        <FormLabel component="legend">Bingle Display Settings</FormLabel>
        <RadioGroup
          value={options.overlayOption}
          onChange={(e) => handleOptionsChange(e)}
        >
          <FormControlLabel value="auto" control={<Radio />} label="Auto" />
          <FormControlLabel value="toggle" control={<Radio />} label="Toggle" />
          <FormControlLabel
            value="disable"
            control={<Radio />}
            label="Disable"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
