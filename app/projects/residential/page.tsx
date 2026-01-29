export default function ResidentialProjectsPage() {
  const projects = [
    {
      title: "Modernized Electrical Work",
      description: "Modernized electrical work for a single-family home.",
      image: "/residential1.jpeg",
    },
    {
      title: "Home Theater Lighting",
      description: "Home theater lighting installation with smart controls.",
      image: "/residential2.jpeg",
    },
    {
      title: "Home Theater Setup",
      description: "Home theater setup with surround sound and smart controls.",
      image: "/residential3.jpeg",
    },
    {
      title: "Basement Wiring",
      description: "Complete rewiring for finished basement renovation.",
      image: "/residential4.jpeg",
    },
    {
      title: "Modernized Electrical Work",
      description: "Modern electrical work, roof lighting, and panel upgrade.",
      image: "/residential5.jpeg",
    },
    {
      title: "Smart Home Setup",
      description: "Smart switches, dimmers, and automation installed.",
      image: "/residential6.jpeg",
    },
    {
      title: "Smart Home Setup",
      description: "Smart switches, dimmers, and automation installed.",
      image: "/residential7.jpeg",
    },
    {
      title: "Starlite Roof Lighting",
      description: "Starlite roof lighting installation and home theater setup.",
      image: "/residential8.jpeg",
    },
    {
      title: "Smart Home Setup",
      description: "Smart switches, dimmers, and automation installed.",
      image: "/residential9.jpeg",
    },
    {
      title: "Outdoor Lighting",
      description: "Landscape and security lighting for backyard area.",
      image: "/residential10.jpeg",
    },
    {
      title: "Smart Home Setup",
      description: "Smart switches, dimmers, and automation installed.",
      image: "/residential11.jpeg",
    },
    {
      title: "Panel Upgrade",
      description: "Electrical panel upgrade for increased capacity and safety.",
      image: "/residential 12.png",
    },
    {
      title: "Panel Upgrade",
      description: "Electrical panel upgrade for increased capacity and safety.",
      image: "/residential 13.jpeg",
    },
    {
      title: "Stair Light Installation",
      description: "Stair light installation with energy-efficient LED fixtures.",
      video: "/StairLight.mp4",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl">Residential <span className="font-bold">Projects</span> </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A showcase of our residential electrical work, including upgrades,
            lighting installations, EV chargers, and smart home solutions.
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
                className="w-full h-60 object-cover"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center text-white px-4
                translate-y-full group-hover:translate-y-0 transition-transform duration-300">
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
