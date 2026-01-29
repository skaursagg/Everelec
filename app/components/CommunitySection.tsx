export default function CommunitySection() {
  const cities = [
   "Ajax", "Aurora", "Aliston", "Brampton", "Burlington", "Bolton", "Caledon", "Etobicoke","Hamilton", "Innisfil", "Kleinburg", 
   "King City", "London", "Markham", "Mississauga","Milton", "North York", "Oakville","Oshawa", "Pickering", "Richmond Hill", "Scarborough",
   "Stouffville", "Toronto", "Vaughan", "Whitby", "Woodbridge"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700">
      <div className="max-w-6xl mx-auto px-5">

        {/* Title */}
        <h2 className="text-center text-white text-2xl md:text-4xl font-bold mb-10">
          Areas We Serve
        </h2>

        {/* City Pills */}
        <div className="flex flex-wrap justify-center gap-4">
          {cities.map((city, index) => (
            <span
              key={index}
              className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium shadow hover:bg-yellow-500 hover:text-black transition"
            >
              {city}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
