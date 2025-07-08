import React from 'react'
import LandingPage from "../../../../public/assets/Landing_Page_banner.png"
import Image from 'next/image'
function page() {
  return (
    <div>
      <Image src={LandingPage} height={100} width={1000} alt="LandingPage"/>
    </div>
  )
}

export default page