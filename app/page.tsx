import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  const skills = [
    { name: "Microsoft Excel", level: 90, category: "Software" },
    { name: "Microsoft Word", level: 90, category: "Software" },
    { name: "Akuntansi Keuangan", level: 85, category: "Akuntansi" },
    { name: "Perpajakan", level: 80, category: "Akuntansi" },
    { name: "Audit Internal", level: 75, category: "Akuntansi" },
    { name: "MYOB Accounting", level: 70, category: "Software" },
    { name: "Analisis Laporan Keuangan", level: 85, category: "Analisis" },
    { name: "Budgeting & Forecasting", level: 75, category: "Analisis" },
  ];

  const getSkillColor = (level: number) => {
    if (level >= 80) return "bg-green-500";
    if (level >= 70) return "bg-blue-500";
    if (level >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-50 to-blue-50 font-sans dark:from-zinc-900 dark:to-zinc-800">
        <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-20 px-8 sm:px-16">
          
          {/* Header dengan foto profil */}
          <section id="home" className="flex flex-col items-center text-center mb-16 pt-16">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
              <Image
                src="/foto_putri.jpg"
                alt="Putri Maheswari"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <h1 className="text-4xl font-bold text-zinc-800 dark:text-white mb-2">
              Putri Maheswari
            </h1>
            <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-4">
              Lulusan D3 Akuntansi ASM Ariyanti
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl">
              Profesional akuntansi yang berdedikasi dengan pemahaman mendalam tentang prinsip-prinsip akuntansi 
              dan kemampuan analitis yang kuat untuk mendukung pengambilan keputusan bisnis yang tepat.
            </p>
          </section>

          {/* Bagian Pendidikan - SEKARANG DI ATAS */}
          <section id="education" className="w-full mb-16">
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-white mb-8 text-center">Pendidikan</h2>
            <div className="bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-md border border-zinc-100 dark:border-zinc-700">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-zinc-800 dark:text-white">D3 Akuntansi</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400">ASM Ariyanti</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                    Lulus
                  </span>
                </div>
              </div>
              <p className="mt-4 text-zinc-600 dark:text-zinc-300">
                Menyelesaikan pendidikan diploma dengan fokus pada akuntansi keuangan, perpajakan, audit, 
                dan sistem informasi akuntansi. Memiliki pengalaman praktikum dalam penyusunan laporan keuangan 
                dan analisis data keuangan.
              </p>
            </div>
          </section>

          {/* Bagian Keahlian - SEKARANG DI BAWAH PENDIDIKAN */}
          <section id="skills" className="w-full mb-16">
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-white mb-8 text-center">Keahlian</h2>
            
            {/* Software Skills */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-zinc-700 dark:text-zinc-300 mb-6 flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                Software & Teknologi
              </h3>
              <div className="space-y-6">
                {skills
                  .filter(skill => skill.category === "Software")
                  .map((skill, index) => (
                    <div key={index} className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md border border-zinc-100 dark:border-zinc-700">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-zinc-800 dark:text-zinc-200">{skill.name}</span>
                        <span className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full transition-all duration-1000 ease-out ${getSkillColor(skill.level)}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Accounting Skills */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-zinc-700 dark:text-zinc-300 mb-6 flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                Keahlian Akuntansi
              </h3>
              <div className="space-y-6">
                {skills
                  .filter(skill => skill.category === "Akuntansi")
                  .map((skill, index) => (
                    <div key={index} className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md border border-zinc-100 dark:border-zinc-700">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-zinc-800 dark:text-zinc-200">{skill.name}</span>
                        <span className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full transition-all duration-1000 ease-out ${getSkillColor(skill.level)}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Analytical Skills */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-zinc-700 dark:text-zinc-300 mb-6 flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                Keahlian Analitis
              </h3>
              <div className="space-y-6">
                {skills
                  .filter(skill => skill.category === "Analisis")
                  .map((skill, index) => (
                    <div key={index} className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md border border-zinc-100 dark:border-zinc-700">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-zinc-800 dark:text-zinc-200">{skill.name}</span>
                        <span className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full transition-all duration-1000 ease-out ${getSkillColor(skill.level)}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Legend */}
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md border border-zinc-100 dark:border-zinc-700">
              <h4 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-4">Tingkat Keahlian</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-zinc-600 dark:text-zinc-400">Ahli (80-100%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-zinc-600 dark:text-zinc-400">Lanjutan (70-79%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="text-zinc-600 dark:text-zinc-400">Menengah (60-69%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-zinc-600 dark:text-zinc-400">Pemula (&lt;60%)</span>
                </div>
              </div>
            </div>
          </section>

          {/* Bagian Kontak */}
          <section id="contact" className="w-full mb-16">
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-white mb-8 text-center">Hubungi Saya</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 text-white transition-colors hover:bg-blue-700 md:w-auto"
                href="mailto:putri.maheswari@example.com"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Email
              </a>
              <a
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-solid border-zinc-300 dark:border-zinc-600 px-6 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 md:w-auto"
                href="https://linkedin.com/in/putri-maheswari"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                LinkedIn
              </a>
              <a
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-solid border-zinc-300 dark:border-zinc-600 px-6 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 md:w-auto"
                href="/CV_PUTRI"
                download="CV_Putri_Maheswari.pdf"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                Unduh CV
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center text-zinc-500 dark:text-zinc-400 text-sm">
            <p>© {new Date().getFullYear()} Putri Maheswari. All rights reserved.</p>
          </footer>
        </main>
      </div>
    </>
  );
}