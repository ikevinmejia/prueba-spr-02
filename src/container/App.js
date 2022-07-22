
import Inicio from "../pages/Inicio";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from "../components/NotFoundPage";
import Introduce from "../pages/Introduce";
import img3 from '../assets/img/img-p3.png'
import img4 from '../assets/img/img-p4.png'
import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";
import Home from "../pages/Home";
import NavBar from "../components/NavBar";
function App() {
  return (
    <BrowserRouter>
      <Routes >
        {/* pagina inicial */}
        <Route path="" element={<Inicio/>}/>

        <Route path="b1"
          element={
          <Introduce
            imagen={img3}
            titulo='See your goals'
            texto='Learn and learn new things every day and get rewards be on top'
            enlace='/b2'/>}/>
        <Route path="b2"
          element={
            <Introduce
              imagen={img4}
              titulo='Explore new courses'
              texto={`Don't stop at one, start learning the next and make progress.`}
              enlace='/login'/>}/>

        <Route path="/login" element={<Login/>}/>
        <Route path="/createAccount" element={<CreateAccount/>}/>
        <Route path="/home" element={<Home/>}/>

        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <NavBar/>
    </BrowserRouter>
  );
}

export default App;
