export default function CommercialProjectsPage() {
  const projects = [
    {
      title: "Office Lighting Upgrade",
      description: "Installed energy-efficient LED lighting for a corporate office.",
      image: "/commercial1.jpeg",
    },
    {
      title: "Retail Store Wiring",
      description: "Complete electrical wiring for a new retail outlet.",
      image: "/commercial2.jpeg",
    },
    {
      title: "Warehouse Power Setup",
      description: "High-capacity electrical system for warehouse operations.",
      image: "/commercial3.jpeg",
    },
    {
      title: "Restaurant Electrical Fit-Out",
      description: "Full electrical installation for kitchen and dining areas.",
      image: "/commercial4.jpeg",
    },
    {
      title: "Emergency Lighting System",
      description: "Installed emergency and exit lighting for safety compliance.",
      image: "/commercial5.jpeg",
    },
    {
      title: "Panel Upgrade – Commercial",
      description: "Upgraded main electrical panels for a commercial building.",
      image: "/commercial6.jpeg",
    },
    {
      title: "Security & Surveillance Power",
      description: "Power supply and wiring for CCTV and security systems.",
      image: "/commercial7.jpeg",
    },
    {
      title: "Parking Lot Lighting",
      description: "Outdoor commercial lighting for parking and walkways.",
      image: "/commercial8.jpeg",
    },
    {
      title: "Data & Network Cabling",
      description: "Structured cabling for office networking systems.",
      image: "/commercial9.jpeg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl">
            Commercial & Industrial <span className="font-bold">Projects</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A showcase of our commercial electrical work, including lighting upgrades,
            wiring, panel installations, and safety systems for businesses.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-xl shadow overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-contain bg-gray-200"

              />

              {/* Hover Overlay */}
              <div
                className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center text-white px-4
                translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
