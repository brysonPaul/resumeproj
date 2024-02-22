import React from "react";
import "../styles.css"; // Import your CSS file

const experiences = [
    {name: "Project Mercury",
     role: "Lead Software Developer and Project Manager",
     date: "01/2023 - 05/2023, 08/2023 - 12/2023",
     description: "Developed a cross-platform application in React Native for the United States Army Reserve,"
     +" streamlining critical form submission and communication between leaders and soldiers within a unit and resulting in improved efficiency and decision-making."
    },
    {name: "Google",
     role: "Software Engineering Intern",
     date: "05/2023-08/2023",
     description: ""

    },
    {

    },
    {

    }];

export default function Experiences() {
  return (
      <main  style={{minHeight:"75vh"}}>
      
      <p className="title"> My Experiences </p>
        <p className="pgText left">Take a look at my experiences in my time as a software engineer!</p>

        </main>
  );
}
