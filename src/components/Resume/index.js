import React from "react";

function Resume() {

    return (
        <section id="resume">
            <h1>Resume</h1>
            

          <div id ="wrapper">
              <div>
            <h3> Front-end Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
           </div>
           <div>
            <h3> Back-end Proficiencies</h3>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
            </div>
            </div>

          <span>
            <a href="/images/myw3schoolsimage.jpg" download> Click here to download my resume</a>
            </span>
        </section>
    )
}

export default Resume;