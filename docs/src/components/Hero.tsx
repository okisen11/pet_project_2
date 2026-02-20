import { ArrowDown, Database, BarChart2 } from "lucide-react";

/**
 * Hero Section
 * Displays the main introduction with a circular photo and name.
 * Updated with specific "splash" and "glow" effects on hover.
 */
const Hero = () => {
    const scrollToContent = () => {
        const element = document.getElementById("about");
        if (element) {
           const offset = 80;
           const bodyRect = document.body.getBoundingClientRect().top;
           const elementRect = element.getBoundingClientRect().top;
           const elementPosition = elementRect - bodyRect;
           const offsetPosition = elementPosition - offset;
           
           window.scrollTo({
             top: offsetPosition,
             behavior: "smooth"
           });
        }
    }

  return (
    <section 
      data-cmp="Hero"
      className="min-h-screen flex flex-col items-center justify-center pt-20 relative overflow-hidden bg-white"
    >
      {/* Background Decor - Subtle static gradients to not distract from the splash */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="z-10 flex flex-col items-center text-center px-4 relative">
        
        {/* Profile Image Container with Splash Effect */}
        <div className="relative mb-10 group cursor-pointer">
          
          {/* Splash Effects - Absolute positioned layers behind the image */}
          {/* Layer 1: Pink/Purple Splash */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-60 md:h-60 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-60 scale-50 group-hover:scale-125 transition-all duration-500 ease-out blur-xl"></div>
          
          {/* Layer 2: Blue/Cyan Splash with rotation */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-60 md:h-60 bg-gradient-to-bl from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-60 scale-50 group-hover:scale-150 rotate-45 group-hover:rotate-90 transition-all duration-700 ease-out blur-lg delay-75"></div>
          
          {/* Layer 3: Orange Accent Splash */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-56 md:h-56 bg-orange-400 rounded-full opacity-0 group-hover:opacity-40 scale-50 group-hover:scale-110 -translate-y-4 group-hover:translate-y-4 transition-all duration-500 ease-out blur-2xl"></div>

          {/* Main Image Container */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:shadow-purple-500/20 z-10 bg-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop" 
              alt="Миша Рожков" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          
          {/* Floating Icons that appear on hover */}
          <div className="absolute -right-4 top-0 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-100">
             <Database className="text-blue-500 w-5 h-5" />
          </div>
          <div className="absolute -left-4 bottom-4 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-200">
             <BarChart2 className="text-orange-500 w-5 h-5" />
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 text-slate-800">
          Миша <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Рожков</span>
        </h1>
        
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xl md:text-2xl text-slate-600 font-light mb-8">
          <span className="font-medium text-slate-800">Аналитик данных</span>
          <span className="hidden md:inline w-1.5 h-1.5 rounded-full bg-slate-300"></span>
          <span className="text-slate-500">Продуктовый аналитик</span>
        </div>

        {/* Decorative elements / Tech Stack Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
            <span className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-100 shadow-sm">SQL</span>
            <span className="px-4 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm font-semibold border border-purple-100 shadow-sm">Python</span>
            <span className="px-4 py-1.5 bg-orange-50 text-orange-700 rounded-full text-sm font-semibold border border-orange-100 shadow-sm">Power BI</span>
            <span className="px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-semibold border border-green-100 shadow-sm">Excel</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-10 animate-bounce p-3 bg-white shadow-lg shadow-slate-200/50 rounded-full text-slate-400 hover:text-blue-600 transition-colors cursor-pointer border border-slate-50"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;