import { useEffect, useState } from "react";

// Keep content alive through the existing 0.34s delay + 0.55s close transition.
const CLOSE_DURATION_MS = 950;

export default function DeferredSheet({ component: Sheet, isOpen, ...props }) {
  const [retained, setRetained] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setRetained(false);
        setEntered(false);
      }, CLOSE_DURATION_MS);
      return () => clearTimeout(timer);
    }

    setRetained(true);
    let secondFrame;
    // Paint the closed position before starting the opening transition.
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => setEntered(true));
    });
    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
    };
  }, [isOpen]);

  if (!isOpen && !retained) return null;
  return <Sheet {...props} isOpen={isOpen && entered} />;
}
