import myImage from '../../assets/logo-text.png';



const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-100">
      <div className="w-[1280px] mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <div className="w-[137px] h-[32px] flex items-center justify-center">
            
            <img src={myImage} alt='logo image of the devstrack'/>
          </div>

           
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-[#475569]">
          <a href="#" className="hover:text-[#d91b7e]">
            Home
          </a>

          <a href="#" className="hover:text-[#d91b7e]">
            Technologies
          </a>

          <a href="#" className="hover:text-[#d91b7e]">
            Projects
          </a>

          <a href="#" className="hover:text-[#d91b7e]">
            About
          </a>

          <a href="#" className="hover:text-[#d91b7e]">
            Contact
          </a>
        </div>

        {/* Authentication Buttons */}
        <div className="flex items-center gap-3">
          <button className="text-[#334155] mr-3 hover:text-[#fbcfe8] hover:bg-[#d91b7e] px-3 py-1 rounded-2xl ">
            Sign In
          </button>

          <button className="text-[#334155] mr-5 hover:text-[#fbcfe8] hover:bg-[#d91b7e] px-3 py-1 rounded-2xl">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;