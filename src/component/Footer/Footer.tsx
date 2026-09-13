import myImage from '../../assets/logo-text.png';


const Footer = () => {
  return (
    <footer className="bg-slate-100 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-14">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <img src={myImage} alt="logo image of the dec Stack"/>
                
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6">
              Curated tools, technologies, and resources for developers building
modern software.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="transition hover:text-white"
              >
                GitHub
              </a>

              <a
                href="#"
                className="transition hover:text-white"
              >
                Twitter
              </a>

              <a
                href="#"
                className="transition hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-slate-700">
              Product
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Projects
                </a>
              </li>

                
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-slate-600">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>

                
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-slate-600">
              Legal
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Terms Of Service
                </a>
              </li>

                
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-800 pt-6">
          <div className="flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p>
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a href="#" className="hover:text-white">
                Privacy
              </a>

              <a href="#" className="hover:text-white">
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