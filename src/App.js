
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='*' element={ <p>404</p>} />
    </Routes>
  );
}

export default App;
