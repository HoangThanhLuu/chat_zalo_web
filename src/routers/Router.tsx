import { Route, Routes } from "react-router-dom";

import Login from "../pages/Login/Login";


const Router: React.FC=()=>{
    return (
      <Routes>
        <Route path="/login" element={<Login/>}/>
      
      </Routes>
    )
   
}
export default Router;