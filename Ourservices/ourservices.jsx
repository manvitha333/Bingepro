import './ourservices.css';

const Ourservices = () => {
  return (
    <div>
      <h2 className="main">Our Services</h2>
      <div className="services">

        <div className="card">
          <img src="https://res.cloudinary.com/dvajqvtmf/image/upload/v1724928429/business-people-working-in-the-office-scaled_eurqpy.jpg" alt="Corporate Meetings" className="service-image" />
          <div className="details">
            <span className="category">Corporate</span>
            <h3 className="title">Corporate Meetings</h3>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt porta velit, sed suscipit massa consequat sed.</p>
            <div className="info">
              <span>4 HOURS</span>
              <span>UP TO 50 PERSONS</span>
            </div>
            <div className="price">$1200</div>
          </div>
        </div>

        <div className="card">
          <img src="https://res.cloudinary.com/dvajqvtmf/image/upload/v1724931415/Date-Night-15_1_700x_zpwmwl.webp" alt="Anniversaries" className="service-image" />
          <div className="details">
            <span className="category">Family</span>
            <h3 className="title">Anniversaries</h3>
            <p className="description">Quisque pellentesque nibh ut sem elementum pulvinar. Integer bibendum, ligula a dapibus bibendum, massa lectus condimentum augue.</p>
            <div className="info">
              <span>1-3 DAYS</span>
              <span>UP TO 150 PERSONS</span>
            </div>
            <div className="price">$3000</div>
          </div>
        </div>

        
        <div className="card">
          <img src="https://res.cloudinary.com/dvajqvtmf/image/upload/v1724931884/premium_photo-1683121126477-17ef068309bc_ednlow.jpg" alt="Anniversaries" className="service-image" />
          <div className="details">
            <span className="category">Friends</span>
            <h3 className="title">Farewell</h3>
            <p className="description">Quisque pellentesque nibh ut sem elementum pulvinar. Integer bibendum, ligula a dapibus bibendum, massa lectus condimentum augue.</p>
            <div className="info">
              <span>1-3 DAYS</span>
              <span>UP TO 150 PERSONS</span>
            </div>
            <div className="price">$3500</div>
          </div>
        </div>

        <div className="card">
          <img src="https://res.cloudinary.com/dvajqvtmf/image/upload/v1724931415/Date-Night-15_1_700x_zpwmwl.webp" alt="Anniversaries" className="service-image" />
          <div className="details">
            <span className="category">Family</span>
            <h3 className="title">Anniversaries</h3>
            <p className="description">Quisque pellentesque nibh ut sem elementum pulvinar. Integer bibendum, ligula a dapibus bibendum, massa lectus condimentum augue.</p>
            <div className="info">
              <span>1-3 DAYS</span>
              <span>UP TO 150 PERSONS</span>
            </div>
            <div className="price">$3000</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Ourservices;

