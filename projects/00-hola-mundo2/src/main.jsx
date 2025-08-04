import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App';

import './main.css'

const DivRoot = document.getElementById('root');

const root = createRoot(DivRoot);

root.render(

  <>
  
    <App/>

  
  </>


);





