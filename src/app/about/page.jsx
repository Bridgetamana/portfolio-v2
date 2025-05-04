import Logo from "@/components/Logo";

export default function about() {
    return (
      <div className="flex-1 flex py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-medium mb-8 text-center">
            About Us
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
                I'm a passionate <strong>full-stack developer</strong> with 5+
                years of experience building{" "}
                <strong>user-friendly web applications</strong> for startups and
                enterprises. My work combines <strong>clean code</strong>,
                modern design principles, and
                <strong>UX-focused development</strong>.
              </p>
              <p className="text-white/80 mb-4 leading-relaxed">
                My approach combines clean code, modern design principles, and a
                deep understanding of user experience. I believe that the best
                digital products are both visually appealing and technically
                excellent.
              </p>
              <p className="text-white/80 mb-6 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to <strong>open-source</strong> projects, or
                sharing my knowledge through <strong>writing</strong>.
              </p>
              <button className="button-outline">Download CV</button>
            </div>
          </div>
        </div>
      </div>
    );
}