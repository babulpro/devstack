import myImage from '../../assets/logo-text.png';


const Footer = () => {
  return (
    <footer className="bg-slate-100 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-14">

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2 ">
            <div className="flex items-center gap-2 w-20 h-20">
              <img src={myImage} alt="logo image of the dec Stack" className="m-auto md:m-0"/>
                
            </div>

            <p className="mt-5 text-center md:text-left  text-sm leading-6">
              Curated tools, technologies, and resources for developers building
modern software.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-4 text-slate-900 justify-center md:justify-start">
              <a
                href="#"
                className="transition hover:text-slate-500"
              >
                GitHub
              </a>

              <a
                href="#"
                className="transition hover:text-slate-500"
              >
                Twitter
              </a>

              <a
                href="#"
                className="transition hover:text-slate-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="hidden md:block">
            <h3 className="font-semibold text-slate-700">
              Product
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-slate-500">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-slate-500">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-slate-500">
                  Projects
                </a>
              </li>

                
            </ul>
          </div>

          {/* Company */}
          <div className="hidden md:block">
            <h3 className="font-semibold text-slate-600">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-slate-500">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-slate-500">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-slate-500">
                  Careers
                </a>
              </li>

                
            </ul>
          </div>

          {/* Legal */}
          <div className="hidden md:block">
            <h3 className="font-semibold text-slate-600">
              Legal
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-slate-500">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-slate-500">
                  Terms Of Service
                </a>
              </li>

                
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-3">
          <div className="flex flex-cols-2 gap-4 text-sm justify-between">
            <p>
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-500">
                Privacy
              </a>

              <a href="#" className="hover:text-slate-500">
                Terms
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;