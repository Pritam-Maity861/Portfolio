import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Education from './components/Education/Education'
// import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Work from './components/Project/Project'
import Contact from './components/Contact/Contact'
import BlurBlob from './components/BlurBlob'


const App = () => {
  return (
    <div className='bg-[#050414]'>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
      </div>
      <BlurBlob position={{top:"30%",left:"20%"}} size={{width:"30%",height:"40%"}} />
      <BlurBlob position={{top:"70%",left:"80%"}} size={{width:"25%",height:"30%"}} />
      <div className=' relative pt-20'>
        <Navbar/>
        <About/>
        <Skills/>
        {/* <Experience/> */}
        <Work/>
        <Education/>
        <Contact/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App
