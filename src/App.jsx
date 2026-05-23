import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";

import Home from "./pages/Home.jsx";
import Project from "./pages/Project.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import CostumeDesign from "./pages/CostumeDesign.jsx";
import StylingVideos from "./pages/StylingVideos.jsx";
import StylingStills from "./pages/StylingStills.jsx";
import AssistantCostumeDesign from "./pages/AssistantCostumeDesign.jsx";
import AssistantStyling from "./pages/AssistantStyling.jsx";



export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/costume-design" element={<CostumeDesign />} />
        <Route path="/costume-design/:slug" element={<Project />} />

        <Route path="/styling/videos" element={<StylingVideos />} />
        <Route path="/styling/videos/:slug" element={<Project />} />

        <Route path="/styling/stills" element={<StylingStills />} />
        <Route path="/styling/stills/:slug" element={<Project />} />

        <Route path="/assistant/costume-design" element={<AssistantCostumeDesign />} />
        <Route path="/assistant/costume-design/:slug" element={<Project />} />

        <Route path="/assistant/styling" element={<AssistantStyling />} />
        <Route path="/assistant/styling/:slug" element={<Project />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
