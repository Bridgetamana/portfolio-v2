import Logo from "@/components/Logo";

export default function about() {
    return (
      <div className="min-h-screen py-24 px-8">
        <div className="max-w-6xl mx-auto pt-12">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-medium mb-12 text-center">
            About Us
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center mb-8 md:mb-0">
              <div className="relative w-64 h-64 border border-white/10 rounded-md p-4">
                <div className="w-full h-full flex items-center justify-center">
                    <Logo />
                </div>
                <div className="absolute inset-0 backdrop-blur-sm bg-black/20"></div>
              </div>
            </div>

            <div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit recusandae dolore, tempora soluta corporis reprehenderit adipisci, aliquid nisi sapiente vel animi? Dicta iure itaque laboriosam a sapiente ullam nihil voluptatibus.
              </p>
              <p className="text-white/80 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cupiditate vitae laudantium iusto ut, assumenda similique recusandae id, nobis molestias enim aspernatur vel quis repudiandae libero sequi, praesentium et illum!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eaque dolores obcaecati natus quas impedit, saepe amet eveniet id hic quasi, eligendi laborum cupiditate ad repellendus culpa beatae necessitatibus. Nihil.
              </p>
              <p className="text-white/80 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam itaque
              </p>
              <button className="button-outline">Download CV</button>
            </div>
          </div>
        </div>
      </div>
    );
}