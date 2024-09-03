import './ourmemories.css';

const Ourmemories = () => {
  return (
    <div className="memories">
      <h2>Gallery</h2>
      <div className="services" >
               <div className="image1">
                <img src="https://res.cloudinary.com/dvajqvtmf/image/upload/v1725020669/theater1_zqkaed.jpg" alt="party"className='party' />
                </div> 
                <div className="image2">
                    <img src="https://res.cloudinary.com/dvajqvtmf/image/upload/v1725020438/theater3_v9bh5x.jpg" alt="Party" className='party' />
                    </div>
                    <div className="image3">
                    <img src="https://res.cloudinary.com/dvajqvtmf/image/upload/v1725021723/Radiant_1_srhrou.jpg" alt="Party" className='party' />
                    </div>
                    <div className="image4">
                        <img src="https://res.cloudinary.com/dvajqvtmf/image/upload/v1725021716/Gala_2_comp_cvo0ha.jpg" alt="Party" className='party' />
                        </div> 
            </div>
    </div>
  )
}

export default Ourmemories
