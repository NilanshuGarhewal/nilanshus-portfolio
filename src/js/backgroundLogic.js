export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const highlightRandomNeighbors = (
  index,
  numCols,
  numBlocks,
  blockContainerRef
) => {
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
