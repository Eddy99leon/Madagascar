import { Route, Routes } from "react-router-dom"
import Footer from "./compenents/Footer"
import Navbar from "./compenents/Navbar"
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import Layout from "./pages/Layout"

function App() {
  return (
    <>
      <Routes>
        <Route basename="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
