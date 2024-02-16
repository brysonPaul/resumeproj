import googleSelfie from "../images/IMG-4372.jpg"
import Bar from "../components/Bar";
function About() {
  return (
    
    <div className="Page">
      <Bar/>
      <header className="header">
        <h1>About Me</h1>
      </header>

      <section className="atext">
        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", height: "100vh" }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ maxWidth: "800px", alignItems: "center" }}>
              <p>Im Bryson</p>
              <p className='atext'>
                I've been programming since I was in freshman year of high school, and since then I have been captivated.
                Like many, the notion of programming video games was my first inlet to the craft, but I was soon captivated by the freedom and euphoria that programming gave me.
              </p>
            </div>
            <img className="photo" alt="Thats me taking a photo at Google during the end of my second internship" src={googleSelfie}></img>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", height: "100vh" }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img className="photo" alt="Thats me taking a photo at Google during the end of my second internship" src={googleSelfie}></img>
            <div style={{ maxWidth: "800px", alignItems: "center" }}>
              
            
              <p className='atext'>
                  Ever since, I have been honing my craft to get to the point I am today. But this thirst for knowledge will always be a lifetime goal for me.
              </p>
            </div>
          </div>
        </div>


        {/* <p className='atext'>
     
    </p> */}
        {/* <p className="atext">As for Hobbies</p> */}
      </section>
    </div>

  );
}



export default About;
