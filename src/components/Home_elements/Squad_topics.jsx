function Squad_topics() {
  const topics = [
    {
      id: 1,
      icon: (
        <svg className="w-28 h-28" viewBox="0 0 24 24" fill="none" stroke="#4f6146" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 22V18" />
          <path d="M14 22V18" />
          <path d="M12 18a5 5 0 0 0 5-5V3H7v10a5 5 0 0 0 5 5Z" />
          <path d="m12 7 1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1Z" />
        </svg>
      ),
      text: "This legend won in all of eleven categories of indication",
    },
    {
      id: 2,
      icon: (
        <a href="https://www.youtube.com/watch?v=yqKThTGi6I8&list=PL00F32DF9392A2667" target="_blank" rel="noopener noreferrer ">
          <svg className="w-32 h-32" viewBox="0 0 128 128" fill="none" stroke="#4f6146"  strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M38 24V72M38 24C50 24 55 35 45 40" fill="none" />
            <circle cx="26" cy="72" r="12" />
            <path d="M70 40V88 M115 30V78 M70 40L115 30" fill="none" />
            <circle cx="58" cy="88" r="12" />
            <circle cx="103" cy="78" r="12" />
        </svg>
        </a>
      ),
      text :"The best Soundtrack",
    },
    {
      id: 3,
      icon: (
        <svg className="w-28 h-28" viewBox="0 0 128 128" fill="none" stroke="#4f6146" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M117 27c0 48-21 64-32 64s-32-16-32-64c0-11 11-16 32-16s32 5 32 16z" />
          <path d="M93 53c-4 4-11 4-15 0" /> {/* Sorriso */}
          <circle cx="75" cy="35" r="1.5" fill="currentColor" /> {/* Olho Esquerdo */}
          <circle cx="95" cy="35" r="1.5" fill="currentColor" /> {/* Olho Direito */}
          
          {/* Máscara de Fundo (Esquerda) */}
          <path d="M54 38c-6 1-13 4-22 9-19 11-25 21-20 30 24 41 51 45 60 40 5-3 10-11 10-25" />
          <path d="M49 88c2-6 7-9 13-7" /> {/* Boca Triste */}
          <circle cx="35" cy="60" r="1.5" fill="currentColor" /> {/* Olho Esquerdo */}
          <circle cx="50" cy="55" r="1.5" fill="currentColor" /> {/* Olho Direito */}
        </svg>
      ),
      text: "The best Cinematography, Visual Effects and Makeup",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-10 text-center md:flex-row gap-4  ">
      <div className="grid grid-col md:flex-row md:grid-cols-3 gap-4 ">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="flex flex-col items-center justify-center p-12 border border-white/30 aspect-square transition-all duration-300 hover:border-green03 group text-green03"
          >
            <div className=" mb-8 opacity-70 group-hover:opacity-100 transition-opacity">
              {topic.icon}
            </div>

            <p className=" font-cocogothic text-center text-lg md:text-xl leading-relaxed uppercase tracking-wider">
              {topic.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Squad_topics;