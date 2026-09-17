const MovieCard = ({movie,onSeeDetails}) => {
  const posteUrl = movie?.image?.medium;
  const title = movie?.name;
  const rating = movie?.rating?.average;
  const year = movie?.premiered ? movie.premiered.substring(0,4) : "N/A";
  return (
    <div className="bg-gray-700 p-4 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">

      <img src={posteUrl || "https://via.placeholder.com/210x295?text=No+Image"} alt={title || "Movie Poster"} className="w-full h-72 object-cover rounded-lg"/>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>

        <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
          <span>⭐ {rating}</span>
          <span>📅 {year}</span>
        </div>
        <button className="w-full bg-red-600 text-white py-2 rounded-md font-medium hover:bg-red-700 transition duration-150 cursor-pointer" onClick={()=>onSeeDetails(movie)}>See Details</button>
      </div>
    </div>
  )
}

export default MovieCard;