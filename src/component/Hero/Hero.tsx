import myImage from '../../assets/banner-stack.png';


const Hero = () => {
  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          {/* Hero Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
              Build Your Ideal
            </h1>
            
              <h2 className="text-6xl font-extrabold bg-gradient-to-r from-[#ff5722] via-[#d81b7e] to-[#7c3aed] bg-clip-text text-transparent">
                Development Stack
              </h2>
             

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits your
              next project.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-gradient-to-r from-[#f97316]   to-[#ec4899] px-6 py-3 font-semibold text-white transition hover:opacity-90">
                Explore Technologies
              </button>

              <button className="rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-violet-500 hover:text-violet-600">
                Learn More
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={myImage}
              alt="Developer technology illustration"
              className="w-full max-w-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;