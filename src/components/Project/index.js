import React, { useState } from 'react';

function Portfolio(props) {
    
    const [projects] = useState([
        {
            name: 'Budget-Tracker',
            githubLink: 'https://github.com/Isaaccna/budget-tracker',
            deployedApplication: 'https://agile-oasis-06951.herokuapp.com/',
            description: 'PWA'

        },
        {
            name: 'The-Tech_Blog',
            githubLink: 'https://github.com/Isaaccna/The-Tech-Blog',
            deployedApplication: 'https://cryptic-waters-04412.herokuapp.com/',
            description: 'CMS-style-blog'
        },
        {
            name: 'Note-Taker',
            githubLink: 'https://github.com/Isaaccna/note-taker',
            deployedApplication: 'http://blooming-journey-02910.herokuapp.com/notes',
            description: 'App to organize your notes'
        },
        {
            name: 'Work-Day-Scheduler',
            githubLink: 'https://github.com/Isaaccna/work-day-scheduler',
            deployedApplication: 'https://isaaccna.github.io/work-day-scheduler/',
            description: 'Every-day work day schuduler'
        },
        {
            name: 'Code-Quiz',
            githubLink: 'https://github.com/Isaaccna/code-quiz',
            deployedApplication: 'https://isaaccna.github.io/code-quiz/',
            description: 'Multiple-choice quiz'
        },
        {
            name: 'Password-Generator',
            githubLink: 'https://github.com/Isaaccna/Password-Generator',
            deployedApplication: 'https://isaaccna.github.io/Password-Generator/',
            description: 'Password generator'
        }
    ])

   
    return (
            <section id="project">
                
               <h1> Projects </h1>
               <div id="wrap-project">

            {projects.map((project, index) =>(


                <div className="m-4"  id="each-project"key={index}>
                    <img 
                    src={require(`../../assets/projectImage/${index}.png`)}
                    alt={project.description}
                    />
                </div>
            
            ))}
            </div>
                  
                 </section>

    )
}

export default Portfolio;