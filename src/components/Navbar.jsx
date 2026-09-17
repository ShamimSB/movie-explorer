import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 flex justify-between items-center px-8 py-4 bg-gray-900 w-full text-white">
      <Link to="/" className="text-red-600 font-extrabold text-xl">🎬 MovieExplorer</Link>
      
      <div className="flex items-center gap-6">
        <Link to="/movies" className="hover:text-red-600 transition text-xl font-bold">🎬 Movies</Link>
      </div>
      
    </div>
        
  );
};

export default Navbar;


