import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

const Movies = () => {

  const [movies,setMovies] = useState([]);
  const [search,setSearch] = useState("");
  const [selecteMovie,setSelecreMovie] = useState(null)

  useEffect(()=>{
    const url = search.trim() ? `https://api.tvmaze.com/search/shows?q=${search}` : `https://api.tvmaze.com/shows`;

    fetch(url)
      .then((res)=>res.json())
      .then((data)=>{
        if(search.trim()){
          const fromattedData = data.map((item)=>item.show)
          setMovies(fromattedData)
        }else{
          setMovies(data)
        }
      })
      .catch((error)=>console.error("Error fetching data",error))
  },[search])
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8 flex justify-center">
        <input type="text" placeholder="Search for a movie..." value={search} onChange={(e)=>setSearch(e.target.value)} className="w-full max-w-lg px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-1 focus:ring-red-600"/>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie)=>(
          <MovieCard key={movie.id} movie={movie} onSeeDetails={(movieData)=> setSelecreMovie(movieData)}/>
        ))}
      </div>

      <MovieModal movie={selecteMovie} onClose={()=>setSelecreMovie(null)}/>
    </div>
  )
}

export default Movies