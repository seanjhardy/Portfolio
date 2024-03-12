import "./home.css"
import {useEffect, useRef, useState} from "react";
import {useScrollContext} from "../../components/SmoothScroll/scroll-context";
import {isMobile} from 'react-device-detect';
import {Card} from "../../components/card/card";
import {CardOverlay} from "../../components/card/card-overlay";
import {Scrollbar} from "../../components/scrollbar/scrollbar";
import {MagicText} from "../../components/magic-text/magic-text";
import {Badge} from "../../components/badge/badge";
import {SkilltreePopup} from "./skilltree-popup";
import {DronePopup} from "./drone-popup";
import {HyperlifePopup} from "./hyperlife-popup";
import {ParticleLifePopup} from "./particlelife-popup";
import {ElectricPopup} from "./electric-popup";
import {RocketPopup} from "./rocket-popup";

export const HomePage = ({}) => {
  const {updateScrollData, previous, current, rounded, ratio} = useScrollContext();
  const ref = useRef();
  const [popup, setPopup] = useState(null)

  useEffect(() => {
    updateScrollData({
      previous, current, rounded, ratio,
      ease: isMobile ? 1 : 0.1,
    })

    ref.current.onmousemove = (e) => {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  }, [])


  return (
    <div className="home-container" ref={ref}>
      <Scrollbar/>
      <div className={"header-container"}>
        <Card style={{width: "100%"}} rotationEnabled={false} glowAbove={false}>
          <div className={"flip"}>
            <div className={"header"}>
              <div className={"profile"}>
                <img src={require("../../images/background/me.png")} className={"profile-image"}/>
              </div>
              <div className={"header-body"}>
                <span className={"title"}>Sean Hardy</span>
                <span
                  className={"subtitle"}>Fullstack Developer, <MagicText>Designer</MagicText>, Founder, Engineer</span>
                <span className={"header-text"} style={{marginTop: 10}}>
                Hi 👋 I'm Sean. I'm a 21-year-old developer, aspiring to build beautiful, functional products to improve people's lives.
                I'm a fast learning, multidisciplinary, first-principles thinker who excels in communication,
                creativity and problem-solving.</span>
                <div style={{flex: 1, minHeight: 20}}/>
                <span className={"header-text"}>BSc Computer Science (1st class) - University of Southampton</span>
                <span className={"header-text"}>A*A*A - Computer Science, Physics, Maths</span>
              </div>
            </div>
            <div className={"badge-display"}>
              <Badge img={require("../../images/icons/javascript.webp")}/>
              <Badge img={require("../../images/icons/typescript.png")}/>
              <Badge img={require("../../images/icons/python.png")}/>
              <Badge img={require("../../images/icons/java.png")}/>

              <Badge img={require("../../images/icons/html.png")}/>
              <Badge img={require("../../images/icons/css.png")}/>
              <Badge img={require("../../images/icons/react-native.png")}/>
              <Badge img={require("../../images/icons/nodejs.png")}/>

              <Badge img={require("../../images/icons/flutter.png")}/>
              <Badge img={require("../../images/icons/figma.png")}/>
              <Badge img={require("../../images/icons/firebase.png")}/>
              <Badge img={require("../../images/icons/mongoDB.png")}/>
              <Badge img={require("../../images/icons/git.png")}/>
            </div>
          </div>
        </Card>
      </div>
      <span className={"title"} style={{marginBottom: 30}}>PROJECTS</span>
      <div className={"card-view"}>
        <Card allowHide={true} onClick={() => setPopup("skilltree")}>
          <CardOverlay
            title={"Skilltree"}
            info={"Mobile app to gamify self-improvement. 10k downloads, 500+ 5-star reviews."}
            style={{backgroundColor: "#000000", width: "100%"}}
          >
            <video className={"video"} style={{marginTop: -100}} autoPlay loop muted>
              <source src={require("../../videos/skilltree-card.mp4")} type="video/mp4"/>
            </video>
          </CardOverlay>
        </Card>
        <Card allowHide={true} onClick={() => setPopup("drone")}>
          <CardOverlay
            title={"Drone App"}
            info={"A mobile app to pair with drones for avalanche search and rescue, using google-maps API."}
            style={{backgroundColor: "#000000", width: "100%", height: "100%"}}
          >
            <img src={require("../../images/background/asrv.webp")}
                 style={{width: "100%", height: "100%", objectFit: "cover"}}/>
          </CardOverlay>
        </Card>
        <Card allowHide={true} onClick={() => setPopup("hyperlife")}>
          <CardOverlay
            title={"Cellular evolution"}
            info={"Evolutionary simulation of multicellular organisms with neural nets, simulated nervous systems, and predator/prey relationships"}
            style={{backgroundColor: "#000000", width: "100%", height: "100%"}}
          >
            <video className={"video"} autoPlay loop muted>
              <source src={require("../../videos/hyper-life.mp4")} type="video/mp4"/>
            </video>
          </CardOverlay>
        </Card>
        <Card allowHide={true} onClick={() => setPopup("particle")}>
          <CardOverlay
            title={"Particle Life"}
            info={"A high-speed simulation of particle interactions, generating life-like behaviour."}
            style={{backgroundColor: "#000000", width: "100%", height: "100%"}}
          >
            <video className={"video"} autoPlay loop muted>
              <source src={require("../../videos/particle-life.mp4")} type="video/mp4"/>
            </video>
          </CardOverlay>
        </Card>
        <Card allowHide={true} onClick={() => setPopup("electric")}>
          <CardOverlay
            title={"Electric Fields Simulation"}
            info={"A simulation of electric fields with field lines, equipotential lines,and beautiful visualisations"}
            style={{backgroundColor: "#000000", width: "100%", height: "100%"}}
          >
            <video className={"video"} autoPlay loop muted>
              <source src={require("../../videos/electric-fields.mp4")} type="video/mp4"/>
            </video>
          </CardOverlay>
        </Card>
        <Card allowHide={true} onClick={() => setPopup("rocket")}>
          <CardOverlay
            title={"Rocket Simulation"}
            info={"A 2D rocket builder and flight simulator, with procedural parallax landscapes, realistic collisions and an intuitive UI"}
            style={{backgroundColor: "#000000", width: "100%", height: "100%"}}
          >
            <video className={"video"} autoPlay loop muted>
              <source src={require("../../videos/rocket-simulation.mp4")} type="video/mp4"/>
            </video>
          </CardOverlay>
        </Card>
        <Card allowHide={true}>
          <CardOverlay
            title={"Autoencoder"}
            info={"An autoencoder neural network for 2.5D environment reconstruction and policy guiding"}
            style={{backgroundColor: "#000000", width: "100%", height: "100%"}}
          >
            <video className={"video"} autoPlay loop muted>
              <source src={require("../../videos/Autoencoder.mp4")} type="video/mp4"/>
            </video>
          </CardOverlay>
        </Card>
        <Card allowHide={true}>
          <CardOverlay
            title={"Bipedal Robot"}
            info={"A bipedal walking robot with depth sensing, movement using inverse kinematics"}
            style={{backgroundColor: "#000000", width: "100%"}}
          >
            <video width={450} height={400} autoPlay loop muted>
              <source src={require("../../videos/robot.mp4")} type="video/mp4"/>
            </video>
          </CardOverlay>
        </Card>
      </div>
      <SkilltreePopup show={popup === "skilltree"} onClose={() => setPopup(null)}/>
      <DronePopup show={popup === "drone"} onClose={() => setPopup(null)}/>
      <HyperlifePopup show={popup === "hyperlife"} onClose={() => setPopup(null)}/>
      <ParticleLifePopup show={popup === "particle"} onClose={() => setPopup(null)}/>
      <ElectricPopup show={popup === "electric"} onClose={() => setPopup(null)}/>
      <RocketPopup show={popup === "rocket"} onClose={() => setPopup(null)}/>
    </div>
  )
}