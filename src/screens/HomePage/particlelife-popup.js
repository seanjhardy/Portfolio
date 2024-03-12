import {Popup} from "../../components/popup/popup";
import {useEffect, useRef} from "react";

export const ParticleLifePopup = ({show, onClose}) => {

  return (
    <Popup show={show} onClose={onClose} style={{width: "60%"}} >
      <div className={"project-popup"}>
        <div className={"close-btn"} onClick={onClose}>
          <img src={require("../../images/icons/close.png")} style={{width: 20, height: 20, objectFit: "contain"}}/>
        </div>
        <div style={{flex: 1, display: "flex", flexDirection: "column"}}>
          <div className={"popup-header"}>
            <span className={"subtitle"}
              style={{fontSize: 25}}>Particle Life</span>
          </div>
          <div style={{overflow: "hidden", padding: 10, display:"flex", flexDirection: "column", flex: 1, alignItems: "flex-start"}}>
            <div className={"scrollbox"}>
              <span style={{fontFamily: "Roboto"}}>
                Particle Life is a physics-based simulation of the interaction between multiple particle types, and the forces they generate.
                Based on randomly generated rulesets, particles can attract each other, repel each other, snap togethr with other particles,
                and create a lifelife cacophony of motion, resembling cellular creatures which live, fight, die and reproduce organically.
                <br/><br/>
                Most notably, one such ruleset happened to generate a complex creature with seemingly multiple distinct organs, as well as a
                unique method of swimming side to side to capture stray particles to grow and create minor clusters of similar particles, akin
                to reproduction. Another example generated a dynamic and strong membrane, including a completely self-contained inner core
                that was shielded from outside particles. Both examples can be seen in the video playing on the right.
             </span>
            </div>
            <div className={"link-row"}
                 style={{marginTop: 10}}
            onClick={() => window.open('https://github.com/seanjhardy/Particle-Life','mywindow')}>
              <div className={"link"}>
                <span>Github</span>
              </div>
            </div>
          </div>
        </div>
        <div className={"popup-video-card"}>
          <video className={"video"} autoPlay loop muted style={{borderRadius: 15}}>
            <source src={require("../../videos/particle-life.mp4")} type="video/mp4"/>
          </video>
        </div>
      </div>
    </Popup>
  )
}