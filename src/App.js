import { Box } from "@mantine/core";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./routes/Home";
import Spicy from "./routes/Spicy";
import Lovely from "./routes/Lovely";
import Motivative from "./routes/Motivative";

function App() {
  return (
    <Box w="100vw" h="100vh" bg="#ff6996" pos="relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spicy" element={<Spicy />} />
        <Route path="/lovely" element={<Lovely />} />
        <Route path="/motivative" element={<Motivative />} />
      </Routes>
    </Box>
  );
}

export default App;
