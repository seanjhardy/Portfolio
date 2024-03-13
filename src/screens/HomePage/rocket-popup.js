import {Popup} from "../../components/popup/popup";
import {useEffect, useRef} from "react";
import {ProjectPopup} from "./project-popup";

export const RocketPopup = ({show, onClose}) => {

  return (
    <Popup show={show} onClose={onClose} style={{width: "70%", minWidth: 400, position: "relative"}} >
      <div className={"close-btn"} onClick={onClose}>
        <img src={require("../../images/icons/close.png")} style={{width: 20, height: 20, objectFit: "contain"}}/>
      </div>
      <ProjectPopup>
        <div style={{flex: 1, display: "flex", flexDirection: "column"}}>
          <div className={"popup-header"}>
            <span className={"subtitle"}
              style={{fontSize: 25}}>2D Rocket Simulator</span>
          </div>
          <div style={{overflow: "hidden", padding: 10, display:"flex", flexDirection: "column", flex: 1, alignItems: "flex-start"}}>
            <div className={"scrollbox"}>
              <span style={{fontFamily: "Roboto"}}>
                A 2D rocket builder and flight simulator, with procedural parallax landscapes, realistic collisions and an intuitive UI.
                The rocket builder contains hundreds of hand-designed parts, each with a distinct size, function, weight, and cost, which is
                calculated in the final cost of the rocket. The builder contains a staging system so that each part performs its function
                at the correct moment, such as an engine firing or stage decoupling.
                Heavily inspired by the video-game Kerbal Space Program.
             </span>
            </div>
            <div className={"link-row"}
                 style={{marginTop: 10}}
            onClick={() => window.open('https://github.com/seanjhardy/RocketSimulation','mywindow')}>
              <div className={"link"}>
                <span>Github</span>
              </div>
            </div>
          </div>
        </div>
        <div className={"popup-video-card"}>
          <video className={"video"} autoPlay loop muted style={{borderRadius: 15}}>
            <source src={require("../../videos/rocket-simulation.mp4")} type="video/mp4"/>
          </video>
        </div>
      </ProjectPopup>
    </Popup>
  )
}