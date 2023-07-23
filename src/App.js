import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home/Home"
import List from "./pages/list/List"
import Service from "./pages/service/Service"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/listings" element={<List/>}/>
        <Route path="/listings/:id" element={<Service/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
