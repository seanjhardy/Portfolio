import "./card.css"
import {useEffect, useRef, useState} from "react";
import {clamp} from "../../modules/GUIHelper";

export const Card = ({children, style={}, rotationEnabled=true,
                       glowAbove=true, allowHide=false, onClick=undefined}) => {
  const ref = useRef();
  const [bounds, setBounds] = useState({width: 0, height: 0})
  const cardRef = useRef();

  function transforms(x, y, width, height) {
    let calcX = -(y - (height / 2)) / 100;
    let calcY = (x - (width / 2)) / 250;

    if (!rotationEnabled) return ""

    return "perspective(100px) "
      + "   rotateX("+ calcX +"deg) "
      + "   rotateY("+ calcY +"deg)";
  };

  function transformElement(el, xyWH) {
    el.style.transform  = transforms.apply(null, xyWH);
  }

  function approachValue(currentValue, targetValue) {
    const delta = (targetValue - currentValue) * 0.1;
    return currentValue + delta
  }

  useEffect(() => {
    const bounds = ref.current.getBoundingClientRect()
    setBounds({width: bounds.width, height: bounds.height})

    cardRef.current.onmouseenter = (e) => {
      for (const video of cardRef.current.getElementsByClassName("video")) {
        video.play()
      }
    }
    cardRef.current.onmouseleave = (e) => {
      for (const video of cardRef.current.getElementsByClassName("video")) {
        video.pause()
      }
    }

    ref.current.style.setProperty("--allow-hide", allowHide)

    ref.current.onmousemove = function (e) {
      let xyWH = [e.layerX, e.layerY, bounds.width, bounds.height];
      window.requestAnimationFrame(function () {
        transformElement(ref.current, xyWH);
      });
    }

    ref.current.onmouseenter = function (e) {
      if (!allowHide) return
      for (const card of document.getElementsByClassName("card")) {
        const allowHide = getComputedStyle(card).getPropertyValue("--allow-hide")
        if (card !== ref.current && allowHide === "true") {
          card.classList.add("inactive")
        }
      }
    }

    ref.current.onmouseleave = function (e) {
      for (const card of document.getElementsByClassName("card")) {
        card.classList.remove("inactive")
      }
      let xyWH = [clamp(0, e.layerX, bounds.width), clamp(0, e.layerY, bounds.height), bounds.width, bounds.height];
      let iterations = 0;
      const animation = setInterval(() => {
        xyWH = [approachValue(xyWH[0], bounds.width/2),
          approachValue(xyWH[1],bounds.height/2),
        bounds.width, bounds.height]

        window.requestAnimationFrame(function () {
          transformElement(ref.current, xyWH);
        });

        iterations += 1;
        if (iterations > 50) {
          clearInterval(animation);
        }
      }, 10);
    }
  }, [ref.current])

  return (
    <div className={"card-container " + (rotationEnabled ? "scaleup" : "")}
         ref={cardRef}
         style={{...style, cursor: onClick ? "pointer" : undefined}}
        onClick={onClick}>
      <div className={"card"} ref={ref}>
        {!glowAbove && (
          <div style={{backgroundColor: "transparent", width: "100%", zIndex: 999}}>
            {children}
          </div>
        )}
        <div className="card-bg">
          {glowAbove && children}
        </div>
      </div>
    </div>
  )
}