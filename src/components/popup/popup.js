import React, { useEffect, useRef, useState } from "react";
import "./popup.css"
import {useScrollContext} from "../SmoothScroll/scroll-context";

export const Popup = ({show, onClose, children, style = {} }) => {
  const { previous, rounded} = useScrollContext();
  const ref = useRef()
  const popupBody = useRef()

  useEffect(() => {
    popupBody.current.classList.toggle('active');
  }, [show])

  useEffect(() => {
    ref.current.style.setProperty("--scroll", `${rounded}px`);
  }, [rounded]);

  return (
    <div id="popup"
         className="popup"
         style={{display: show ? "flex" : "none"}}
         ref={ref}
         onClick={(e) => {
           onClose()
         }}>
      <div className={"popup-content"}
           ref={popupBody}
           style={style}
           onClick={(e) => {
             e.stopPropagation();
           }}>
        {children}
      </div>
    </div>
  );
};