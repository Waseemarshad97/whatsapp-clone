import React, { useEffect, useRef } from "react";

function ContextMenu({ options, coordinates, contextMenu, setContextMenu }) {
  const contextMenuRef = useRef(null);
  const handleClick = (e, callback) => {
    e.stopPropagation();
    setContextMenu(false);
    callback();
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.id !== "context-opener") {
        if (
          contextMenuRef.current &&
          !contextMenuRef.current.contains(event.target)
        ) {
          setContextMenu(false);
        }
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <>
      <div
        className={`shadow-xl bg-dropdown-background fixed py-2 z-[100] top-[${coordinates.y}] left-[${coordinates.x}]]`}
        ref={contextMenuRef}
        style={{
          top: coordinates.y,
          left: coordinates.x,
        }}
      >
        <ul>
          {options.map(({ name, callback }) => (
            <li
              className="px-5 py-2 cursor-pointer hover:bg-backround-default"
              key={name}
              onClick={(e) => handleClick(e, callback)}
            >
              <span className="text-primary-strong">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ContextMenu;
