import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { AppAPI } from './AppAPI'
import { AppClean } from './AppClean'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <AppAPI/>
    {/* <AppClean/> */}
  </StrictMode>,
)
