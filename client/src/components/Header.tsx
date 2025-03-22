import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Close menu when clicking a link
  const closeMenu = () => setIsMenuOpen(false);
  
  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white shadow-sm"}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-2xl md:text-3xl font-bold text-primary">
                <span className="text-[#D4B595]">Elegance</span> Interiors
              </a>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="/" label="Home" currentPath={location} onClick={closeMenu} />
            <NavLink href="/services" label="Services" currentPath={location} onClick={closeMenu} />
            <NavLink href="/portfolio" label="Portfolio" currentPath={location} onClick={closeMenu} />
            <NavLink href="/#inspiration" label="Inspiration" currentPath={location} onClick={closeMenu} />
            <NavLink href="/contact" label="Contact" currentPath={location} onClick={closeMenu} />
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <NavLink href="/" label="Home" currentPath={location} onClick={closeMenu} isMobile />
            <NavLink href="/services" label="Services" currentPath={location} onClick={closeMenu} isMobile />
            <NavLink href="/portfolio" label="Portfolio" currentPath={location} onClick={closeMenu} isMobile />
            <NavLink href="/#inspiration" label="Inspiration" currentPath={location} onClick={closeMenu} isMobile />
            <NavLink href="/contact" label="Contact" currentPath={location} onClick={closeMenu} isMobile />
          </div>
        )}
      </div>
    </header>
  );
}

interface NavLinkProps {
  href: string;
  label: string;
  currentPath: string;
  onClick: () => void;
  isMobile?: boolean;
}

function NavLink({ href, label, currentPath, onClick, isMobile = false }: NavLinkProps) {
  const isActive = currentPath === href || 
    (href.includes('#') && currentPath === '/' && href.startsWith('/'));
  
  const baseClasses = "transition-all relative";
  const mobileClasses = "block py-2 hover:text-[#D4B595]";
  const desktopClasses = "hover:text-[#D4B595] after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#D4B595] after:bottom-[-4px] after:left-0 after:transition-all hover:after:w-full";
  
  const classes = `text-primary ${isMobile ? mobileClasses : baseClasses + ' ' + desktopClasses} ${isActive ? 'text-[#D4B595]' : ''}`;
  
  const handleClick = (e: React.MouseEvent) => {
    onClick();
    
    // Handle smooth scrolling for hash links
    if (href.includes('#')) {
      e.preventDefault();
      const targetId = href.split('#')[1];
      const element = document.getElementById(targetId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  };
  
  return (
    <Link href={href}>
      <a className={classes} onClick={handleClick}>{label}</a>
    </Link>
  );
}
