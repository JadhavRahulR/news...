import React  from "react";
import Nav from "./Nav";
import { Routes,Route } from "react-router-dom";
import Nesw from "./Home";

function App() {

  return (
    <>
     <Nav/>
    <Routes>
      <Route  path = "/" element={<Nesw  country='in' category='general'/>}    />
      <Route  path = "/business" element={<Nesw key = "business" country='in' category="business"/>}    />
       <Route exact path = "/sports" element={<Nesw key = 'sports' country='in' category = 'sports' />}/>
      <Route  path = "/entertainment" element={<Nesw key = 'entertainment' country='in' category = 'entertainment'/>}/>
      <Route  path = "/health" element={<Nesw key = 'health' country='in' category = 'health' />}/>
      <Route  path = "/science" element={<Nesw key = 'science' country='in' category = 'science' />}/>
    <Route  path = "/technology" element={<Nesw key = 'technology' country='in' category = 'technology'/>}/>
    </Routes>
    </>
  )
}

export default App;
