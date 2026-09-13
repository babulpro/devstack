import { useState } from 'react'
import myImage from '../../assets/logo-text.png'
import hamburgerIcon from '../../assets/hamburger.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Technologies', href: '#' },
    { label: 'Projects', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
  ]

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-100">
      <div className="mx-auto w-full max-w-[1280px] px-3 sm:px-4 py-2.5 sm:py-4 flex items-center justify-between gap-2">

        {/* -------- LEFT: Hamburger (mobile only) -------- */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden shrink-0 p-1"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <img
            src={hamburgerIcon}
            alt="menu"
            className="h-7 w-7 object-contain"
          />
        </button>

        {/* -------- CENTER-LEFT: Logo -------- */}
        <div className="flex items-center shrink-0">
          <img
            src={myImage}
            alt="DevStack logo"
            className="h-7 sm:h-8 w-auto"
          />
        </div>

        {/* -------- DESKTOP: Nav links -------- */}
        <div className="hidden md:flex flex-1 items-center  justify-center gap-8 text-[#475569]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#d91b7e]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* -------- RIGHT: Auth buttons -------- */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <button className="ext-[#334155]  rounded-full hover:bg-[#d91b7e] px-4 sm:px-5 py-1.5 text-sm font-semibold hover:text-white hover:opacity-90 ">
            Sign In
          </button>
          <button className="text-[#334155]  rounded-full hover:bg-[#d91b7e] px-4 sm:px-5 py-1.5 text-sm font-semibold hover:text-white hover:opacity-90">
            Sign Up
          </button>
        </div>
      </div>

      {/* -------- Mobile dropdown — links only -------- */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pb-4">
          <div className="flex flex-col gap-2 pt-3 text-[#475569]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-2 hover:bg-slate-50 hover:text-[#d91b7e]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar