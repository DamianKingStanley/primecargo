import React, { useEffect } from "react";
import "./GoogleTranslate.css";

let googleWidgetInitialized = false; // Global variable outside component

export default function GoogleTranslate() {
  useEffect(() => {
    if (!document.getElementById("google-translate-script")) {
      // Define callback before script load
      window.googleTranslateElementInit = () => {
        if (!googleWidgetInitialized) {
          try {
            new window.google.translate.TranslateElement(
              { pageLanguage: "en" },
              "google_translate_element"
            );
            googleWidgetInitialized = true;
          } catch (error) {
            console.error("Translate init error:", error);
          }
        }
      };

      // Load script
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      // Clean up
      return () => {
        const existingScript = document.getElementById(
          "google-translate-script"
        );
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
        delete window.googleTranslateElementInit;
        googleWidgetInitialized = false;
      };
    }
  }, []);

  return (
    <div className="google-translate-container">
      {/* Toggle Button */}
      <button
        className="translate-button"
        onClick={() => {
          const el = document.getElementById("google_translate_element");
          if (el) {
            el.style.display = el.style.display === "none" ? "block" : "none";
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="translate-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.5 8.5L15 9m-6 6l4.5-4.5M3 19h12M9 17v2"
          />
        </svg>
      </button>

      {/* Translate Widget */}
      <div
        id="google_translate_element"
        className="translate-dropdown"
        style={{ display: "none" }}
      ></div>
    </div>
  );
}
