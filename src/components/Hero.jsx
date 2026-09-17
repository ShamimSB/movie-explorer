import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const [search,setSearch] = useState("")
  const navigate = useNavigate();

  const handleSearch = (e)=>{
    e.preventDefault();
    if(search.trim()){
      navigate(`/movies?search=${search}`)
    }
  }
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-20 px-8 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide">
          Discover Your Next <span className="text-red-600">Favorite Movie</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl">
          Explore thousands of movies, check trending lists, reviews, and dive into the cinematic world seamlessly.
        </p>
       <form onSubmit={handleSearch} className="flex flex-col sm:flex-row justify-center gap-3 p-4">
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search Movies..." className="px-4 py-3 rounded-lg bg-gray-800 text-white w-full max-w-md focus:ring-2 focus:ring-red-600 border border-gray-700"/>

            <button type="submit" className="bg-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition cursor-pointer">Search</button>
       </form>
        <div>
          <Link to={"/movies"} className="inline-block bg-red-600 py-3 px-8 rounded-lg font-semibold hover:bg-red-700 transition shadow-lg text-lg mt-8">Explore Now...</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;