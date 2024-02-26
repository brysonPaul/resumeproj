import React from "react";
import "../styles.css"; // Import your CSS file
import Project from "../components/Project";
const projects = [
    {
        name: "Resume Website",
        date: "02/2024",
        description: "Created a responsive resume website for people interested to know a bit more about me and ways to contact ( thanks again for visiting )! ",
        technologies: "Javascript,React,NextJS,Tailwind CSS,NextUI",
        link: "https://brysonpaul.com/",
        images: ["/projects/about-me.jpg","/projects/keyboards.jpg"],

    },
    {
        name: "Project Mercury",
        date: "01/2023 - 12/2023",
        description: "Developed a cross-platform application in React Native for the United States Army Reserve,"
            + " streamlining administrative tasks between leaders and soldiers to improve efficiency and decision-making within a unit. During my time I worked on 40+ critical bug fixes needed from the Reserves while refactoring 20k+ lines of code, and spearheaded the bolsering of RBAC and UI overhauls on the Web version",
        technologies: "Javascript,React-Native/React,AWS Lambda,PostgresSQL,Android Studio,Jira,Confluence",
        link: "https://www.ucf.edu/news/ucf-students-support-u-s-military-with-new-technology/",
        app: 'https://apps.apple.com/us/app/army-reserve-mercury/id1619569471',
        images: ["/projects/pm-1.jpg","/projects/pm-2.png","/projects/pm-3.png"],
        

    },
    {
        name: "Morgan & Morgan Mate",
        date: "05/2023",
        description: "Created an AI-powered tool that generates concise summaries of legal documents with multi-lingual support, saving time and resources for a given case by allowing further understanding of legal documents without the need of a translator for non-native english speakers.",
        technologies: "Javascript,React-Native,Google Vision OCR,GPT-4 API",
        github: "https://github.com/maximusmith529/mogathan",
        devpost: 'https://devpost.com/software/morgan-morgan-mate',
        images: ["/projects/mm-1.jpg","/projects/mm-2.jpg","/projects/mm-3.jpg"],
    },
    {
        name: "UCF-GO",
        date: "03/2023 - 05/2023",
        description: "Worked as a fullstack engineer on a Pokemon-Go esque game centered around catching monsters around my college campus to learn a bit about each of the locations the monsters reside in!",
        technologies: "Javascript,React-Native/React,Google Maps API, MongoDB",
        github: 'https://github.com/Caitlin-Fabian/UCFGO',
        github_2 :'https://github.com/Caitlin-Fabian/LargeProject',
        images: ["/projects/ucf-go-1.PNG","/projects/ucf-go-2.PNG","/projects/ucf-go-3.PNG","/projects/ucf-go-4.PNG"],
    },
    {
        name: "Saberfy",
        date: "08/2022",
        description: "Developed an CLI application during ShellHacks 2022 that analyzes music from Spotify and generates Beat Saber maps based on the beat, tempo and song structure.",
        awards: "Second Place Shellhacks 2022, Best First Time Hackers",
        technologies: "Python,SpotDL,Spotify API",
        github: "https://github.com/maximusmith529/Saberfy",
        devpost: "https://devpost.com/software/saberfy",
        images: ["/projects/sfy-1.jpg","/projects/sfy-2.jpg"],
    }];

export default function Projects() {
    return (
        <main style={{ minHeight: "200vh",display: 'flex', flexDirection:'column',}}>

            <p className="title"> My Projects </p>
            <p style={{paddingLeft:'6%', paddingBottom:'2%', paddingTop:'2%', fontSize:'25px'}}>Take a look at my projects ive made in my time as a software engineer!</p>

            <div  style={{ flexDirection:'column',height:'100%'}}>
                {projects.map((item,index) => (<Project key={index} project={projects[index]}/>))}
            </div>
        </main>
    );
}
