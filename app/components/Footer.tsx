export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">

        {/* Feedback */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Share Feedback</h3>
          <p className="text-gray-300 mb-4">
            We value your opinion.<br /> Help us improve our services.
          </p>
          <a
            href="/contact"
            className="text-yellow-400 hover:underline font-medium"
          >
            Leave Feedback →
          </a>
        </div>

        {/* Call Us */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Call Us</h3>
          <p className="text-gray-300 mb-2">
            Need immediate assistance? <br /> Need an electrician today?
          </p>
          <p className="text-lg font-bold text-yellow-400">
            📞 +1 (647) 646-4037
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-300 mb-2">
            Email us for quotes or service requests
          </p>
          <p className="text-yellow-400 font-medium">
            ✉️ info@everelec.ca
          </p>
        </div>

        {/* Footer Image */}
        <div className="flex flex-col items-center justify-center">
          <img
            src="/ESA.png"
            alt="Everelec Electrical Work"
            className="w-full max-w-[180px] h-28 object-cover rounded-lg shadow-md opacity-90 hover:opacity-100 transition"
          />
        </div>

      </div>

      <div className="text-center text-gray-400 mt-10 text-sm">
        © {new Date().getFullYear()} Everelec Energy Solutions Inc. All rights reserved.
      </div>
    </footer>
  );
}
