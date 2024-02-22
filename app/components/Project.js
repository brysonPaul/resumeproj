'use client'
import React, { useEffect, useState } from 'react';
import "../styles.css";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { SimpleIconsDevpost } from './SimpleIconDevpost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons';
import { Chip } from "@nextui-org/react";

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



    return (
        // Every project will have a name, description, date, and technologies
        <div style={{ display: 'flex', height: '100%', flexDirection: 'column', borderColor: "white", borderTopWidth: '0.25px', borderBottomWidth: '0.25px', borderColor: 'white', padding: '1%', paddingLeft:'5%' }}>
            {/* Entire side that doesnt have a photo */}
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '50%', gap: '5%' }}>
                {/* title, links, and date */}
                <div style={{ display: 'flex', flexDirection: 'row', justifyItems : 'space-between', alignItems: 'center', width: '100%', height:'10%', gap: '5%' }}>
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

                {/* descriptions/ awards, */}
                <div style={{ display: 'flex', flexDirection: 'column', height: '60%', padding: "1%" }}>
                    <p style={{ marginTop: '4%', fontSize: '20px' }}>
                        {project.description}
                    </p>
                    {project.awards && <p style={{ paddingTop: '4%', fontSize: '20px' }}>
                        Awards: {project.awards}
                    </p>}

                </div>
                {/* tech tags */}

                {isLoading ? (
                    // Display a loading indicator while waiting
                    <div></div>
                ) : (
                    <div className="chip-container">
                        <p style={{fontSize:'20px'}}>Tags:  </p>
                        {chipArr.map((item, index) => (
                            <Chip key={index} radius="md" size='lg'>{item}</Chip>
                        ))}
                    </div>
                )}

            </div>


        </div>

    );
};;
