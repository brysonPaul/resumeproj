import React from "react";
import "../styles.css"; // Import your CSS file
import Image from 'next/image';

function addProd(isProd, src) {
  return (isProd ? "/resumeproj" : " ") + src;

}

function About() {
  const isProd = process.env.NODE_ENV === 'production';
  return (

    <div style={{width:"100%"}}>
      <p className="title">Hi, Im Bryson</p>

      <div className="flex flex-row" style={{marginTop:"6%"}}>
        <div className="left">

          <p className="pgText">
            I`ve been programming since I was in freshman year of high school, and since then I have been captivated. Like many, the notion of programming video games was my first inlet to the craft, but I was soon captivated by the freedom and euphoria that programming gave me. Ever since, I have been honing my craft to get to the point I am today. But this thirst for knowledge will always be a lifetime goal for me.
          </p>
        </div>

        <div className="right">
          <Image
            className="photo"
            src={addProd(isProd, "/IMG-4372.jpg")}
            alt="Thats me taking a photo at Google during the end of my second internship"
            width={300}
            height={500}
          />
        </div>
      </div>
      
      <div className="soloText" >
        <p > 
              Ever since, I have been honing my craft to get to the point I am today. This thirst for knowledge will always be a lifetime goal for me.
        </p>
      </div>

      <div className="flex flex-row" style={{marginTop:"6%"}} >
        <div className="left">
          <Image
            className="photo"
            src={addProd(isProd, "/breck.jpg")}
            alt="A beautiful view of Breckenridge I took my first time skiing"
            width={300}
            height={500}
          />
        </div>

        <div className="right">
          <p className="pgText"> 
            Outside of programming, my hobbies include building keyboards, playing volleyball, taking photos, and hiking! I recently got into skiing too :)
          </p>

          <p className="pgText"> 
            Check out my photo gallery for some photos of my hobbies, and the keyboards tab for a deeper dive into my builds
          </p>
        </div>

      </div>


    </div>

  );


}



export default About;
