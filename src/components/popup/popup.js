import React, { useEffect, useRef, useState } from "react";

export const Popup = ({ closePop, children, style = {} }) => {
  const animatedValue = useRef(0);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    animatedValue.current = 1;
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    closePop();
  };

  const translateAnimation = animatedValue.current;

  return (
    <>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={handleClose}
        >
          <div
            style={{
              width: "80%",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              transform: `scale(${translateAnimation})`,
              ...style,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};