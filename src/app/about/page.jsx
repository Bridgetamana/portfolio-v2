import Logo from "@/components/Logo";

export default function About() {
  return (
    <div className="flex-1 flex py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-medium mb-8 text-center">
          About Me
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center mb-8 md:mb-0">
            <div className="relative w-64 h-64 border border-white/10 rounded-md p-4">
              <div className="w-full h-full flex items-center justify-center">
                <Logo />
              </div>
              <div className="absolute inset-0 backdrop-blur-sm bg-black/10"></div>
            </div>
          </div>

          <div>
            <p className="text-white/80 mb-4 leading-relaxed">
              I'm a frontend developer with 2 years of experience building
              responsive, user-focused web interfaces using JavaScript, React,
              and Next.js.
            </p>
            <p className="text-white/80 mb-4 leading-relaxed">
              I focus on writing clean, maintainable code and building intuitive
              UI components that solve real problems. My workflow emphasizes
              simplicity, speed, and accessibility.
            </p>
            <p className="text-white/80 mb-6 leading-relaxed">
              Outside of development, I document what I learn, share useful
              resources, and occasionally contribute to small open-source tools
              and side projects. I'm currently building my own product called{" "}
              <a
                href="https://www.getproductiv.africa/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-accent hover:text-accent/80"
              >
                GetProductiv{" "}
              </a>
              — a tool designed to help you focus and achieve more.
            </p>
            <button className="button-outline">Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
}
