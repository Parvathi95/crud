import Create from './Pages/Create'
import Navbar from './Pages/Navbar'
import Read from './Pages/Read'
import SignUp from './Pages/SignUp'
import Update from './Pages/Update'
import './Styles/Navbar.css'
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/create" element={<Create/>} />
        <Route path="/read" element={<Read/>} />
        <Route path="/update" element={<Update/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>

    </div>
   
  )
}

export default App
