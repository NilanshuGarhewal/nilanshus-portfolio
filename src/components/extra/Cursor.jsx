import "../../css/extraCss/Cursor.css";
import { useEffect, useRef, useState } from "react";
import { setupCustomCursor } from "../../js/cursorLogic";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cleanup = setupCustomCursor(cursorRef, setIsHovering);
    return cleanup;
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isHovering ? "cursor-hovered" : ""}`}
    />
  );
};

export default CustomCursor;
