import { StrictMode , Fragment } from 'react' // Son Componentes
import { createRoot} from 'react-dom/client' //Es una función
import { App } from './App';
import './index.css';


const divRoot = document.getElementById('root');
const root = createRoot(divRoot);


root.render(
  <>

    <App/>


  </>

);



  

