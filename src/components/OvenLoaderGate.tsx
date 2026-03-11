"use client";

import { useState } from "react";
import { IntroOverlay } from "./IntroOverlay";

export function OvenLoaderGate({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <>
      {showLoader && <IntroOverlay onComplete={() => setShowLoader(false)} />}
      {children}
    </>
  );
}
