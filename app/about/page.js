import React from "react";
import "../styles.css"; // Import your CSS file
import Image from 'next/image';



function About() {
  return (
      <main  style={{flex:"flex-grow"}}>

        <p  className="title">About me</p>
        <div className="flex flex-row">
          <p  className="pgText width-25%">I've been programming since I was in freshman year of high school, and since then I have been captivated.
                Like many, the notion of programming video games was my first inlet to the craft, but I was soon captivated by the freedom and euphoria that programming gave me.
          </p>
          <Image src="../images/IMG-4372.jpg" alt="Thats me taking a photo at Google during the end of my second internship" width={500} height={300} />
        </div>
        
      </main>
  );
  
  
}



export default About;
