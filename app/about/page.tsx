import Image from "next/image";
import Navbar from "../components/navbar";
import Link from "next/link";

export default function About() {
  const personalInfo = [
    { label: "Nama", value: "Putri Maheswari" },
    { label: "Email", value: "putrimhswri893@gmail.com" },
    { label: "Telepon", value: "+62 895-0775-9765" },
    { label: "Alamat", value: "Cimahi,  Jawa Barat, Indonesia" },
    { label: "Pendidikan", value: "D3 Akuntansi - ASM Ariyanti" },
    { label: "Status", value: "Lulusan Siap Kerja" },
  ];

  const interests = [
    "Akuntansi Keuangan",
    "Perpajakan",
    "Audit Internal",
    "Analisis Data Keuangan",
    "Software Akuntansi",
    "Pengembangan Profesional",
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-blue-50 font-sans dark:from-zinc-900 dark:to-zinc-800 pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-zinc-800 dark:text-white mb-4">
              Tentang Saya
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              Profesional akuntansi yang berdedikasi dengan passion dalam menciptakan 
              sistem keuangan yang akurat dan terorganisir.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Foto Profil dan Info Pribadi */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg border border-zinc-100 dark:border-zinc-700 p-8 sticky top-24">
                <div className="text-center mb-8">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto mb-6">
                    <Image
                      src="/foto_putri.jpg"
                      alt="Putri Maheswari"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-zinc-800 dark:text-white mb-2">
                    Putri Maheswari
                  </h2>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    Lulusan D3 Akuntansi
                  </p>
                </div>

                {/* Info Pribadi */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-zinc-800 dark:text-white mb-4">
                    Informasi Pribadi
                  </h3>
                  {personalInfo.map((info, index) => (
                    <div key={index} className="flex justify-between border-b border-zinc-200 dark:border-zinc-700 pb-2">
                      <span className="text-zinc-600 dark:text-zinc-400 font-medium">
                        {info.label}
                      </span>
                      <span className="text-zinc-800 dark:text-zinc-200 text-right">
                        {info.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tombol Download CV */}
                <div className="mt-8">
                  <Link
                    href="/CV_PUTRI"
                    download="CV_Putri_Maheswari.pdf"
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-download">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Unduh CV
                  </Link>
                </div>
              </div>
            </div>

            {/* Konten Tentang Saya */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Profil Singkat */}
              <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg border border-zinc-100 dark:border-zinc-700 p-8">
                <h2 className="text-2xl font-bold text-zinc-800 dark:text-white mb-6">
                  Profil Singkat
                </h2>
                <div className="space-y-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  <p>
                    Saya adalah lulusan D3 Akuntansi dari ASM Ariyanti dengan pemahaman 
                    mendalam tentang prinsip-prinsip akuntansi dan keuangan. Selama masa 
                    pendidikan, saya telah mengembangkan keterampilan dalam pembukuan, 
                    penyusunan laporan keuangan, perpajakan, dan audit.
                  </p>
                  <p>
                    Saya memiliki passion dalam menciptakan sistem pencatatan keuangan 
                    yang akurat dan terorganisir. Kemampuan analitis yang kuat memungkinkan 
                    saya untuk mengidentifikasi pola dalam data keuangan dan memberikan 
                    wawasan yang berharga untuk pengambilan keputusan bisnis.
                  </p>
                  <p>
                    Saat ini, saya sedang mencari kesempatan untuk berkontribusi dalam 
                    bidang akuntansi dan keuangan, di mana saya dapat menerapkan pengetahuan 
                    dan keterampilan yang telah saya peroleh selama pendidikan.
                  </p>
                </div>
              </div>

              {/* Minat dan Ketertarikan */}
              <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg border border-zinc-100 dark:border-zinc-700 p-8">
                <h2 className="text-2xl font-bold text-zinc-800 dark:text-white mb-6">
                  Bidang Minat
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {interests.map((interest, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                        {interest}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visi dan Misi */}
              <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg border border-zinc-100 dark:border-zinc-700 p-8">
                <h2 className="text-2xl font-bold text-zinc-800 dark:text-white mb-6">
                  Visi & Misi
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-target mr-3">
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="6"></circle>
                        <circle cx="12" cy="12" r="2"></circle>
                      </svg>
                      Visi
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      Menjadi profesional akuntansi yang kompeten dan dapat diandalkan 
                      dalam menyediakan informasi keuangan yang akurat untuk mendukung 
                      pengambilan keputusan strategis perusahaan.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-flag mr-3">
                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                        <line x1="4" y1="22" x2="4" y2="15"></line>
                      </svg>
                      Misi
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      Terus mengembangkan keterampilan dalam bidang akuntansi dan keuangan, 
                      menerapkan prinsip-prinsip etika profesional, dan berkontribusi 
                      positif bagi perkembangan organisasi.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tombol Kembali ke Beranda */}
              <div className="text-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-800 dark:bg-zinc-700 text-white hover:bg-zinc-700 dark:hover:bg-zinc-600 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                  Kembali ke Beranda
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}