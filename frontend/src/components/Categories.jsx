import ring from '../assets/rings.jpg'
import necklace from '../assets/necklace.jpg'
import earrings from '../assets/earrings.jpg'

function Categories() {

  return (

    <div className="categories-section">

      <h1 className="category-heading">
        Elegant Jewelry Collections
      </h1>

      <p className="category-text">
        Discover beautiful rings, necklaces, and earrings
      </p>

      <div className="categories">

        <div className="card">

          <img src={ring} alt="rings" />

          <h2>Rings</h2>

          <button>Shop Now</button>

        </div>

        <div className="card">

          <img src={necklace} alt="necklace" />

          <h2>Necklaces</h2>

          <button>Shop Now</button>

        </div>

        <div className="card">

          <img src={earrings} alt="earrings" />

          <h2>Earrings</h2>

          <button>Shop Now</button>

        </div>

      </div>

    </div>
  )
}

export default Categories