import React, { useState } from "react";
import Heading from "./../Heading/Heading";
import "./AchievementCategories.scss";
import Modal from "react-modal";
const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  zIndex:'9999'

  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width:"90vw",
    height:"90vh",
    transform: "translate(-50%, -50%)",
    background:"rgba(0,0,0,0.3)",
    border:"none",
    overflow:"hidden"
  },
};

const imgStyle = {
  objectFit:"scale-down",
  width:'100%',
  height:"100%"
}
Modal.setAppElement("#root");

const AchievementCategories = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="ac" id="Achievements">
      <Heading text={props.pc.name}></Heading>
      <div className="ac_imgs">
        {props.pc.projects.map((proj,i) => {
          return (
            <div key={i} onClick={()=>{setIsOpen(proj.image)}}>
              <img src={proj.image} alt="" />
              <p>{proj.title}</p>
            </div>
          );
        })}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img style={imgStyle} src={modalIsOpen} alt="" />
      </Modal>
    </div>
  );
};

export default AchievementCategories;
