import { Linkedin, Youtube, Code, Music, Sparkles } from 'lucide-react';

export default function Home() {
  return (
     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-30">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 2 + 1 + 'px',
                height: Math.random() * 2 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 10 + 10}s infinite ${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="mb-8 relative inline-block">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-6xl font-bold text-white shadow-2xl animate-pulse-slow">
                KU
              </div>
              <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-yellow-300 animate-spin-slow" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              Kittitat Upaphong
            </h1>

            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-purple-300">
                <Code className="w-6 h-6" />
                <span className="text-xl">Programmer</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-purple-400"></div>
              <div className="flex items-center gap-2 text-pink-300">
                <Music className="w-6 h-6" />
                <span className="text-xl">Pianist</span>
              </div>
            </div>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Crafting elegant code and beautiful melodies.
              Where technology meets artistry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full">
                <Code className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-3">Programming</h3>
                <p className="text-gray-300 leading-relaxed">
                  Building innovative solutions with clean, efficient code.
                  Passionate about creating seamless user experiences and solving complex problems.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-pink-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full">
                <Music className="w-12 h-12 text-pink-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-3">Piano</h3>
                <p className="text-gray-300 leading-relaxed">
                  Expressing emotions through music.
                  From classical masterpieces to contemporary compositions, bringing melodies to life.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Connect With Me</h2>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/kittitat-upaphong/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-xl px-8 py-4 border border-white/20 hover:border-blue-400/50 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <Linkedin className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium">LinkedIn</span>
              </a>

              <a
                href="https://www.youtube.com/@tatouch5973"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-xl px-8 py-4 border border-white/20 hover:border-red-400/50 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <Youtube className="w-6 h-6 text-red-400 group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium">YouTube</span>
              </a>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl px-8 py-6 border border-white/20">
              <p className="text-gray-300 text-lg">
                "The code is poetry, the piano is my voice"
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </div>
  );
}
