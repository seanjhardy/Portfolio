import {useEffect, useRef, useState} from "react";
import {useScrollContext} from "../SmoothScroll/scroll-context";
import "./scrollbar.css"
import {interpolateColour} from "../../modules/GUIHelper";

export const Scrollbar = () => {
  const {updateScrollData, rounded, current, previous, ratio} = useScrollContext();
  const scrollbar = useRef();
  const scrollbarThumb = useRef();

  let start = new Date().getTime();

  const originPosition = { x: 0, y: 0 };

  const [last, setLast] = useState({
    starTimestamp: start,
    starPosition: originPosition,
    scrollPosition: originPosition,
  })

  const config = {
    glowDuration: 700,
  }

  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
    selectRandom = items => items[rand(0, items.length - 1)];

  const withUnit = (value, unit) => `${value}${unit}`,
    px = value => withUnit(value, "px");

  const appendElement = element => scrollbar.current.appendChild(element),
    removeElement = (element, delay) => setTimeout(() => scrollbar.current.removeChild(element), delay);

  const createParticle = (position, lastPosition) => {
    const particle = document.createElement("div");

    particle.className = "particle";
    particle.style.top = px(position.y);
    const speedMultiplier = Math.max(Math.min((position.speed / 10) ** 4, 1), 0)
    particle.style.backgroundColor = interpolateColour("#51198a", "#ac4de8", speedMultiplier)

    const xSpeed = (Math.random() - 0.5) * 100
    const ySpeed = (Math.random() - 0.5) * 40 + (Math.sign(position.y - lastPosition.y) * 50 * speedMultiplier)
    const duration = 2000
    particle.style.setProperty("--duration", `${duration}ms`);

    particle.animate([
      {transform: `translate(${xSpeed}px, ${ySpeed}px)`},
    ],{duration: duration, easing: 'linear'});

    appendElement(particle)

    removeElement(particle, duration);
  }

  const createGlowPoint = position => {
    const glow = document.createElement("div");

    glow.className = "glow-point";
    glow.style.top = px(position.y);
    const speedMultiplier = Math.max(Math.min((position.speed / 10) ** 4, 1), 0)
    const colour = interpolateColour("#51198a", "#ac4de8", speedMultiplier)
    glow.style.setProperty("--height", `${scrollbarThumb.current.getBoundingClientRect().height * 0.4}px`);
    glow.style.setProperty("--glow-colour", `${colour}`);
    glow.style.setProperty("--duration", `${config.glowDuration + (1 - speedMultiplier) * 500}ms`);

    appendElement(glow)

    removeElement(glow, config.glowDuration);
  }

  const createGlow = (last, current) => {
    const dy = (current.y - last.y);
    const speed = Math.sqrt(dy * dy);

    createGlowPoint({ x: current.x, y: current.y, speed});
    if (speed > 5) {
      createParticle({x: current.x, y: current.y, speed}, last);
    }
  }


  const handleOnMove = e => {
    const scrollPosition = { x: e.clientX, y: e.clientY }

    if(last.scrollPosition.x === 0 && last.scrollPosition.y === 0) {
      last.scrollPosition = scrollPosition;
    }
    createGlow(last.scrollPosition, scrollPosition);
    last.scrollPosition = scrollPosition
  }

  useEffect(() => {
    scrollbar.current.style.setProperty("--scroll", `${rounded}px`);
    const thumbHeight = scrollbarThumb.current.getBoundingClientRect().height
    const scrollbarPos = ratio * (scrollbar.current.offsetHeight - thumbHeight)
    handleOnMove({clientX: 0, clientY: scrollbarPos + thumbHeight*0.5})

    scrollbarThumb.current.style.setProperty("--scroll", `${scrollbarPos}px`);
    scrollbarThumb.current.style.setProperty("--ratio", `${ratio}`);
  }, [rounded])

  useEffect(() => {
    const handleMove = (e) => {
      const scrollChange = ((e.clientY - 45) / (window.innerHeight - 90)) *
        (window.document.body.offsetHeight - window.innerHeight)
      window.scrollTo(0, scrollChange)
    }

    scrollbarThumb.current.onmousedown = (e) => {
      e.stopPropagation()
      document.body.style.cursor = 'pointer';
      window.addEventListener("mousemove", handleMove)
    }
    const removeHandler = () => {
      document.body.style.cursor = "default";
      window.removeEventListener("mousemove", handleMove)
    }

    window.addEventListener("mouseup", removeHandler)

    return () => {
      window.removeEventListener("mouseup", removeHandler)
    }
  }, [])

  return (
    <div className={"scrollbar"} ref={scrollbar}>
      <div className={"track"}>
        <div className={"thumb"} ref={scrollbarThumb}/>
      </div>
    </div>
  )
}