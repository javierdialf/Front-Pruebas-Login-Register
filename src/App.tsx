import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FormLogin from "./Components/FormLogin";
import FormRegister from "./Components/FormRegister";


function App() {

  return (
      <Router>
        <Routes>
            <Route path='/' element={<FormLogin/>} />
            <Route path='/Register' element={<FormRegister/>} />
        </Routes>
      </Router>
  )
}

export default App
