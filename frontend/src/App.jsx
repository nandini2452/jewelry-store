import "./App.css"

import { useEffect, useState } from "react"

import banner1 from "./assets/banner1.jpg"
import banner2 from "./assets/banner2.jpg"
import banner3 from "./assets/banner3.jpg"

import ring from "./assets/rings.jpg"
import necklace from "./assets/necklaces.jpg"
import earring from "./assets/earrings.jpg"

function App() {

  const banners = [banner1, banner2, banner3]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage((prev) =>
        prev === banners.length - 1 ? 0 : prev + 1
      )

    }, 3000)

    return () => clearInterval(interval)

  }, [])

  return (

    <div>

      {/* NAVBAR */}

      <nav className="navbar">

        <h1 className="logo">Luxury Jewelry</h1>

        <ul className="nav-links">
          <li>Home</li>
          <li>Rings</li>
          <li>Necklaces</li>
          <li>Earrings</li>
        </ul>

      </nav>

      {/* SLIDING BANNER */}

      <div className="hero">

        <img
          src={banners[currentImage]}
          className="hero-image"
        />

      </div>

      {/* COLLECTION */}

      <div className="categories-section">

        <h1 className="category-heading">
          Our Collection
        </h1>

        <p className="category-text">
          Explore beautiful jewelry collections
        </p>

        <div className="categories">

          {/* RINGS */}

          <div className="card">

            <img src={ring} />

            <h2>Gold Rings</h2>

            <p className="price">₹5,000</p>

            <button>Shop Now</button>

          </div>

          {/* NECKLACE */}

          <div className="card">

            <img src={necklace} />

            <h2>Diamond Necklace</h2>

            <p className="price">₹12,000</p>

            <button>Shop Now</button>

          </div>

          {/* EARRINGS */}

          <div className="card">

            <img src={earring} />

            <h2>Luxury Earrings</h2>

            <p className="price">₹7,000</p>

            <button>Shop Now</button>

          </div>

        </div>

      </div>

      {/* FOOTER */}

      <div className="footer">

        <div className="footer-box">
          <h3>Free Shipping</h3>
          <p>On all orders</p>
        </div>

        <div className="footer-box">
          <h3>Certified Jewelry</h3>
          <p>100% Original</p>
        </div>

        <div className="footer-box">
          <h3>Secure Payment</h3>
          <p>Safe Checkout</p>
        </div>

      </div>

    </div>

  )
}

export default App