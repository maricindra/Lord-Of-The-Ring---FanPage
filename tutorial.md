
1) First we installed the template react and set up this:
npm create vite@latest lord_fans
cd lord_fans



-----------------------TAILWIND CSS -------- SETTINGS TO USE -----------------------------
2) To set up the tailwind ?


a) Tailwind V4 Professional installation - RECOOMENDED
Bash command: npm install tailwindcss@next @tailwindcss/vite@next

🐟--step 1 -- Go to the file: vite.config.js and put:
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

🐟--step 2 -- Go to the file Index.css and put:
@import "tailwindcss";

🐟-- step 3 -- Test if is running - Go to the file app.jsx and put:

<div className="h-screen flex items-center justify-center bg-black">
      <div className="p-10 bg-indigo-600 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500">
        <h1 className="text-3xl font-bold text-white underline decoration-rose-500">
          Tailwind v4 está Ativo!
        </h1>
        <p className="text-indigo-200 mt-2">
          Se você vê um card roxo e este texto sublinhado em rosa, funcionou.
        </p>
      </div>
    </div>


b) How could make the tailwind works in PlayCDN? ( IN SCPRIT VERSION OF HTML just use this for tests)
and ( PROTOTYPES VERSIONS / functional draft= rascunho funcional )
-> Copy <script src="https://cdn.tailwindcss.com"></script> and paste in file 'index.html' into <head> </head>.
Example:
================================================================
<head>
......
<script src="https://cdn.tailwindcss.com"></script>

</head>




=============================== FILES FOLDERS AND STRUCTURE ==================================

3) Into the SRC field make the folders: Components and Pages:
Pages:
Home.jsx
Movies.jsx
Characters.jsx
Games.jsx

components:
  header.jsx
  footer.jsx

  Home_elements
    -> video_background.jsx
    -> video_texts.jsx
    -> button.jsx
    -> squad_topics

  Movies_elements
    -> Swipe_animation.jsx  
      -> Introduction
      -> Rings_of_power
      -> Hobbits
      -> Lord of the Rings

  characters_elements
  Games_elements



🔎OBSERVATION:
A JSX file to permit use Html + Javascript in the same file, but you are using tailwind+postcss so you can use css too.

a) so where is the part of html?
CSS and HTML use after of 'return{}'

b) so where is the part of javascript?
Logical before of 'return'{}




====================================== ROUTES AND LAYOUT =================================

4) How could make a Route?

a) write in the terminal: 
npm install react-router-dom 

b) In the file App.jsx do :
=================================================================
import { RouterProvider, Routes, Route, BrowserRouter, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Movies from './pages/movies';
import Characters from './pages/characters';
import Games from './pages/games';
import { Navigate } from 'react-router-dom';

const router = createBrowserRouter([

  {path:"/", element: <Home/>},
  {path: "/home", element: <Navigate to="/" replace />},
  
  {path:"/movies", element: <Movies/>},

  {path:"/characters", element: <Characters/>},

  {path:"/Games", element: <Games/>},

  {path: "*", element: <h1>Página não encontrada</h1>},
    ])

function App() {
  return <RouterProvider router={router} />
}

export default App;



5) How to do a structure to your page ( Layout )?

