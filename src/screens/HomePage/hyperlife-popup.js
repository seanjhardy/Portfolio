import {Popup} from "../../components/popup/popup";
import {useEffect, useRef} from "react";

export const HyperlifePopup = ({show, onClose}) => {

  return (
    <Popup show={show} onClose={onClose} style={{width: "60%"}} >
      <div className={"project-popup"}>
        <div className={"close-btn"} onClick={onClose}>
          <img src={require("../../images/icons/close.png")} style={{width: 20, height: 20, objectFit: "contain"}}/>
        </div>
        <div style={{flex: 1, display: "flex", flexDirection: "column"}}>
          <div className={"popup-header"}>
            <span className={"subtitle"}
              style={{fontSize: 25}}>Hyperlife</span>
          </div>
          <div style={{overflow: "hidden", padding: 10, display:"flex", flexDirection: "column", flex: 1, alignItems: "flex-start"}}>
            <div className={"scrollbox"}>
              <span style={{fontFamily: "Roboto"}}>
                Hyperlife is a cellular evolutionary simulation, using a highly advanced custom-built physics engine.
                This application was built as a personal project in 2018, and simulates the physics of cellular creatures,
                as well as their evolution.
                <br/><br/>
                Each creature is composed of a genetic code which determines the characteristics of each cell, as well as their
                lifecycle morphology through the connections between cells. Cells live and die independantly, and can be disconnected
                without affecting the creature itself, as the cells grow back. Each cell grows in accordance with the energy of its neighbouring
                cells, slowly gaining mass until fully grown, whereby it continues growing child cells.
                <br/><br/>
                Each cell is represented by numerous properties, such as its shape, size, colour, whether it contiains nerves, muscles, or bones.
                Nerves propagate signals from the cell towards the root cell, which contains a neural network guiding the behaviour of the creature.
                Each cell can contain "organelles" which perform functions for the cell, such as , a rigid stick sensor, a soft tentacle sensor,
                a mouthpart, a water jet for movement, a spike to damage other creatures, myelin to speed up nerve signal speed, a colour sensor, a
                chloroplast to generate energy from sunlight, and lastly a
                reproductive organ (which either creates a mutated clone if asexual, or if sexual, reproduces on contact with another creature's
                reproductive organ of the same species).
                <br/><br/>
                The central neural network governing the cell takes in nerve signals as inputs from the various organelles in each cell, and produces
                output codes for each output organelle. The neural networks are coded and reproduce via the NEAT
                (Neuro-evolution of augmenting topologies) algorithm. Each cell uses its muscles to control motion which pushes back against the current
                and creates forward thrust vectors on that cell. Bones increase the stiffness of the cell, creating a more rigid shape.
                <br/><br/>
                The simulation uses verlet integration to simulate the rigid-body motion of multiple distinct cells
             </span>
            </div>
            <div className={"link-row"}
                 style={{marginTop: 10}}
            onClick={() => window.open('https://github.com/seanjhardy/HyperLife','mywindow')}>
              <div className={"link"}>
                <span>Github</span>
              </div>
            </div>
          </div>
        </div>
        <div className={"popup-video-card"}>
          <video className={"video"} autoPlay loop muted style={{borderRadius: 15}}>
            <source src={require("../../videos/hyper-life.mp4")} type="video/mp4"/>
          </video>
        </div>
      </div>
    </Popup>
  )
}