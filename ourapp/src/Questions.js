
import './Questions.css';

const Questions = () => {

    return (

        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
            />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='True'/>
            <link href="https://fonts.googleapis.com/css2?family=Aldrich&display=swap" rel="stylesheet"></link>
            <section className="map">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4">
                            <h2 className="animate__animated animate__bounce">
                                You are not alone!!
                            </h2>
                            <h3 className="animate__animated animate__bounceInLeft">
                                Look for Us!
                            </h3>
                            <h3>
                                While we wait for the dawn of a new beginning,find us through the map.
                            </h3>
                            <p>PLACES MARKED RED
                                ARE STILL CONSIDERED NUCLEAR AND DANGEROUS!</p>
                        </div>
                        <div className="col-lg-4">
                            <span className="map">
                                <iframe width='100%' height='400px' src="https://api.mapbox.com/styles/v1/samg0109/ckwhtmfzd680814ocf2vu2zrh.html?title=false&access_token=pk.eyJ1Ijoic2FtZzAxMDkiLCJhIjoiY2tzendqOHVmMnh2ZzJxdGZ2c3FoZWR2eCJ9.NH4uz7dqmRkpvJmZsxBO9Q&zoomwheel=false#0.47/0/-60.1" title="Basic"></iframe>
                            </span>
                        </div>
                    </div>


                    <div className="row justify-content-center" id="forms">
                        <div className="col-lg-4">
                            <h3>Complete this Form!</h3>
                            <p>Answer these questions carefully and we might come to pick you up.We have already tracked your location.</p>
                            <div className="mb-3 row">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" placeholder="Enter Email" id="email" />

                                <label htmlFor="formFile" className="form-label">Make a 30 second video introducing yourself.</label>
                                <input className="form-control" type="file" id="formFile"></input>

                            </div>
                            <button className="btn btn-primary" type="submit">Confirm Identity</button>
                        </div>

                    </div>
                </div>
            </section>
            <section className="form">

            </section>

        </>
    );
}

export default Questions;
