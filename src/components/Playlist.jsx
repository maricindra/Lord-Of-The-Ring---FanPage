import { useEffect, useRef } from 'react';

function Playlist() {
  // 1. O useRef deve ficar aqui fora do useEffect
  const audioRef = useRef(null);

  useEffect(() => {

    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        // O navegador bloqueia som automático sem interação prévia do usuário
        console.log("Autoplay bloqueado. O usuário precisa clicar em algo primeiro.");
      });
    }
  }, []);
  return (
<div className="max-w-6xl mx-auto py-10">
    <h1 className="text-golden_old font-cocogothic tracking-[0.4em] uppercase">Musics</h1>
    
    <audio 
    ref={audioRef}
    controls
    autoPlay
     className="w-full h-10 rounded-lg filter invert brightness-125">
        <source src="./May_it_be_Enya.mp3" type="audio/mpeg" />
    </audio>
</div>
  );
}

export default Playlist;