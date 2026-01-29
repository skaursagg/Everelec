export default function EVChargerProjectsPage() {
  const projects = [
    {
      title: " EV Charger Installation",
      description: "Installed multiple Level 2 EV chargers at a corporate office parking lot.",
      image: "/ev charger1.png",
    },
    {
      title: " EV Charger Setup",
      description: "Home charging station installation for electric vehicles.",
      image: "/ev charger2.png",
    },
    {
      title: "Public Charging Station",
      description: "Set up public EV chargers with fast-charging capabilities.",
      image: "/ev charger3.png",
    },
    
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl">
            EV Charger <span className="font-bold">Projects</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A showcase of our EV charger installations, upgrades, and maintenance services
            for residential, commercial, and public spaces.
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
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
