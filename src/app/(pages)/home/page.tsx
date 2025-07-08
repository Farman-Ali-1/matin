import React from 'react'
import LandingPage from "../../../../public/assets/Landing_Page_banner.png"
import Image from 'next/image'
function page() {
  return (
    <div>
      <Image src={LandingPage} alt="LandingPage"/>
    </div>
  )
}

export default page