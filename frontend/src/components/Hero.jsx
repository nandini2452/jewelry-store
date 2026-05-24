import { useEffect, useState } from "react";

function Hero() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/banners/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBanners(data);
      });
  }, []);

  return (
    <div>
      <h1>Banner Section</h1>

      {banners.map((banner) => (
        <div key={banner.id}>
          <h2>{banner.title}</h2>

          <img
            src={`http://127.0.0.1:8000${banner.image}`}
            alt={banner.title}
            style={{
              width: "400px",
              height: "300px",
              objectFit: "cover",
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default Hero;