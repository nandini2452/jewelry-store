import "./App.css"
import { useEffect, useState } from "react"

import ring from "./assets/rings.jpg"
import necklace from "./assets/necklaces.jpg"
import earring from "./assets/earrings.jpg"

function App() {

  const [banners, setBanners] = useState([])
  const [currentImage, setCurrentImage] = useState(0)

  // FETCH BANNERS

  useEffect(() => {

    fetch("http://127.0.0.1:8000/api/banners/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setBanners(data)
      })
      .catch((error) => {
        console.log(error)
      })

  }, [])

  // AUTO SLIDER

  useEffect(() => {

    if (banners.length > 0) {

      const interval = setInterval(() => {

        setCurrentImage((prev) =>
          prev === banners.length - 1 ? 0 : prev + 1
        )

      }, 3000)

      return () => clearInterval(interval)

    }

  }, [banners])

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

      {/* HERO BANNER */}

      <div className="hero">

        {banners.length > 0 ? (

          <img
            src={`http://127.0.0.1:8000${banners[currentImage].image}`}
            alt="banner"
            className="hero-image"
          />

        ) : (

          <h1 style={{ color: "white" }}>
            Loading Banner...
          </h1>

        )}

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

          <div className="card">

            <img src={ring} alt="" />

            <h2>Gold Rings</h2>

            <p className="price">₹5,000</p>

            <button>Shop Now</button>

          </div>

          <div className="card">

            <img src={necklace} alt="" />

            <h2>Diamond Necklace</h2>

            <p className="price">₹12,000</p>

            <button>Shop Now</button>

          </div>

          <div className="card">

            <img src={earring} alt="" />

            <h2>Luxury Earrings</h2>

            <p className="price">₹7,000</p>

            <button>Shop Now</button>

          </div>

        </div>

      </div>

    </div>

  )

}

export default App