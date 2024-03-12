import {Popup} from "../../components/popup/popup";
import {useEffect, useRef} from "react";

export const ElectricPopup = ({show, onClose}) => {

  return (
    <Popup show={show} onClose={onClose} style={{width: "60%"}} >
      <div className={"project-popup"}>
        <div className={"close-btn"} onClick={onClose}>
          <img src={require("../../images/icons/close.png")} style={{width: 20, height: 20, objectFit: "contain"}}/>
        </div>
        <div style={{flex: 1, display: "flex", flexDirection: "column"}}>
          <div className={"popup-header"}>
            <span className={"subtitle"}
              style={{fontSize: 25}}>Electric Fields</span>
          </div>
          <div style={{overflow: "hidden", padding: 10, display:"flex", flexDirection: "column", flex: 1, alignItems: "flex-start"}}>
            <div className={"scrollbox"}>
              <span style={{fontFamily: "Roboto"}}>
                A simulation of electric fields with multiple styles of visualisations for field lines,
                equipotential lines, and stunning glowing particles. Particles can be fixed or physics-based, and
                interacts with positive and negatively charged particles to guide their motion. This simulation was
                commissioned by my physics teacher and is being used as a teaching aid for A-level physics classes.
             </span>
            </div>
            <div className={"link-row"}
                 style={{marginTop: 10}}
            onClick={() => window.open('https://github.com/seanjhardy/Electric-Field-Simulator','mywindow')}>
              <div className={"link"}>
                <span>Github</span>
              </div>
            </div>
          </div>
        </div>
        <div className={"popup-video-card"}>
          <video className={"video"} autoPlay loop muted style={{borderRadius: 15}}>
            <source src={require("../../videos/electric-fields.mp4")} type="video/mp4"/>
          </video>
        </div>
      </div>
    </Popup>
  )
}