import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // const jso = sessionStorage.getItem("scrollPosition") ?? "{}";
    // const savedPosition = JSON.parse(jso);
    // if (savedPosition && location.pathname === "/") {
    //   // Restore the saved scroll position
    //   window.scrollTo(savedPosition.x, savedPosition.y);
    // } else {
    //   // Scroll to the top of the page
    //   window.scrollTo(0, 0);
    // }
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // useEffect(() => {
  //   // Save the scroll position when navigating away
  //   const handleBeforeUnload = () => {
  //     console.log("saving scroll position");
  //     sessionStorage.setItem(
  //       "scrollPosition",
  //       JSON.stringify({ x: window.scrollX, y: window.scrollY })
  //     );
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);

  return null;
};

export default ScrollToTop;
