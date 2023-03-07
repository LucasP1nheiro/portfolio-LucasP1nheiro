
import Header from './components/Header'
import Home from './pages/Home'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import About from './pages/About'
import FormSubmited from './pages/FormSubmited'
import NotFound from './pages/NotFound'




function App() {
  

  return (
    <div className="bg-paleBlue min-h-screen max-h-auto min-w-screen overflow-x-hidden flex flex-col items-center  justify-center pt-12 md:pt-48">
      
      <BrowserRouter>
        
        <Header/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/form-submited/:name" element={<FormSubmited />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        
        
      </BrowserRouter>
      
    </div>
  )
}

export default App
