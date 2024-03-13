import {Popup} from "../../components/popup/popup";
import {useEffect, useRef} from "react";
import {ProjectPopup} from "./project-popup";

export const SkilltreePopup = ({show, onClose}) => {

  return (
    <Popup show={show} onClose={onClose} style={{width: "70%", minWidth: 400, position: "relative"}} >
      <div className={"close-btn"} onClick={onClose}>
        <img src={require("../../images/icons/close.png")} style={{width: 20, height: 20, objectFit: "contain"}}/>
      </div>
      <ProjectPopup>
        <div style={{flex: 1, display: "flex", flexDirection: "column"}}>
          <div className={"popup-header"}>
            <span className={"subtitle"}
                  style={{fontSize: 25}}>Skilltree</span>
            <div style={{flex: 1}}/>
            <div style={{backgroundColor: "rgba(0,0,0,0.5)",
              borderRadius: 10, padding: 5, paddingLeft: 10, paddingRight: 10,
              display: "flex", justifyContent: "center", alignItems: "center"}}>
              <span style={{fontFamily: "Russo One", color: "#FFCE00", marginRight: 5}}>4.8</span>
              <img src={require("../../images/icons/star.png")} className={"star"}
                   style={{animationDelay: "50ms"}}/>
              <img src={require("../../images/icons/star.png")} className={"star"}
                   style={{animationDelay: "200ms"}}/>
              <img src={require("../../images/icons/star.png")} className={"star"}
                   style={{animationDelay: "350ms"}}/>
              <img src={require("../../images/icons/star.png")} className={"star"}
                   style={{animationDelay: "500ms"}}/>
              <img src={require("../../images/icons/half-star.png")} className={"star"}
                   style={{animationDelay: "650ms"}}/>
            </div>
            <div style={{backgroundColor: "rgba(0,0,0,0.5)", borderRadius: 10, padding: 5, paddingLeft: 10, paddingRight: 10,
              display: "flex", justifyContent: "center", alignItems: "center"}}>
              <span style={{fontFamily: "Russo One", marginRight: 5}}>10k</span>
              <img src={require("../../images/icons/user.png")} className={"star"}/>
            </div>
          </div>
          <div style={{overflow: "hidden", padding: 10, display:"flex", flexDirection: "column", flex: 1, alignItems: "flex-start"}}>
            <div className={"scrollbox"}>
              <span style={{fontFamily: "Roboto"}}>
               I founded Skilltree in 2022 with the mission of helping young people improve their mental and physical health.
               Skilltree is a gamified self-improvement app that gives you a real life skill tree, starting from just 1 minute of meditation,
                and slowly working through hundreds of
               positive self-development skills such as journaling, reading, gratitude, fitness, business, cold-showers, martial-arts,
                cardio, quitting video games/social media/junk food, visualisation, sleep, building routines, eating healthily and many more.
                <br/><br/>
                This role required building and designing our app from scratch using a React Native front-end, NodeJS backend,
                and MongoDB database, as well as building our landing-page using react. Additionally,
                I helped manage and mentor 3 junior developers, as well as other volunteer designers, content creators,
                and sound-designers.
                <br/><br/>
                Skilltree has an engaging, gamified design to appeal to young people and former gamers, and a minimalist mode for more
                focused self-improvers. Using XP, levels, badges, stats and rewards, Skilltree makes self-improvement as fun as video games,
                helping people to stick with good habits and break bad ones. Skilltree has over 10,000 downloads, with 500+ 5-star reviews,
                along with numerous collaborators and community members.
             </span>
            </div>
            <div className={"link-row"}
                 style={{marginTop: 10}}
            onClick={() => window.open('https://www.projectskilltree.com/','mywindow')}>
              <div className={"link"}>
                <span>Website</span>
              </div>
            </div>
          </div>
        </div>
        <div className={"popup-video-card"}>
          <video className={"video"} autoPlay loop muted style={{borderRadius: 15}}>
            <source src={require("../../videos/skilltree-card.mp4")} type="video/mp4"/>
          </video>
        </div>
      </ProjectPopup>
    </Popup>
  )
}