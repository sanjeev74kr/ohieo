import './App.css'
import { whatsapp } from './assets/images';
import { Header } from "./components/header";
import {Home} from './screens/home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home /> 
      <div className='whatsapp-chat'>
      <img className='whatsapp-icon' src={whatsapp} alt='whatsapp'/>
      </div>
    </div>
  );
}

export default App;
