import React from 'react';

const MovieCard = props => {
  return(
    <div className="movie-card">
      <h2>{props.data.title}</h2>
      <div className="movie-director">
        Director: <em>{props.data.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{props.data.metascore}</strong>
      </div>
      <h3>Actors</h3>

      {props.data.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  )
};

export default MovieCard;
