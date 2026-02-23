import React from 'react';
import Video_Page from '../components/Home_elements/Video_Background';
import Video_Texts from '../components/Home_elements/Video_Texts';
import Squad_topics from '../components/Home_elements/Squad_topics';


function Home() {
  return (
  <main className="w-full bg-black relative">
    <section className=" relative h-screen w-full overflow-hidden">
      <Video_Page/>
      <div className="absolute inset-0 bg-black/55 z-10">
      <Video_Texts/>
      </div>
    </section>

{/* New Section, after the video apresentation */}
  <section className="relative z-30 bg-black py-20 px-10 text-black">
    <Squad_topics/>
    </section>
    </main>
 );
}
export default Home;