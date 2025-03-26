import React from 'react'
import Header from './Header'

const AboutUs = () => {
  return (
    <div>
      <Header />
      <main className="about-content">
        <section className="about-info">
          <h2>About Us</h2>
          <p>
            Crop Trade is a platform that connects farmers and buyers to facilitate the trade of agricultural products.
            Our mission is to provide a seamless experience for farmers to sell their produce and for buyers to purchase fresh, high-quality products.
          </p>
        </section>
      </main>
    </div>
  )
}

export default AboutUs