import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import ArticlesList from "./components/ArticlesList";
import ContentText from "./components/ContentText";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="content_text" element={<ContentText />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
