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
        <div className="fixed bottom-6 right-6 max-w-xs p-6 rounded-2xl bg-black text-white z-50 shadow-2xl border border-blue-600/30">
          <p className="text-sm mb-4 text-gray-300 leading-relaxed text-center">
            We use cookies to improve your experience.{" "}
            <Link
              to="/privacy-policy"
              className="underline font-semibold text-blue-500 hover:text-blue-400 transition-colors"
            >
              See our Privacy Policy
            </Link>
          </p>

          <div className="flex justify-center gap-3">
            <button
              onClick={handleReject}
              className="px-5 py-2 rounded-lg bg-gray-800 text-white text-sm hover:bg-gray-700 transition font-medium"
            >
              Reject
            </button>

            <button
              onClick={handleAccept}
              className="px-5 py-2 rounded-lg text-sm text-white bg-blue-600 hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 font-medium"
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
            className="w-12 h-12 rounded-full bg-blue-600 shadow-lg border border-blue-400/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer group"
            title="Cookie Preferences"
          >
            <img
              src="/revisit.svg"
              alt="Cookie Icon"
              className="w-6 h-6 object-contain brightness-0 invert opacity-90 group-hover:opacity-100" 
            />
          </button>
        </div>
      )}
    </>
  );
}