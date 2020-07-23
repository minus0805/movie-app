import React from "react";
import{ Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres, order }){
    return (
        <Link to={{
            pathname: `/movie/${id}`,
            state: {
                id,
                year,
                title,
                summary,
                poster,
                genres,
                order
            }
        }}>
            <div className="movie">
                    <div className="movie__order">{order + 1}</div>
                    <div className="poster__shadow">
                        <img src={poster} alt={title} title={title} />
                    </div>
                <div className="movie__data">
                    <div className="movie__title">{title}</div>
                    <div className="movie__desc">
                        <div className="movie__year">{year}</div>
                        <div className="movie__genres">
                        {(genres.slice(0, 2)).map((genre, index) => (
                            <span key={index} className="genres__genre">{genre}</span>
                        ))}
                        </div>
                        <p className="movie__summary">{summary.slice(0, 100)}...</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    order: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;