import { RouterProvider, Routes, Route, Outlet, BrowserRouter, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Characters from './pages/Characters';
import Games from './pages/Games';

import Footer from './components/footer';
import Header from './components/header';
import { Navigate } from 'react-router-dom';
import { Children } from 'react';


// Making a Functional using a 'Arrow Function' - in this way we can make a new function without parameters
const Layout = () => {
  return (
    <div className="bg-black flex flex-col min-h-screen">
      <Header/>
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

// Const created in arrays keeping the routes about the pages of the aplication.
const router = createBrowserRouter([
{path: "/",
  
    element: <Layout />, // O Layout envolve tudo
    children: [ 
      { path: "/", element: <Home /> },
      { path: "/home", element: <Navigate to="/" replace /> },
      { path: "/movies", element: <Movies /> },
      { path: "/characters", element: <Characters /> },
      { path: "/Games", element: <Games /> },
      { path: "*", element: <h1>Página não encontrada</h1> },
    ]
  }
]);

function App() {
  return <RouterProvider router={router}   
  />
}   export default App;

🔎 In this way you are asking for header and footer should be statics and the outlet will change
Using the path routes.



6) Testing if the routes in pages works:
file home.jsx into 'return{}':

<div className="bg-yellow-200 p-10"> 
      <h1 className="text-3xl font-bold font-coco">TESTE: Home carregada!</h1>
    </div>


------------------------------VIDEO BACKGROUND REACT+ TAILWIND CSS---------------------------

7) Prepare your page: Home 

a) How to put a video in react:
https://www.youtube.com/watch?v=Pzx0jkIHRfY


import React from 'react';
// you don't need use the import cause is a public folder.
// but if your video is in assents you need to use the import. 

function Home() {
  return (
<div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Vídeo de Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
      >
        <source src="/lordring_1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (Opcional - para escurecer o vídeo e dar leitura ao texto) */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Conteúdo da Página */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Bem-vindo à Home</h1>
        <p className="text-lg md:text-2xl max-w-2xl">

        </p>
      </div>
    </div>
  )
};  export default Home;


8) delete all of the file: Index.css ( in this way the video could be full)

9) Go to the App.jsx: you need to make the component Layout of your page about your structure:
const Layout = () => {
return (<div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* O Outlet é onde as páginas (Home, Movies, etc) vão "encaixar" */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

🔎OBSERVATIONS:
const Layout = () => {}     VS      const router = createBrowserRouter([])

a)const Layout = () => {} 
To make a Functional Component to storage other structure components.

b)const router = createBrowserRouter([]):
To make motors to work in the framework, example Routes.




====================== HOW TO USE A NEW FONT IN TAILWINDCSS?   ========================

) HOW TO USE A NEW FONT IN PROFESSIONAL WAY FOR YOU PRODUCE APLICATION TAILWINDV4?



10) How to implement a new Font using tailwind in the css (CDN VERSION SCRIPT) ?
IN the file index.css:

@font-face {
  font-family: 'ParfumerieScript';
  src: url('./assets/fonts/ParfumerieScriptText.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}


In the File index.Html (Cause you are using PLAYCDN) YOUR <HEAD> NEED TO BE LIKE THIS:
<head>
  <!--  Tailwind increment settings-->
  <script src="https://cdn.tailwindcss.com"></script>
  <!--  Tailwind increment settings-->
  <script>
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          //making the name of font parfumeria
          parfumerie: ['ParfumerieScript', 'cursive'],
        },
        colors: {
          // Adicione suas cores aqui para não precisar de CSS manual
          'golden_old': '#91713c',
          'brown_grey': '#623e2a',
        }
      }
    }
  }
</script></head>

🏸BUT HOW I CALL THIS FONT?
Like this: font-parfumerie ( like in the script)



11) How to Implement a new color?
You dont need to use the index.css file, just need to increment this in the script of the file index.html.
In this Way:
<head>
  <!--  Tailwind increment settings-->
  <script src="https://cdn.tailwindcss.com"></script>
  <!--  Tailwind increment settings-->
  <script>
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          //making the name of font parfumeria
          parfumerie: ['ParfumerieScript', 'cursive'],
        },
        colors: {
          // TO ADD MORE COLORS
          'golden_old': '#91713c',
          'brown_grey': '#623e2a',
        }
      }
    }
  }
</script></head>








12) TAILWIND POSITIONS AND Atributtes of className:


🧧Positions 
mb-4 = Margin botton in the lv4 | ( margin down)
mt-2 = Margin top in the lvl 2  | ( space in high of the element)
mr-3 = Margin Right in the lvl 3| ( space in Right of the element)
ml-3 = Margin left in the lvl 3| ( space in left of the element)


