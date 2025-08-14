import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-h1 mb-4">404</h1>
        <p className="text-body text-text-secondary mb-4">Oops! Puslapis nerastas</p>
        <a href="/" className="text-accent hover:text-accent-hover underline">
          Grįžti į pagrindinį
        </a>
      </div>
    </div>
  );
};

export default NotFound;
