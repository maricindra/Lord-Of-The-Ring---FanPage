function Squad_topics() {
  const topics = [
    {
      id: 1,
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
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
      // Se você quer que o ícone seja um link, mantenha assim:
      icon: (
        <a href="https://www.youtube.com/watch?v=yqKThTGi6I8&list=PL00F32DF9392A2667" target="_blank" rel="noopener noreferrer">
          <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        </a>
      ),
      text: "The best Soundtrack"
    },
    {
      id: 3,
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 11h.01"/>
          <path d="M14 6h.01"/><path d="M18 6h.01"/>
          <path d="M6.5 13.1h.01"/>
          <path d="M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3"/>
          <path d="M17.4 9.9c-.8.8-2 .8-2.8 0"/>
          <path d="M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"/>
          <path d="M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"/>
        </svg>
      ),
      text: "The best Cinematography, Visual Effects and Makeup",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="flex flex-col items-center justify-center p-12 border border-white/30 aspect-square transition-all duration-300 hover:border-golden_old group"
          >
            <div className="text-golden_old mb-8 opacity-70 group-hover:opacity-100 transition-opacity">
              {topic.icon}
            </div>

            <p className="text-golden_old font-cocogothic text-center text-lg md:text-xl leading-relaxed uppercase tracking-wider">
              {topic.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Squad_topics;