import React from "react";
import Heading from "../../Heading/Heading";
import "./ProjectCategory.scss";
const ProjectCategory = (props) => {
  return (
    <div className="pc">
      <Heading text={props.pc.name}></Heading>
      <div className="pc_imgs">
        {props.pc.projects.map((proj) => {
          return (
            <a target={proj.link?"_blank":""} href={proj.link?proj.link:"#"}>
              <div>
                <img src={proj.image} alt="" />
                <p>{proj.title}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCategory;
