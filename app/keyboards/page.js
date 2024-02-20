'use client'
import React, { useEffect } from "react";
import "../styles.css"; // Import your CSS file
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const isProd = process.env.NODE_ENV === 'production';
function addProd(isProd, src) {
  return (isProd ? "/resumeproj" : " ") + src;
}

const boards = [{ name: 'Clay Derivative', designer: "jjw", switches: 'Lubed Cherry Nixies with 62g springs', keycaps: 'GMK Earth Tones', mount: "O-Ring", photo:addProd(isProd,"/derivative.jpg") },
{ name: 'Navy Onyx FRL TKL', designer: 'funderbunker', switches: 'Lubed Gateron Cream Sodas', keycaps: 'GMK Stargaze', mount: "Gasket", photo:addProd(isProd,"/onyx.jpg") },
{ name: 'Dolice', designer: 'TGR x LinWorks', switches: 'Broken in + Lubed Cherry Nixies with 62g springs ', keycaps: 'GMK Rainy Day', mount: "Sandwich", photo:addProd(isProd,"/dolice.jpg") },
{ name: 'QK65', designer: 'qwertykeys', switches: 'Lubed Gateron Oil Kings', keycaps: 'GMK Dracula', mount: "Gasket", photo:addProd(isProd,"/qk.jpg") }]

export default function Keyboards() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <main style={{ display:'grid', minHeight: "75vh", width: "100%" }}>
      <p className="title">Keyboards</p>
      <p className="pgText" style={{ marginLeft: "6%", marginTop: "2%" }}>
        Take a look at all of my keyboards! Interact with one you like to get some more specifics on it!
      </p>

      <div className="embla" ref={emblaRef} style={{ display: "flex", justifyContent: "center" }}>
        <div className="embla__container">
          {boards.map((item, index) => (
            <div key={index} className="embla__slide">
              <Image
                className="keeb-photo"
                src={item.photo}
                alt={item.name}
                width={400}
                height={400}
              />
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
