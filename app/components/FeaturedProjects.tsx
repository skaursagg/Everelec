import Link from "next/link";

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl">
            Featured <span className="font-bold">Projects</span>
          </h2>
          <p className="text-gray-600 mt-3">
            A look at some of our recent electrical and energy solutions work
          </p>
        </div>

        {/* ✅ Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Residential */}
          <Link href="./projects/residential" className="group">
            <div className="relative cursor-pointer bg-white rounded-xl shadow overflow-hidden">
              <img src="residential cover2.jpg" className="w-full h-65 object-cover" />

              <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white
                translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold">Residential Projects</h3>
                <p className="text-sm mt-2">Home electrical upgrades & installations</p>
              </div>
            </div>
          </Link>

          {/* Commercial */}
          <Link href="/projects/commercial" className="group">
            <div className="relative cursor-pointer bg-white rounded-xl shadow overflow-hidden">
              <img src="/commercial cover1.jpg" className="w-full h-65 object-cover" />

              <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white
                translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold">Commercial & Industrial Projects</h3>
                <p className="text-sm mt-2">Lighting & power solutions for businesses</p>
              </div>
            </div>
          </Link>

          {/* EV */}
          <Link href="/projects/ev-charger" className="group">
            <div className="relative cursor-pointer bg-white rounded-xl shadow overflow-hidden">
              <img src="/ev cover.jpg" className="w-full h-65  object-cover" />

              <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white
                translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold">EV Charger Projects</h3>
                <p className="text-sm mt-2">EV charging installations & upgrades</p>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
