import React, { useEffect, useRef, useState } from "react";
import "./Background.css";

export function Background() {
  const blockContainerRef = useRef(null);
  const [numCols, setNumCols] = useState(0);
  const [numRows, setNumRows] = useState(0);
  const blockSize = 50;

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const cols = Math.ceil(screenWidth / blockSize);
    const rows = Math.ceil(screenHeight / blockSize);
    setNumCols(cols);
    setNumRows(rows);
  }, []);

  const numBlocks = numCols * numRows;

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const highlightRandomNeighbors = (index) => {
    const neighbors = [
      index - 1,
      index + 1,
      index - numCols,
      index + numCols,
      index - numCols - 1,
      index - numCols + 1,
      index + numCols - 1,
      index + numCols + 1,
    ].filter(
      (i) =>
        i >= 0 &&
        i < numBlocks &&
        Math.abs((i % numCols) - (index % numCols)) <= 1
    );

    const currentBlock = blockContainerRef.current.children[index];
    if (!currentBlock) return;

    currentBlock.classList.add("highlight");
    setTimeout(() => {
      currentBlock.classList.remove("highlight");
    }, 500);

    shuffleArray(neighbors)
      .slice(0, 1)
      .forEach((nIndex) => {
        const neighbor = blockContainerRef.current.children[nIndex];
        if (neighbor) {
          neighbor.classList.add("highlight");
          setTimeout(() => {
            neighbor.classList.remove("highlight");
          }, 500);
        }
      });
  };

  return (
    <div className="blocks-container">
      <div id="blocks" ref={blockContainerRef}>
        {Array.from({ length: numBlocks }).map((_, index) => (
          <div
            key={index}
            className="block"
            onMouseMove={() => highlightRandomNeighbors(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
