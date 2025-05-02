export default function service() {
  const services = [
    {
      title: "Lorem Ipsum",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Lorem Ipsum",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Lorem Ipsum",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Lorem Ipsum",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="min-h-screen py-24 px-8">
      <div className="max-w-6xl mx-auto pt-12">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-medium mb-12 text-center">
          Our Services
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="border border-white/10 rounded-md p-8 transition-all duration-300 hover:border-gold/30 hover:bg-black/30"
            >
              <h3 className="font-serif text-2xl mb-4">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
