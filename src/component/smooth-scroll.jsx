import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const SmoothScroll = ({ children }) => {
  const [height, setHeight] = useState(window.innerHeight);
  const viewportRef = useRef(null);
  const fakeRef = useRef(null);

  const ro = new ResizeObserver((elements) => {
    for (let elem of elements) {
      const crx = elem.contentRect;
      setHeight(crx.height);
    }
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    ro.observe(viewportRef.current);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      ro.disconnect();
    };
  }, []);

  const handleScroll = () => {
    gsap.to(viewportRef.current, {
      y: -window.scrollY,
      ease: "power4.out",
      duration: 1.5,
    });
  };

  return (
    <>
      <div className="viewport" ref={viewportRef}>
        {children}
      </div>
      <div
        ref={fakeRef}
        style={{
          height: height,
        }}
      />
    </>
  );
};

export default SmoothScroll;
