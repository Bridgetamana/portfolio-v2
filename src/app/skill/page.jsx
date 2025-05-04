export default function service() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Tailwind CSS",
    "GraphQL",
    "UI/UX Design",
    "Responsive Design",
  ];

  return (
    <div className="flex flex-1 py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-medium mb-12 text-center">
          Skills
        </h1>

        <div className="mt-16 mb-14">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-secondary/30 border border-white/10 rounded-lg p-4 sm:p-6 text-center hover:border-gold/30 transition-all hover:bg-secondary/50"
              >
                <span className="text-sm sm:text-base">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
