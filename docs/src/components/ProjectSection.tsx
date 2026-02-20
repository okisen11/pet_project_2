import { ArrowRight, Database, Code, BarChart } from "lucide-react";

interface ProjectSectionProps {
  id: string;
  title: string;
  description: string;
  type: "sql" | "python" | "powerbi";
  reverse?: boolean;
}

/**
 * Reusable Project Section Component
 * Layouts content for specific project categories (SQL, Python, etc.)
 */
const ProjectSection = ({ id, title, description, type, reverse = false }: ProjectSectionProps) => { // Removed isShow check
  const getIcon = () => {
    switch (type) {
      case "sql": return <Database className="text-blue-500" size={32} />;
      case "python": return <Code className="text-purple-500" size={32} />;
      case "powerbi": return <BarChart className="text-orange-500" size={32} />;
    }
  };

  const getGradient = () => {
    switch (type) {
      case "sql": return "from-blue-500 to-cyan-400";
      case "python": return "from-purple-500 to-pink-500";
      case "powerbi": return "from-orange-500 to-yellow-500";
    }
  };

  return (
    <section 
      id={id} 
      data-cmp="ProjectSection"
      className="py-24 px-6 relative"
    >
      <div className={`flex flex-col md:flex-row gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Visual Content (Card) */}
        <div className="flex-1 w-full">
          <div className="relative group perspective-1000">
            {/* Glow Effect behind card */}
            <div className={`absolute -inset-2 bg-gradient-to-r ${getGradient()} rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500`}></div>
            
            <div className="relative bg-white border border-slate-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-80 flex items-center justify-center overflow-hidden">
               {/* Decorative Background inside card */}
               <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${getGradient()} opacity-10 rounded-bl-full`}></div>
               
               <div className="text-center z-10">
                 <div className="mb-6 mx-auto w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center shadow-inner">
                    {getIcon()}
                 </div>
                 <h3 className="text-2xl font-bold text-slate-800 mb-2">{title} Demo</h3>
                 <p className="text-sm text-slate-500">Interactive Preview</p>
               </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-3">
             <div className={`p-2 rounded-lg bg-white shadow-sm border border-slate-100`}>
                {getIcon()}
             </div>
             <span className="font-bold text-slate-400 uppercase tracking-wider text-sm">{type.toUpperCase()}</span>
          </div>
          
          <h2 className="text-4xl font-bold text-slate-900">{title}</h2>
          <p className="text-lg text-slate-600 leading-relaxed text-justify">
            {description}
          </p>
          
          <ul className="space-y-3 pt-4">
             {[1, 2, 3].map((i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600 bg-slate-50 p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getGradient()}`}></div>
                    Example Feature or Key Metric {i}
                </li>
             ))}
          </ul>

          <div className="pt-4">
             <button className="flex items-center gap-2 font-semibold text-slate-800 hover:gap-4 transition-all group">
                Посмотреть кейс <ArrowRight size={20} className={`text-slate-400 group-hover:text-${type === 'powerbi' ? 'orange' : type === 'sql' ? 'blue' : 'purple'}-500`} />
             </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectSection;