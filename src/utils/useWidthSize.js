import { useEffect, useState } from "react";

function useWidthSize() {
  const isSSR = typeof window !== "undefined";
  const [width, setWidth] = useState({
    width: isSSR ? 1200 : window.innerWidth
  })
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth({ width: window.innerWidth });
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWidth({ width: window.innerWidth });
      });
    };
  }, [])
  return width;
}

export default useWidthSize
