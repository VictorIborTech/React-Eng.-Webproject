import './home.css'

import MainHeader from '../../components/MainHeader'
import Services from '../../components/Services'
import Values from '../../components/Values'
import FAQS from '../../components/FAQS'
import Testimonials from '../../components/Testimonials'
import Footer from '../../components/Footer'

const Home = () => {
  return (

    <>

      <MainHeader />
      <Services />
      <Values />
      <FAQS />
      <Testimonials />
      {/* <Footer /> */}
    </>
    
  )
}

export default Home