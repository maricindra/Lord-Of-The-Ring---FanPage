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
  <section className="relative z-30 bg-black py-20 px-10 ">
    <Squad_topics/>

      <h1 className="text-center text-brown_grey mb-10 font-parfumerie text-8xl tracking-[0.2em]">Resume</h1>
      <div className="flex-1 flex items-center mx-auto py-10 text-center md:flex-row gap-4 uppercase tracking-[0.3em] text-green03">
      <p className="text-center text-sm text-green03 mt-10">
      The Lord of the Rings is an epic adventure film trilogy directed by Peter Jackson. 
      The three films—titled The Fellowship of the Ring, The Two Towers, and The Return 
      of the King—were released consecutively between December 2001 and 2003. The 
      trilogy is based on the epic novel of the same name by J. R. R. Tolkien and was 
      adapted for the screen by Jackson, Fran Walsh, and Philippa Boyens. The story is 
      set in the fictional world of Middle-earth and follows the journey of Frodo Baggins
      and the Fellowship of the Ring as they attempt to destroy the One Ring, forged by 
      Sauron. A large cast was hired for the three films, including Elijah Wood, Ian 
      McKellen, Viggo Mortensen, Sean Astin, Orlando Bloom, Liv Tyler, John Rhys-Davies,
      Sean Bean, Billy Boyd, Dominic Monaghan, Andy Serkis, Cate Blanchett, Christopher Lee, 
      Hugo Weaving, Ian Holm, John Noble, Bernard Hill, David Wenham, Miranda Otto, Karl Urban,
      and Brad Dourif.
      </p></div>
    </section>
    </main>
 );
}
export default Home;