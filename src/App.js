import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Layout from "./Layout/Layout"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Projects from "./pages/Projects"

const App = () => {
  return (
    <>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      <Footer />
    </>
  )
}

export default App
