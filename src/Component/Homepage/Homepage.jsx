import React from 'react'
import Banner from '../Banner/Banner'
import About from '../About/About';
import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Service from '../sService/Service';
// import Portfolio from '../Portfolio/Portfolio';

function Homepage() {
  return (
   <>
   <Banner/>
   <About/>
   <Resume/>
   <Service/>
   {/* <Portfolio/> */}
   <Contact/>
   <Footer/>
   </>
  )
}

export default Homepage;