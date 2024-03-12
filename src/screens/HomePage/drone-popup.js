import {Popup} from "../../components/popup/popup";

export const DronePopup = ({show, onClose}) => {
  return (
    <Popup show={show} onClose={onClose} style={{width: "40%"}} >
      <div className={"project-popup"} style={{flexDirection: "column", overflow: "hidden"}}>
        <img src={require("../../images/background/asrv.webp")}
             style={{width: "100%", height: "100%", objectFit: "cover"}}/>
        <div style={{flex: 1, display: "flex", flexDirection: "column"}}>
          <div className={"popup-header"} style={{borderRadius: "0px 0px 0px 0px"}}>
            <span className={"subtitle"}
                  style={{fontSize: 25}}>ASRV - Drone app</span>
          </div>
          <div style={{padding: 10, display:"flex", flexDirection: "column", flex: 1, alignItems: "flex-start"}}>
            <span style={{fontFamily: "Roboto"}}>
              In 2022, I led the development of an Android app for a start-up using intelligent swarm drones for avalanche search and rescue.
              I designed a functional and elegant user-interface, as well as promotional material, in accordance with product goals.
              I performed self-led development of a mobile application in Java, starting from a basic shell application,
              integrating bluetooth pairing and the Google maps API.
              I collaborated across departments to achieve the goals of the project and effectively integrated bluetooth pairing with in-house hardware.

           </span>
          </div>
        </div>
        <div className={"close-btn"} onClick={onClose}>
          <img src={require("../../images/icons/close.png")} style={{width: 20, height: 20, objectFit: "contain"}}/>
        </div>
      </div>
    </Popup>
  )
}