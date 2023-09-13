import { Route, Routes } from "react-router-dom";
import "./App.css";
import LobbyScreen from "./screens/Lobby";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LobbyScreen />} />
      </Routes>
    </>
  );
}

export default App;
