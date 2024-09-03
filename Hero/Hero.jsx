
import './Hero.css';
const Hero = () => {
  return (
    
       <div className="main-container">
      
      <img src={"https://res.cloudinary.com/dvajqvtmf/image/upload/v1724924143/pngtree-luxury-christmas-party-on-dark-blue-background-with-decorative-lights-and-image_15281913_zegjsi.jpg"} alt="Celebration Background" className="hero-image" />
        <div className="overlay"></div>
        <div className="content">
          <h1>Book The <span className="highlight">Binge Pro</span> for an Unforgettable Experience!</h1>
          <p>India's #1 private Theater Celebration space</p>
          <p>Choose the occasion, give us the requirements and leave it to us. We will deliver the best.</p>
          <div className="buttons">
            <button className="book-now">Book Now</button>
            <button className="join-waitlist">Join Waitlist</button>
          </div>
        

        </div>
    
    </div>
   
  )
}

export default Hero

