import './Home.css';

function Home() {
  return (
     <>
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
     <div className="hero-container">
       <div className="main-section animate__animated animate__fadeInDownBig">
       <h1>Apocalypse</h1>
        <h3>The world after 200 years of devastation</h3>
       </div>
     </div>


     <div className="spacer layer2"></div>


     <div className="happened" >
       <div className="happened-writing ">
            <h1>World Situation</h1>
            <p>Throughout the last 200 years, radiation has poisoned the planet and has held the world captive.</p>
            <p>Billions died, almost reducing the Earth's population down to 100 million.</p>
            <p>Survivors across the globe have made safe-zones in which they are protected by the radiation. </p>
            <p>They now live a life stuck in their zone, desperately trying to find ways to tackle the radiation.</p>
         </div>
         <img src="./images/worldmap.jpg" alt="" className="happened-picture" />
     </div>
       
     <div className="spacer layer1">
     <div className="spacer layer4"></div>
     </div>
     
       <div className="situation">
       <img src="./images/worldmap.jpg" alt="" className="situation-picture" />

       <div className="situation-writing">
            <h1>What Now</h1>
            <p>Scavengers travel across the glove, collecting resources, trying to survive</p>
            <p>Currency has long gone, all transactions are all done via trading valuables.</p>

       </div>
        </div>
     
    
     
     <div className="spacer layer3"></div>
 
     <div></div>
     
     <div className="safety">
         <div className="safety-writing">
           <h1>Safety</h1>
           <p>Look at our safety page to learn more about how to survive and adapt to the new world</p>
         </div>
         <img src="./images/worldmap.jpg" alt="" className="safety-picture" />

     </div>
     <div className="footer">
       <div className="spacer layer5">

       </div>
       </div>
     
         
   </>
  );
}

export default Home;
