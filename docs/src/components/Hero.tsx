import { ArrowDown } from "lucide-react";

/**
 * Hero Section
 * Displays the main introduction with a circular photo and name.
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
      className="min-h-screen flex flex-col items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse delay-700"></div>
      
      <div className="z-10 flex flex-col items-center text-center px-4">
        {/* Profile Image Container with Gradient Border */}
        <div className="relative mb-8 group">
          <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500 via-purple-500 to-orange-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop" 
              alt="Ми" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-4">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
            Ми
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 max-w-lg mb-8 font-light">
          Data Analyst & Developer
        </p>

        {/* Decorative elements */}
        <div className="flex gap-2 mb-12">
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium border border-blue-100">SQL</span>
            <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm font-medium border border-purple-100">Python</span>
            <span className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm font-medium border border-orange-100">Power BI</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-10 animate-bounce p-3 bg-white shadow-lg rounded-full text-slate-400 hover:text-blue-600 transition-colors cursor-pointer"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;