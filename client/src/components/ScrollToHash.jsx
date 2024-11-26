import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Use setTimeout with a small delay to ensure DOM is updated
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // Adjust the delay if needed
      }
    }
  }, [location]);

  return null;
};

export default ScrollToHash;
