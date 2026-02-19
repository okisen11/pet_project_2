import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";
import { User } from "lucide-react";

/**
 * Main Home Page
 * Assembles the portfolio website sections.
 */
const Home = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-purple-100 selection:text-purple-900 flex flex-col items-center bg-slate-50/50">
      
      {/* Max width container as per desktop specs (1440px) */}
      <div className="w-full max-w-[1440px] bg-white shadow-2xl shadow-slate-200/50 min-h-screen relative">
        <Navbar />
        
        <main className="relative z-0">
          <Hero />
          
          {/* About Section */}
          <section id="about" className="py-24 px-6 md:px-20 bg-slate-50 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-8 text-purple-600">
                <User size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
               Обо мне
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
              Я аналитик данных и разработчик, увлеченный созданием эффективных решений. 
              Мой подход сочетает в себе техническую точность <span className="text-blue-600 font-medium">SQL</span>, 
              гибкость <span className="text-purple-600 font-medium">Python</span> и 
              визуальную ясность <span className="text-orange-500 font-medium">Power BI</span>.
              Я верю в то, что данные должны рассказывать истории, а интерфейсы — быть интуитивно понятными.
            </p>
          </section>

          {/* Projects Container */}
          <div className="space-y-0">
            <ProjectSection 
                id="sql"
                type="sql"
                title="Оптимизация баз данных"
                description="Разработка сложных SQL-запросов для анализа больших объемов данных. Проектирование архитектуры БД, оптимизация производительности и обеспечение целостности данных. Этот проект демонстрирует работу с PostgreSQL и написание эффективных хранимых процедур."
            />
            
            <ProjectSection 
                id="python"
                type="python"
                title="Автоматизация с Python"
                description="Скрипты для автоматизации рутинных задач, парсинг данных и ETL-процессы. Использование Pandas и NumPy для обработки данных, а также разработка микросервисов. В этом разделе представлены примеры кода для анализа финансовых метрик."
                reverse={true}
            />
            
            <ProjectSection 
                id="powerbi"
                type="powerbi"
                title="Аналитика в Power BI"
                description="Создание интерактивных дашбордов для визуализации бизнес-KPI. Преобразование сырых данных в понятные инсайты для принятия управленческих решений. Примеры включают отчеты по продажам, маркетингу и операционной эффективности."
            />
          </div>

          {/* Footer / Contacts Anchor */}
          <footer className="py-12 bg-slate-50 border-t border-slate-100 text-center">
            <p className="text-slate-400">© 2024 Mi Portfolio. Created with React & Tailwind.</p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Home;