export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 bg-white p-10 rounded-xl shadow">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl mb-4">
            Contact <span className="font-bold">Us!</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Have a project in mind or need emergency electrical service?  
            Get in touch with us — we’re happy to help.
          </p>

          <div className="space-y-4 text-gray-700">
            <p><strong>📍 Location:</strong> Ontario, Canada</p>
            <p><strong>📞 Phone:</strong> (647) 646-4037</p>
            <p><strong>📧 Email:</strong> info@everelecsolutions.ca</p>
            <p><strong>🕒 Hours:</strong> Mon – Sat: 8am – 6pm</p>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-3 border rounded"
          />

          <textarea
            placeholder="Describe your project or issue..."
            rows={4}
            className="w-full p-3 border rounded"
          ></textarea>

          <button
            type="submit"
            className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
