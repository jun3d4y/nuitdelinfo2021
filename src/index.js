
import Generator from './components/generator';
import Viewer from './components/viewer';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Generator />} />
    <Route path="/viewer" element={<Viewer />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
