import { useEffect } from "react";

const useKeyDown = (key, onKeyDown) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === key) onKeyDown();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useKeyDown;