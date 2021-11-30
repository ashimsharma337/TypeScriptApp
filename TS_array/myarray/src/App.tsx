import Home from "./components/Home";
import Test from "./components/Test";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentsList from "./components/StudentsList";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path ="/" element = {<Home text = "This is home page"/>}/>
      <Route path ="/home" element = {<Home text = "This is home page"/>}/>
      <Route path ="/test" element = {<Test/>}/>
      {/*//we can use same component in multiple path*/}
      <Route path ="/test/123" element = {<Home text = "test page child"/>}/>
      {/*we use this types of routes  for e-commerce with text, and add props on home component
      //because we can-not make diffrent pages for all products, so we make dynamic with text=id*/}
      <Route path = "/home/ecommerce" element = { <Home text = "Hello e-commerce"/> }/>
      <Route path = "/students" element = { <StudentsList/>}/>
      <Route path = "/add" element = { <AddStudent/>}/>
      <Route path = "/edit" element = { <EditStudent/>}/>
    </Routes>
  </BrowserRouter>
   
  );
}

export default App;
