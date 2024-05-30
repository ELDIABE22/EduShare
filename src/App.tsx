import { Route, Routes } from "react-router-dom";
import LandingPage from "./page/LandingPage";
import DocsPage from "./page/DocsPage";
import DocsUploadPage from "./page/DocsUploadPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/docs" element={<DocsPage />} />
      <Route path="/docs/upload" element={<DocsUploadPage />} />
    </Routes>
  );
}

export default App;
