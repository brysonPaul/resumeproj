'use client'
import React, { useEffect, useMemo, useState } from "react";
import "../../styles.css";
import { Link } from "@nextui-org/react";
import { SpinningCircles } from "react-loading-icons";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";




export default function ViewBoard() {
  const boards =  [{ name: 'Clay Derivative', designer: "jjw", switches: 'Lubed Cherry Nixies with 62g springs', keycaps: 'GMK Earth Tones', mount: "O-Ring", photo: "/derivative.jpg" },
  { name: 'Navy Onyx FRL TKL', designer: 'funderbunker', switches: 'Lubed Gateron Cream Sodas', keycaps: 'GMK Stargaze', mount: "Gasket", photo: "/onyx.jpg" },
  { name: 'Dolice', designer: 'TGR x LinWorks', switches: 'Broken in + Lubed Cherry Nixies with 62g springs ', keycaps: 'GMK Rainy Day', mount: "Sandwich", photo: "/dolice.jpg" },
  { name: 'QK65', designer: 'qwertykeys', switches: 'Lubed Gateron Oil Kings', keycaps: 'GMK Dracula', mount: "Gasket", photo: "/qk.jpg" }];
  const [index, setIndex] = useState(-1);
  const [board, setBoard] = useState(boards[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = localStorage.getItem('index');
      if (newIndex !== index) {
        setIndex(newIndex);
        setBoard(boards[newIndex]);
      }
    }, 1000); // Check every 1 second

    return () => clearInterval(intervalId);
  }, [index,boards]);


  return (
    <main style={{ minHeight: "100vh", display: 'flex', width: '100%' }}>
      {index != -1 ? (
        <div style={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center' }}>
          <Link color="foreground" href="/keyboards" size="lg" style={{ alignSelf: 'flex-start', padding: '1%', fontSize: '150%' }}>
            <FontAwesomeIcon icon={faArrowLeft}>
            </FontAwesomeIcon>
          </Link>
          <p className="title" style={{ alignSelf: 'flex-start' }}>{board.name}</p>
          <div style={{ display: 'flex', width: '100%', flexDirection: 'row', padding:'4%' }}>
            <Image
              className="keeb-photo"
              src={board.photo}
              alt={board.name}
              width={200}
              height={200}
              style={{ width: '60%' }}
            />
            <div class="pgText" style={{ display: 'flex', flexDirection: 'column', padding: '4%', fontSize: '35px' }}>
              <p>Designer: {board.designer}</p>
              <p>Switches: {board.switches}</p>
              <p>Mount: {board.mount}</p>
              <p>Keycaps: {board.keycaps}</p>
            </div>
            <div>

            </div>

          </div>

        </div>


      ) : (<div style={{ display: 'flex', justifyContent: 'center', alignSelf: 'center', width: '100%', height: "25%" }}><SpinningCircles style={{ scale: '200%' }} /></div>)
      }

    </main>
  )


}
