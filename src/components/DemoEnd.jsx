import { Mail, Globe, X } from "lucide-react";

export default function DemoEndedOverlay({ onClose }) {
  return (
    <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      
      <div className="relative max-w-md w-full bg-white rounded-2xl shadow-2xl p-7 text-center space-y-5">
        
        {/* Close Button (optional) */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-black"
          >
            <X size={18} />
          </button>
        )}

        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-900">
          Demo Expired
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          Your demo access has ended. To continue using this platform,
          please contact Everline Systems.
        </p>

        {/* Contact Box */}
        <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-sm">
          
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <Mail size={16} />
            <span>contact@everlinesys.com</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-700">
            <Globe size={16} />
            <a
              href="https://everlinesys.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black font-medium"
            >
              everlinesys.com
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}