🧧mx/my   vs   gap-x/gap-x   vs   px/py:

p= padding
m= margin
gap = Father padding ( if you use this in son element it wont works)

gap-8   = Space between itens lv 8 |Use this in Father elements ( in vertical and horizontal)
gap-x-3 = Space between itens lv 8 | Use This in Father elements ( horizontal sides)
gap-y-3 = Space between itens lv 8 | Use this in Father elements ( vertical sides)
px-8    = Make a space into the element lvl 8  | Use this in son elements ( Horizontal sides)
py-7     = Make a space into the element lvl 7 | Use this in son elements ( vertical sides)
mx/my  = Make a space in the outside Use this in son elements son

mx-2: Margin in the axis X in the lvl 2, using left and right side in the same way ( horizontal way | axis = eixo ) 
my-3: Margin in the axis Y in the lvl 3, using bottom and top side in the same way ( vertical way   | axis = eixo )


🧧 WITH FATHER ELEMENT + Gap ( I CHOOSE TO USE GAP)
<DIV  Classname="gap-2">
   1- Margin
     2- border 
       3- Padding
         4 - Element 1
            5- padding
              6- border
               7- Margin
  0 - Gap --------------------lv 2 end
   1- Margin
     2- border 
       3- Padding
         4 - Element 2
            5- padding
              6- border
               7- Margin

🧧Without Father element:
   1- Margin
     2- border 
       3- Padding
         4 - Element 1
            5- padding
              6- border
               7- Margin
   1- Margin
     2- border 
       3- Padding
         4 - Element 2
            5- padding
              6- border
               7- Margin


              

👁‍🗨DISPLAYS:



📱SCREENS:
HOW TO USE 'BREAKPOINTS' TO GIVE RESPONSIVE DESIGN?
0px: Cellphones retrat views
sm:  Big cellphones and small tablets
md:  Tablets view horizontal
lg:  Laptop/ Desktops
xl:  Big Monitors
2xl: Telas Ultra-Wide or TVs


What could i use with breakpoints?
Fonts/ text: 
colours
visibility
layout



Positions:
Justify-center:
Justify-around:



Add fonts in tailwind: font-font_name ex: font-parfumeria
font-size-8
text-xs =  For design responvice cause dont will break with the small devices
md:text-sm = turn the write permanent same in big screens.
uppercase = turn uppercase the letter ( letras em maiusculo )
















13) How could i prepare the structure of my aplication ?

// Making a Functional using a 'Arrow Function' - in this way we can make a new function without parameters
const Layout = () => {
return (<div className="flex flex-col min-h-screen">
      <Header/>
        {/* O Outlet é onde as páginas (Home, Movies, etc) vão "encaixar" */}
        <Outlet />
      <Footer />
    </div>
  );
};


14) How could i use gradient in my Text?







15) HOW TO USE SWIPE ANIMATIONS?





16) HOW TO USE SVG in tailwind?
A ) You can use SVG Pictures = INDEX HTML + SVG PICTURE, MAKING HTTP REQUISITION, SEARCHING THE FILE IN THE SERVER
B ) You ca use SVG CODES to draw vetors = 

before to use svg files, we need to clear here: [SVGOMG](https://svgomg.net/)

🛠♻ SVG PICTURE = Estatics Logotypes, big ilustractions and elements repeated, it is more clear for your code
<img 
  src="logo.svg" 
  alt="Logo" 
  class="w-32 h-auto opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition-all"
/>

🛠♻ SVG CODE = Use this when you have to change the color and when you have a user action it is more soft.
<svg 
  class="w-6 h-6 text-blue-500 hover:text-red-600 transition-colors duration-300 fill-current" 
  viewBox="0 0 24 24" 
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
</svg>


- viewbox= if you want
- fill-current=
- text-blue-500=
- hover:text-red-600
- w-6 h-6 =



viewbox= "min-x min-y largura altura" = full in the center
ex: viewbox = 0. 0. 24. 24






