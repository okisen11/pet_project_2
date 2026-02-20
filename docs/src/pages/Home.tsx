import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectSection from "@/components/ProjectSection";

/**
 * Main Home Page
 * Assembles the portfolio website sections.
 */
const Home = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-purple-100 selection:text-purple-900 flex flex-col items-center bg-slate-100">
      
      {/* Max width container as per desktop specs (1440px) */}
      <div className="w-full max-w-[1440px] bg-white text-slate-900 shadow-2xl shadow-slate-200/50 min-h-screen relative mx-auto">
        <Navbar />
        
        <main className="relative z-0">
          <Hero />
          
          {/* New Detailed About Section */}
          <About />

          {/* Projects Container */}
          <div className="space-y-0 bg-white">
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
          <footer id="contacts" className="py-12 bg-slate-50 border-t border-slate-100 text-center">
            <p className="text-slate-400">© 2024 Mi Portfolio. Created with React & Tailwind.</p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Home;