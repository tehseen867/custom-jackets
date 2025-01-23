
import React from 'react'
import HeroSection from './components/heroSection'
import CatagorySection from './components/catagorySection'
import ScrollingText from './components/featured'
import ReviewSection from './components/reviewSection'
import MadeProcess from './components/madeProcess'
import ProductListPage from './components/popular'
import Status from './components/status'
import CustomJacketPage from './components/createCustomJacket'
import ChatBoard from './components/chatBoard'
import Peoples_taliking from './components/peopleAreTalking'


const page = () => {
  return (
    <div >
   <main>
    <HeroSection/>
    <ScrollingText/>
    <CatagorySection/>
    <ReviewSection/>
    <MadeProcess/>
    <ProductListPage/>
    <Peoples_taliking/>
    <CustomJacketPage name='Custom Leather Jacket'/>
    <ChatBoard/>
    <Status/>
   </main>
    </div>
  )
}

export default page