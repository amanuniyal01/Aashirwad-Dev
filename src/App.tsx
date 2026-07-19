import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"

const Home = lazy(() => import("./components/Home/Home"));
const Interview = lazy(() => import("./components/Interview/Interview"))
const Layout = lazy(() => import('./components/Layout/Layout'))
function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="interview" element={<Interview />} />
          <Route path="courses" element={<Interview />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App