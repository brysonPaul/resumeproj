'use client'
import React, { useEffect, useState, useCallback } from 'react';
import "../styles.css";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { SimpleIconsDevpost } from './SimpleIconDevpost';
import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons';
import { Chip } from "@nextui-org/react";
import Image from "next/image";

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from "embla-carousel-autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Project(project) {
    project = project.project;
    const [chipArr, setChipArr] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (project && project.technologies) {
            setChipArr(project.technologies.split(","));
        }
        setIsLoading(false);

    }, [project]);

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
    }, [embla, emblaRef.length]);

    return (
        //entire thing
        // Every project will have a name, description, date, and technologies
        <div style={{ display: 'flex', height: '100%', flexDirection: 'row', borderColor: "white", borderTopWidth: '0.25px', borderBottomWidth: '0.25px', borderColor: 'white', padding: '1%', paddingLeft: '5%' }}>
            {/* Entire side that doesnt have a photo */}
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '55%', gap: '5%' }}>
                {/* title, links, and date */}
                <div style={{ display: 'flex', flexDirection: 'row', justifyItems: 'space-between', alignItems: 'center', width: '100%', height: '10%', gap: '5%' }}>
                    <p className='ptitle'>
                        {project.name}
                    </p>
                    <div style={{ justifyItems: 'flex-start', display: 'flex', flexDirection: 'row', width: '50%', gap: '5%' }}>


                        {project.github && <a className="icon-links-projects flex flex-col" href={project.github}>
                            <FontAwesomeIcon icon={faGithub} title="View this Github Repo" />
                        </a>}

                        {project.github_2 && <a className="icon-links-projects flex flex-col" href={project.github_2}>
                            <FontAwesomeIcon icon={faGithub} title="View this Github Repo" />
                        </a>}

                        {project.link && <a className="icon-links-projects flex flex-col" href={project.link}>
                            <FontAwesomeIcon icon={faLink} title="View this external link" />
                        </a>}

                        {project.devpost && <a className="icon-links-projects flex flex-col" href={project.devpost}>
                            <SimpleIconsDevpost />
                        </a>}

                        {project.app && <a className="icon-links-projects flex flex-col" href={project.app}>
                            <FontAwesomeIcon icon={faAppStoreIos} title="View this external link" />
                        </a>}
                    </div >
                    {/* date */}
                    <p className='ptitleDate' >
                        {project.date}
                    </p>
                </div>

                <div style={{ display:'flex',flexDirection:'column', flexGrow: 1, height:'60%'}}>
                    {/* descriptions/ awards, */}
                    <div style={{ display: 'flex', flexDirection: 'column', height: '60%', padding: "1%" }}>
                        <p style={{ marginTop: '4%', fontSize: '22px' }}>
                            {project.description}
                        </p>
                        {project.awards && <p style={{ paddingTop: '4%', fontSize: '21px' }}>
                            Awards: {project.awards}
                        </p>}

                    </div>
                    {/* tech tags */}

                    {isLoading ? (
                        <div></div>
                    ) : (
                        <div className="chip-container">
                            <p style={{ fontSize: '20px' }}>Tags:  </p>
                            {chipArr.map((item, index) => (
                                <Chip key={index} radius="md" size='lg'>{item}</Chip>
                            ))}
                        </div>
                    )}
                </div>


            </div>


            {/* Images of the thing will go here */}
            <div style={{ overflow: 'hidden', display: 'flex', justifyContent: 'flex-end', width: '50%' }} ref={emblaRef}>
                <div className="embla__container_project">
                    {project.images.map((item, index) => (
                        <div key={index} className="embla__slide_project" >

                            <button style={{ padding: "50px", width: '25%', height: '25%', fontSize: '40px', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }} onClick={prev}>
                                <FontAwesomeIcon icon={faArrowLeft}>
                                </FontAwesomeIcon>
                            </button>
                            <Image
                                src={item}
                                alt={"Some photos of the project"}
                                width={500}
                                height={500}
                            />
                            <button style={{ padding: "50px", width: '25%', height: '25%', fontSize: '40px', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start' }} onClick={next}>
                                <FontAwesomeIcon icon={faArrowRight}>
                                </FontAwesomeIcon>
                            </button>
                        </div>


                    ))}
                </div>
            </div>

        </div>

    );
};;
