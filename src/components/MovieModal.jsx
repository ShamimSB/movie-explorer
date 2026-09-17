const MovieModal = ({movie,onClose}) => {
  if(!movie) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
        <div className="bg-gray-900 text-white rounded-lg max-w-xl w-full p-6 relative shadow-2xl border border-gray-800">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white text-lg font-bold bg-gray-800 px-3 rounded-full cursor-pointer">❌</button>

          <img src={movie?.image?.original || movie?.image?.medium || "https://via.placeholder.com/500x300?text=No+Image"} alt={movie.name} className="w-full h-64 object-cover rounded-md mb-4"/>

          <h2 className="text-2xl font-bold m-3">{movie.name}</h2>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
            <span>⭐Rating: {movie?.rating?.average}</span>
            <span>Release: {movie?.premiered}</span>
            <span>Genres: {movie?.genres ? movie.genres.join(", ") : "N/A"}</span>  
          </div>
          <div className="text-gray-300 text-sm max-h-40 overflow-y-auto mb-6 pr-2 ">
            {movie.summary}
            <button className="w-full bg-red-600 text-white py-2 text-lg rounded-lg font-medium hover:bg-red-700 transition cursor-pointer mt-4" onClick={onClose}>Close</button>
          </div>
        </div>
    </div>
  )
}

export default MovieModal