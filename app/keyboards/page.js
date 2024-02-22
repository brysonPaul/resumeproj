'use client'
import React, { useCallback } from "react";
import "../styles.css"; // Import your CSS file
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const boards = [{ photo: "/derivative.jpg" },
{ photo: "/onyx.jpg" },
{ photo: "/dolice.jpg" },
{ photo: "/qk.jpg" }];

export default function Keyboards() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const next = useCallback(() => {
    if (!embla) return;
    if (embla.canScrollNext()) {
      embla.scrollNext();
    } else {
      embla.scrollTo(0);
    }
  }, [embla]);

  const prev = useCallback(() => {
    if (!embla) return;
    if (embla.canScrollPrev()) {
      embla.scrollPrev();
    } else {
      embla.scrollTo(emblaRef.length - 1);
    }
  }, [embla,emblaRef.length ]);

  return (
    <main style={{ display: 'grid', minHeight: "75vh" }}>
      <p className="title">Keyboards</p>
      <p className="pgText" style={{ marginLeft: "6%", marginTop: "2%" }}>
        Take a look at all of my keyboards! Interact with one you like to get some more specifics on it!
      </p>

      <div className="embla" ref={emblaRef} style={{ display: "flex", justifyContent: "center" }}>
        <div className="embla__container">
          {boards.map((item, index) => (
            <div key={index} className="embla__slide" style={{ display: "flex", justifyItems: "center", alignItems: 'center' }}>

              <button style={{ padding: "50px", width: '25%', height: '25%', fontSize: '50px', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }} onClick={prev}>
                <FontAwesomeIcon icon={faArrowLeft}>
                </FontAwesomeIcon>
              </button>
              <Link key={index} href={`/keyboards/viewBoard`} onClick={() => {localStorage.setItem("index", index); }} style={{display:'flex' }} >
                <Image
                  className="keeb-photo"
                  src={item.photo}
                  alt={"keyboard!"}
                  width={400}
                  height={400}
                />
              </Link>
              <button style={{ padding: "50px", width: '25%', height: '25%', fontSize: '50px', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start' }} onClick={next}>
                <FontAwesomeIcon icon={faArrowRight}>
                </FontAwesomeIcon>
              </button>
            </div>


          ))}
        </div>
      </div>
    </main>
  );
}
