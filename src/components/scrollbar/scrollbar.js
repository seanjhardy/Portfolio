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
    maximumGlowPointSpacing: 10,
  }

  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
    selectRandom = items => items[rand(0, items.length - 1)];

  const withUnit = (value, unit) => `${value}${unit}`,
    px = value => withUnit(value, "px");

  const calcDistance = (a, b) => {
    const diffX = b.x - a.x,
      diffY = b.y - a.y;

    return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
  }

  const appendElement = element => scrollbar.current.appendChild(element),
    removeElement = (element, delay) => setTimeout(() => scrollbar.current.removeChild(element), delay);

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

  const determinePointQuantity = distance => Math.max(
    Math.floor(distance / config.maximumGlowPointSpacing),
    1
  );

  const createGlow = (last, current) => {
    const distance = calcDistance(last, current),
      quantity = determinePointQuantity(distance);

    const dx = (current.x - last.x) / quantity,
      dy = (current.y - last.y) / quantity;

    const speed = Math.sqrt(dy * dy);
    Array.from(Array(quantity)).forEach((_, index) => {
      const x = last.x + dx * index,
        y = last.y + dy * index;
      createGlowPoint({ x, y, speed});
    });
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
    const scrollbarPos = ratio * (scrollbar.current.getBoundingClientRect().height - scrollbarThumb.current.getBoundingClientRect().height)
    handleOnMove({clientX: 0, clientY: scrollbarPos + scrollbarThumb.current.getBoundingClientRect().height*0.5})

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