import React from "react";
import "../styles.css"; // Import your CSS file
import Image from 'next/image';



function About() {
  return (
    <main style={{ minHeight:"200%" }}>

      <p className="title">About me</p>
      <div className="flex flex-row" style={{ width: "100%", marginLeft: "5%", justifyContent: "flex-start" }}>
        <p className="pgText width-35%">I`ve been programming since I was in freshman year of high school, and since then I have been captivated.
          Like many, the notion of programming video games was my first inlet to the craft, but I was soon captivated by the freedom and euphoria that programming gave me.
        </p>
        <Image src="/IMG-4372.jpg" alt="Thats me taking a photo at Google during the end of my second internship" width={500} height={300} />
      </div>

      <div className="flex flex-row" style={{ width: "100%", marginLeft: "-5%", marginTop: "15%", justifyContent: "flex-start" }}>
        <Image style={{marginLeft: "25%"}} src="/IMG-4372.jpg" alt="Thats me taking a photo at Google during the end of my second internship" width={500} height={300} />

        <div className="flex flex-col" style={{ width: "100%"}}>
          <p className="pgText width-%"> Ever since, I have been honing my craft to get to the point I am today. But this thirst for knowledge will always be a lifetime goal for me.
          </p>
          <p className="pgText width-35%"> Outside of programming, my hobbies include building keyboards, playing volleyball, and hiking! I recently got into skiing too :)
          </p>
        </div>
      </div>

    </main>
  );


}



export default About;
