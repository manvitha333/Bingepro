
import './Whyus.css'; 

const Whyus = () => {
    return (
        <div >
            <div className="Whyus">
            <div className="images" >
               <div className="image1">
                <img src="https://res.cloudinary.com/dvajqvtmf/image/upload/v1724949616/5331a1b39545cb92f8f63edd270381e5_u6ngst.jpg" alt="Celebration"className='celebration' />
                </div> 
                <div className="image2">
                    <img src="https://res.cloudinary.com/dvajqvtmf/image/upload/v1724950115/a39a0b8273026a260d0c0ac3e515dae1_h7w0zy.jpg" alt="Party" className='party' />
                    </div>
            </div>
            <div className="content1">
                <h1>Why Us?</h1>
                <div className="item">
                    <h2>Heading</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Tellus aliquam in at ut. Facilisi sit arcu venenatis tincidunt non urna.</p>
                </div>
                <div className="item">
                    <h2>Heading</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Tellus aliquam in at ut. Facilisi sit arcu venenatis tincidunt non urna.</p>
                </div>
                <div className="item">
                    <h2>Heading</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Tellus aliquam in at ut. Facilisi sit arcu venenatis tincidunt non urna.</p>
                </div>
                <button className="button">Book Now</button>
            </div>
            </div>
        </div>
    );
}

export default Whyus;
