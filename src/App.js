import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:id" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
