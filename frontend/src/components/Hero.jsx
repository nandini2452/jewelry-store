import { useEffect, useState } from 'react'

import banner1 from '../assets/banner.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'

function Hero() {

  const images = [banner1, banner2, banner3]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      )

    }, 3000)

    return () => clearInterval(interval)

  }, [])

  return (
    <div className="hero">

      <img
        src={images[currentImage]}
        alt="banner"
        className="hero-image"
      />

    </div>
  )
}

export default Hero