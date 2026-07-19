import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./components/Home/Home"));
const Interview = lazy(() => import("./components/Interview/Interview"))
const Layout = lazy(() => import('./components/Layout/Layout'))
const Courses = lazy(() => import("./components/Courses/Courses"))

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="interview" element={<Interview />} />
          <Route path="courses" element={<Courses />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App