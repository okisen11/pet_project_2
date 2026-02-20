import { Trophy, Users, Clock, TrendingUp, CheckCircle2, Search } from "lucide-react";

/**
 * About Section Component
 * Contains detailed information about the user, achievements, skills, and current status.
 */
const About = () => {
  const achievements = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Удержание",
      value: "+15%",
      desc: "Рост Retention Rate"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Сегментация",
      value: "Clients",
      desc: "Глубокий анализ базы"
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-600" />,
      title: "Автоматизация",
      value: "-20ч",
      desc: "Экономия времени/мес"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      title: "Оптимизация",
      value: "Funnel",
      desc: "Анализ воронки"
    }
  ];

  const hardSkills = [
    { category: "SQL", skills: ["JOIN", "CTE", "Агрегации", "Метрики"], color: "blue" },
    { category: "Python", skills: ["Pandas", "NumPy", "Seaborn", "Matplotlib"], color: "purple" },
    { category: "BI & Tools", skills: ["Power BI", "Excel", "Базовая статистика"], color: "orange" }
  ];

  return (
    <section id="about" data-cmp="About" className="py-24 px-6 md:px-20 bg-slate-50 relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-white to-transparent opacity-80 rounded-bl-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* 1. Header & Description */}
        <div className="mb-16">
           <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Обо мне</h2>
           </div>
           
           <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl">
             Мой путь — это постоянное развитие в аналитике данных. Я специализируюсь на работе с 
             <span className="font-semibold text-slate-800"> SQL, Python и BI-инструментами</span>, 
             превращая сухие цифры в понятные стратегии. Моя главная цель — применять аналитику для решения 
             реальных бизнес-задач, находя точки роста и оптимизируя процессы.
           </p>
        </div>

        {/* 2. Key Achievements */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-6 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" /> Ключевые достижения
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="mb-4 bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-white group-hover:shadow-inner transition-colors">
                  {item.icon}
                </div>
                <div className="text-3xl font-black text-slate-800 mb-1">{item.value}</div>
                <div className="font-bold text-slate-700 mb-1">{item.title}</div>
                <div className="text-sm text-slate-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Hard Skills */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
           {hardSkills.map((group) => (
             <div key={group.category} className="space-y-4">
               <h4 className={`text-xl font-bold text-slate-800 border-b-2 border-${group.color}-100 pb-2 inline-block`}>
                 {group.category}
               </h4>
               <ul className="space-y-3">
                 {group.skills.map((skill) => (
                   <li key={skill} className="flex items-center gap-3 text-slate-600">
                     <CheckCircle2 className={`w-5 h-5 text-${group.color}-500 flex-shrink-0`} />
                     <span>{skill}</span>
                   </li>
                 ))}
               </ul>
             </div>
           ))}
        </div>

        {/* 4. Contact/Action Block */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-8 md:p-10 shadow-sm">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           
           <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
             <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-700 font-bold uppercase text-sm tracking-wide bg-blue-100/50 px-3 py-1 rounded-full w-fit">
                   <Search className="w-4 h-4" /> Open to Work
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Ищу Senior/Junior позицию</h3>
                <p className="text-slate-600 max-w-xl">
                   Я открыт к предложениям и готов применять свои навыки для решения реальных задач в продуктовой команде.
                </p>
             </div>
             
             <a 
               href="#contacts" // Assuming contacts section or logic exists, or just a placeholder
               className="px-8 py-3 bg-slate-900 text-white font-semibold rounded-xl shadow-lg hover:bg-slate-800 hover:scale-105 transition-all duration-300 whitespace-nowrap"
             >
               Связаться со мной
             </a>
           </div>
        </div>

      </div>
    </section>
  );
};

export default About;