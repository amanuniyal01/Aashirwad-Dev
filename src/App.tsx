import { Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import Interview from "./components/Interview/Interview"
import { Layout } from "./components/Layout/Layout"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="interview" element={<Interview />} />
      </Route>
    </Routes>

  )
}

export default App