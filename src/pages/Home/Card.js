import React from 'react';
import "./Home.css";


export const Card = ({projectName, projectDescription, projectTags, image}) => {

  
  
  const tags = projectTags.split(",");
  

  const renderTags = tags.map((tag) => (
    <div className="projects-tag">{tag}</div>
  ));
 
  return(
    
    <div className="projects-card">
              <img className="projects-image" src={image}></img>
              <div className="projects-text-flex">
                <div className="projects-title-flex">
                  <h1 className="subheading2">{projectName}</h1>
                  {renderTags}
                </div>
                <h3 className="body1" style={{textAlign: "left"}}>{projectDescription}</h3>
              </div>
            </div>
  )
}