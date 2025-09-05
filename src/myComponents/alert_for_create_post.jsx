import React from "react";

export default function AlertBox({ children, type = "info", onClose }) {
  // Type ke hisaab se color select ho jayega (info, success, error, warning)
  const colorMap = {
    info: "from-blue-100 to-purple-100 border-blue-400 text-blue-800",
    success: "from-green-100 to-teal-100 border-green-400 text-green-800",
    error: "from-pink-100 to-red-100 border-red-400 text-red-800",
    warning: "from-yellow-100 to-orange-100 border-yellow-400 text-yellow-800",
  };

  return (
    <div
      className={`w-full max-w-md mx-auto fixed left-1/2 -translate-x-1/2 top-8 z-50
        bg-gradient-to-r ${colorMap[type]}
        border-l-4 rounded-xl shadow-lg px-5 py-4 flex items-center gap-4
        animate-fadeIn
        md:top-12 md:max-w-lg
        `}
      style={{
        boxShadow: "0 4px 24px rgba(0,0,0,0.13)",
        transition: "all 0.3s",
      }}
    >
      {/* Icon */}
      <span className="flex-shrink-0">
        {type === "success" && (
          <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
          </svg>
        )}
        {type === "error" && (
          <svg className="h-6 w-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        )}
        {type === "warning" && (
          <svg className="h-6 w-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M4.93 19.07A10 10 0 1119.07 4.93 10 10 0 014.93 19.07z"/>
          </svg>
        )}
        {type === "info" && (
          <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01"/>
          </svg>
        )}
      </span>
      {/* Content */}
      <div className="flex-1 text-base font-medium">{children}</div>
      {/* Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="ml-2 rounded-full bg-white/70 hover:bg-white p-1 transition shadow-sm"
          aria-label="Close"
        >
          <svg className="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      )}
    </div>
  );
}