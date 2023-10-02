import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn.jsx';
import SignUP from './pages/SignUp.jsx';
import Profile from './pages/Profile.jsx';


export default function App() {
  return <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Sign-in" element={<SignIn/>}/>
    <Route path="/Sign-up" element={<SignUP/>}/>
    <Route path="/About" element={<About/> }/>
    <Route path="/profile" element={<Profile/>}/>
   </Routes>
   
  </BrowserRouter>;
     
     
     
  

   
}
