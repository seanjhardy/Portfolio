import "./card.css"
import {useEffect, useRef} from "react";

export const Card = ({children, style={}, rotationEnabled=true, glowAbove=true, allowHide=false}) => {
  const ref = useRef();

  function transforms(x, y, el) {
    let box = el.getBoundingClientRect();
    let calcX = -(y - (box.height / 2)) / 100;
    let calcY = (x - (box.width / 2)) / 250;

    if (!rotationEnabled) return ""

    return "perspective(100px) "
      + "   rotateX("+ calcX +"deg) "
      + "   rotateY("+ calcY +"deg)";
  };

  function transformElement(el, xyEl) {
    el.style.transform  = transforms.apply(null, xyEl);
  }

  function approachValue(currentValue, targetValue) {
    const delta = (targetValue - currentValue) * 0.1;
    return currentValue + delta
  }

  useEffect(() => {
    ref.current.style.setProperty("--allow-hide", allowHide)

    ref.current.onmousemove = function (e) {
      let bounds = ref.current.getBoundingClientRect();
      let xy = [e.clientX - bounds.left, e.clientY - bounds.top];
      let position = xy.concat([ref.current]);

      window.requestAnimationFrame(function () {
        transformElement(ref.current, position);
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

      let bounds = ref.current.getBoundingClientRect();
      let xy = [e.clientX - bounds.left, e.clientY - bounds.top];
      let iterations = 0;
      const animation = setInterval(() => {
        xy = [approachValue(xy[0], (bounds.right - bounds.left) / 2), approachValue(xy[1],
          (bounds.bottom - bounds.top) / 2)]
        let position = xy.concat([ref.current]);

        window.requestAnimationFrame(function () {
          transformElement(ref.current, position);
        });

        iterations += 1;
        if (iterations > 50) {
          clearInterval(animation);
        }
      }, 10);
    }
  }, [ref.current])

  return (
    <div className={"card-container " + (rotationEnabled ? "scaleup" : "")} style={style}>
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