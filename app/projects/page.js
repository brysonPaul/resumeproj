import React from "react";
import "../styles.css"; // Import your CSS file
import Project from "../components/Project";
const projects = [
    {
        name: "Resume Website",
        date: "02/2024",
        description: "Created a resume website for people interested to know a bit more about me and ways to contact! ( thanks again for visiting :) )",
        technologies: "Javascript,React,NextJS,Tailwind CSS,NextUI",
        link: "https://brysonpaul.com/",
        images: ["/projects/about-me.jpg","/projects/keyboards.jpg"],

    },
    {
        name: "Project Mercury",
        date: "01/2023 - 12/2023",
        description: "Developed a cross-platform application in React Native for the United States Army Reserve,"
            + " streamlining administrative tasks between leaders and soldiers to improve efficiency and decision-making within a unit.",
        technologies: "Javascript,React-Native/React,AWS Lambda,PostgresSQL,Android Studio,Jira,Confluence",
        link: "https://www.ucf.edu/news/ucf-students-support-u-s-military-with-new-technology/",
        app: 'https://apps.apple.com/us/app/army-reserve-mercury/id1619569471',
        images: ["/projects/pm-1.jpg","/projects/pm-2.jpg"],
        

    },
    {
        name: "Morgan and Morgan Mate",
        date: "05/2023",
        description: "Created an AI-powered tool that generates concise summaries of legal documents in multiple languages, saving time and resources for a given case",
        technologies: "Javascript,React-Native,Google Vision OCR,GPT-4 API",
        github: "https://github.com/maximusmith529/mogathan",
        devpost: 'https://devpost.com/software/morgan-morgan-mate',
        images: ["/projects/mm-1","/projects/mm-2","/projects/mm-3"],
    },
    {
        name: "UCF-GO",
        date: "03/2023 - 05/2023",
        description: "Worked as a fullstack engineer on a Pokemon-Go esque game centered around catching monsters around my college campus",
        technologies: "Javascript,React-Native/React,Google Maps API, MongoDB",
        github: 'https://github.com/Caitlin-Fabian/UCFGO',
        github_2 :'https://github.com/Caitlin-Fabian/LargeProject',
        images: ["/projects/ucfg-1","/projects/ucfg-2","/projects/ucfg-3"],
    },
    {
        name: "Saberfy",
        date: "08/2022",
        description: "Developed an CLI application during ShellHacks 2022 that analyzes music from Spotify and generates Beat Saber maps based on the beat, tempo and song structure",
        awards: "Second Place Shellhacks 2022, Best First Time Hackers",
        technologies: "Python,SpotDL,Spotify API",
        github: "https://github.com/maximusmith529/Saberfy",
        devpost: "https://devpost.com/software/saberfy",
        images: ""
    }];

export default function Projects() {
    return (
        <main style={{ minHeight: "75vh",display: 'flex', flexDirection:'column',}}>

            <p className="title"> My Projects </p>
            <p style={{paddingLeft:'6%', paddingBottom:'2%', paddingTop:'2%', fontSize:'25px'}}>Take a look at my projects ive made in my time as a software engineer!</p>

            <div  style={{display: 'flex', flexDirection:'column',height:'150vh'}}>
                {projects.map((item,index) => (<Project key={index} project={projects[index]}/>))}
            </div>
        </main>
    );
}
