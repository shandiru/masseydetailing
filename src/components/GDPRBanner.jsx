import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GDPRConsent() {
  const [visible, setVisible] = useState(false);
  const [accepted, setAccepted] = useState(null);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("gdprConsent");
    if (consent === "true" || consent === "false") {
      setAccepted(consent === "true");
      setShowIcon(true);
    } else {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gdprConsent", "true");
    setAccepted(true);
    setVisible(false);
    setShowIcon(true);
  };

  const handleReject = () => {
    localStorage.setItem("gdprConsent", "false");
    setAccepted(false);
    setVisible(false);
    setShowIcon(true);
  };

  const handleIconClick = () => {
    setVisible(true);
    setShowIcon(false);
  };

  return (
    <>
      {/* Cookie Consent Banner */}
      {visible && (
        <div className="fixed bottom-6 right-6 max-w-xs p-5 rounded-lg bg-black text-white z-50 shadow-lg border border-red-600">
          <p className="text-sm mb-4 text-gray-300 leading-relaxed text-center">
            We use cookies to improve your experience.{" "}
            <Link
              to="/privacy-policy"
              className="underline font-semibold text-red-500 hover:text-red-600 transition-colors"
            >
              See our Privacy Policy
            </Link>
          </p>

          <div className="flex justify-center gap-3">
            <button
              onClick={handleReject}
              className="px-5 py-2 rounded-md bg-red-700 text-white text-sm hover:bg-red-800 transition"
            >
              Reject
            </button>

            <button
              onClick={handleAccept}
              className="px-5 py-2 rounded-md text-sm text-white bg-red-600 hover:bg-red-700 transition"
            >
              Accept
            </button>
          </div>
        </div>
      )}

      {/* Cookie Icon */}
      {showIcon && !visible && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={handleIconClick}
            className="w-10 h-10 rounded-full bg-red-600 shadow-lg border border-white flex items-center justify-center hover:scale-105 transition cursor-pointer"
            title="Cookie Preferences"
          >
            <img
              src="/revisit.svg"
              alt="Cookie Icon"
              className="w-5 h-5 object-contain brightness-0 invert" 
            />
          </button>
        </div>
      )}
    </>
  );
}
