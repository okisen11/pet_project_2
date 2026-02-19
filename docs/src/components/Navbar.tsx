import { Link as ScrollLink } from "react-scroll"; // Note: In a real scenario we might use react-scroll, but here we use simple anchors for simplicity or implement logic
import { useState, useEffect } from "react";
import { ChevronDown, Send, Mail, Github, Briefcase } from "lucide-react";

/**
 * Navbar Component
 * Fixed position top navigation with smooth dropdown animations.
 * Features:
 * - Glassmorphism effect
 * - Custom Dropdowns for Projects and Contacts
 * - Smooth hover transitions
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background density
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      data-cmp="Navbar"
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-[1440px] px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="text-2xl font-bold tracking-tighter cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Mi.
          </span>
        </div>

        {/* Navigation Items */}
        <ul className="flex items-center gap-8">
          {/* Main */}
          <li>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
            >
              Главная
            </button>
          </li>

          {/* About Me */}
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
            >
              Обо мне
            </button>
          </li>

          {/* Projects Dropdown */}
          <li className="group relative py-6">
            <button className="flex items-center gap-1 text-slate-600 group-hover:text-blue-600 font-medium transition-colors">
              Проекты
              <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
            </button>

            {/* Dropdown Content */}
            <div className="absolute top-full -left-4 w-48 pt-2 opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out">
              <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 overflow-hidden">
                {[
                  { name: "SQL Projects", id: "sql" },
                  { name: "Python Scripts", id: "python" },
                  { name: "Power BI Dashboards", id: "powerbi" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-4 py-3 rounded-lg text-sm text-slate-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 hover:shadow-md hover:shadow-blue-100/50 transition-all duration-200"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </li>

          {/* Contacts Dropdown */}
          <li className="group relative py-6">
            <button className="flex items-center gap-1 text-slate-600 group-hover:text-purple-600 font-medium transition-colors">
              Контакты
              <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
            </button>

            {/* Dropdown Content */}
            <div className="absolute top-full right-0 w-56 pt-2 opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out">
              <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 overflow-hidden">
                {[
                  { name: "Telegram", icon: Send, color: "text-blue-500" },
                  { name: "Email", icon: Mail, color: "text-orange-500" },
                  { name: "GitHub", icon: Github, color: "text-slate-800" },
                  { name: "HeadHunter", icon: Briefcase, color: "text-red-600" },
                ].map((item) => (
                  <a
                    key={item.name}
                    href="#" // Placeholder link
                    className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:translate-x-1 transition-all duration-200 group/item"
                  >
                    <item.icon size={16} className={`${item.color} transition-transform group-hover/item:scale-110`} />
                    <span className="font-medium">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;