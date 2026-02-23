import { Link, Outlet } from "react-router-dom";


function Header() {
  return (
<div className="bg-black">
  <nav className="navbar">
    <ul className=" flex tracking-[0.4em] font-extrabold font-cocogothic text-golden_old p-5 justify-around text-xs md:text-sm uppercase bg-black/60 backdrop-blur-sm">
      <li className=" hover:text-brown_grey/80 transition duration-300"><Link to="/">Home</Link></li>
      <li className=" hover:text-brown_grey/80 transition duration-300"><Link to="/movies">Movies</Link></li>
      <li className=" hover:text-brown_grey/80 transition duration-300"><Link to="/characters">Characters</Link></li>
      <li className=" hover:text-brown_grey/80 transition duration-300"><Link to="/Games">Games</Link></li>
    </ul>
    </nav>
</div>
  );
}

export default Header;