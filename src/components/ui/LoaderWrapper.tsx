"use client";

import { useEffect, useState } from "react";
import { SpiralAnimation } from "./SpiralLoader";

type Phase = "loading" | "fading" | "done";

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<Phase>("loading");

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("loaderShown")) {
      setPhase("done");
      return;
    }

    const showTimer = setTimeout(() => {
      sessionStorage.setItem("loaderShown", "1");
      setPhase("fading");
      const unmountTimer = setTimeout(() => setPhase("done"), 500);
      return () => clearTimeout(unmountTimer);
    }, 1800);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (phase === "loading" || phase === "fading") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  return (
    <>
      {phase !== "done" && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "#0D1B3E",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: phase === "fading" ? 0 : 1,
            transition: "opacity 0.5s ease",
            pointerEvents: phase === "fading" ? "none" : "auto",
          }}
        >
          <SpiralAnimation />
          <div
            style={{
              position: "absolute",
              bottom: "28%",
              left: 0,
              right: 0,
              textAlign: "center",
              fontFamily: "'Barlow Condensed', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: 22,
              color: "#FFFFFF",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              pointerEvents: "none",
            }}
          >
            MUMBAI DREAMERS
          </div>
        </div>
      )}
      {children}
    </>
  );
}
