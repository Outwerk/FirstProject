
import './App.css';

import FormPage from './pages/FormPage';
import LandingPage from './pages/LandingPage';

import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
 

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/form" element={<FormPage/>}/>


      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
