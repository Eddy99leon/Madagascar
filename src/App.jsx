import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import Layout from "./pages/Layout"
import { IoIosArrowUp } from "react-icons/io"
import Sidebar from "./compenents/Sidebar"

function App() {

  const BackToTop = () => {
    window.scrollTo({ top:0, behavior:'smooth' })
  }

  return (
    <>
      <Sidebar />
      <Routes>
        <Route basename="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <div 
        className='fixed right-4 lg:right-10 bottom-7 md:bottom-9 cursor-pointer md:text-xl bg-Rouge p-1 lg:p-2 text-gray-950 shadow-sm shadow-ColorVert'
        onClick={BackToTop}
      >
        <IoIosArrowUp />
      </div>
    </>
  )
}

export default App
