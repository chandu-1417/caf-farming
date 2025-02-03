import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import WhyChooseUs from './Components/WhyChooseUs'
import GallerySection from './Components/GallerySection'
import ServiceBanner from './Components/ServiceBanner'
import Banner from './Components/Banner'
import AgricultureHero from './Components/AgricultureHero'
import Amenities from './Components/Amenities'
import VideoSection from './Components/VideoSection'
import ScrollingTextGSAP from './Components/ScrollingTextGSAP'
import Footer from './Components/Footer'
import Subscribe from './Components/Subscribe'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <WhyChooseUs/>
      <GallerySection/>
      <ServiceBanner/>
      <Banner/>
      <AgricultureHero/>
      <Amenities/>
      <VideoSection/>
      <ScrollingTextGSAP/>
      <Footer/>
      <Subscribe/>
    </div>
  )
}

export default Home
