import {Popup} from "../../components/popup/popup";
import {useEffect, useState} from "react";
import {ProjectPopup} from "./project-popup";

export const DronePopup = ({show, onClose}) => {
  const [maxImageWidth, setMaxImageWidth] = useState("50%");

  const onResize = () => {
    setMaxImageWidth(window.innerWidth < 900 ? "100%" : "50%")
  }

  useEffect(() => {
    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <Popup show={show} onClose={onClose} style={{width: "70%", minWidth: 400, position: "relative"}} >
      <div className={"close-btn"} onClick={onClose}>
        <img src={require("../../images/icons/close.png")} style={{width: 20, height: 20, objectFit: "contain"}}/>
      </div>
      <ProjectPopup>
        <div style={{flex: 1, display: "flex", flexDirection: "column"}}>
          <div className={"popup-header"}>
            <span className={"subtitle"}
                  style={{fontSize: 25}}>ASRV - Drone app</span>
          </div>
          <div style={{overflow: "hidden", padding: 10, display:"flex", flexDirection: "column", flex: 1, alignItems: "flex-start"}}>
            <div className={"scrollbox"}>
              <span style={{fontFamily: "Roboto"}}>
                In 2022, I led the development of an Android app for a start-up using intelligent swarm drones for avalanche search and rescue.
                I designed a functional and elegant user-interface, as well as promotional material, in accordance with product goals.
                I performed self-led development of a mobile application in Java, starting from a basic shell application,
                integrating bluetooth pairing and the Google maps API.
                I collaborated across departments to achieve the goals of the project and effectively integrated bluetooth pairing with in-house hardware.
             </span>
            </div>
          </div>
        </div>
        <img src={require("../../images/background/asrv.webp")}
             className={"popup-video-card"}
             style={{aspectRatio: 2, maxWidth: maxImageWidth, objectFit: "cover"}}/>
      </ProjectPopup>
    </Popup>
  )
}