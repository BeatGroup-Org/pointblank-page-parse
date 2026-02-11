import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [fading, setFading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    setFading(true);
    const t = setTimeout(() => setFading(false), 50);
    return () => clearTimeout(t);
  }, [pathname]);

  return fading ? (
    <style>{`main { animation: fadeInPage 0.3s ease forwards; }
@keyframes fadeInPage { from { opacity: 0; } to { opacity: 1; } }`}</style>
  ) : null;
}
