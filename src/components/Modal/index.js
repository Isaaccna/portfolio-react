import React from 'react';
import { AiFillGithub } from 'react-icons/ai'
import { DiHeroku } from 'react-icons/di'

function Modal({onClose, currentProject}) {
    const {name,githubLink, deployedApplication, description, index } = currentProject

    return (
        <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">{name}</h3>
          <img src ={require(`../../assets/projectImage/${index}.png`)} 
          alt="current project" width="100%"/>
          <div className="media">
              <ul>
              <li><a href={githubLink} target="_blank"><AiFillGithub /></a></li>
              <li><a href={deployedApplication} target="_blank" ><DiHeroku/> </a></li>
              </ul>
          </div>
          <p className="modalDescription">
            {description}
          </p>
          <button onClick={onClose} type="button">
            Close
          </button>
        </div>
      </div>
      
    );
  }
  
  export default Modal;