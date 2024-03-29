import React, {useEffect, useRef, useState} from "react";

import useWindowSize from "./useWindowSize";
import {ScrollProvider} from "./scroll-context";

const SmoothScroll = ({ children }) => {
  const [data, setData] = useState({
    ease: 0.05,
    current: 0,
    previous: 0,
    rounded: 0,
    ratio: 0,
  });

  // 1.
  const windowSize = useWindowSize();

  //2.
  const scrollingContainerRef = useRef();

  // 3.
  const handleResize = () => {
    document.body.style.height = `${
      scrollingContainerRef.current.getBoundingClientRect().height
    }px`;
  }
  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [windowSize.height, scrollingContainerRef.current]);


  // 5.
  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  const smoothScrollingHandler = () => {
    const current = window.scrollY;
    const docHeight = document.body.offsetHeight

    setData((data) => {
      const rounded = Math.round(data.previous * 100) / 100;
      const ratio = data.previous / (docHeight - window.innerHeight)
      scrollingContainerRef.current.style.transform = `translateY(-${rounded}px)`;

      return {
        ease: data.ease,
        current,
        previous: data.previous + (current - data.previous) * data.ease,
        rounded,
        ratio,
      };
    });

    // Recursive call
    requestAnimationFrame(() => smoothScrollingHandler());
  };

  return (
    <ScrollProvider data={data} setData={setData}>
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        minHeight: "100%",
        backgroundColor: "black",
      }}>
        <div ref={scrollingContainerRef} style={{minHeight: "100%"}}>
          {children}
        </div>
      </div>
    </ScrollProvider>
  );
};

export default SmoothScroll;
