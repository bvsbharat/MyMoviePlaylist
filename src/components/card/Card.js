import React from "react";
import PropTypes from "prop-types";

const IMAGE_PLACEHOLDER =
    "https://via.placeholder.com/480.png?Text=Not-Available";

const Card = ({
    movie,
    addToPlaylist,
    hideAddToPlaylist,
    showDelete,
    handleDelete,
}) => {
    const moviePoster =
        movie.Poster !== "N/A" ? movie.Poster : IMAGE_PLACEHOLDER;
    var sectionStyle = {
        width: "100%",
        maxHeight: "300px",
        height: "300px",
        backgroundImage: `url(${moviePoster})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div className="my-1 px-1 w-full md:w-1/2  lg:my-4 lg:px-4 lg:w-1/4">
            <article className="overflow-hidden rounded-lg shadow-lg">
                <div
                    alt="move poster"
                    className="max-h-80 w-full object-cover"
                    style={sectionStyle}
                ></div>
                <div className="bg-white dark:bg-gray-800 w-full p-4">
                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                            <p className="no-underline w-40 truncate ... hover:underline text-black text-indigo-500 text-md font-medium">
                                {movie.Title}
                            </p>
                        </h1>
                        <p className="text-grey-darker text-sm text-gray-800 dark:text-white text-xl font-medium mb-2">
                            {movie.Year}
                        </p>
                    </header>

                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                        {!hideAddToPlaylist && (
                            <div className="flex items-center mt-4">
                                <button
                                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                    type="button"
                                    onClick={() => addToPlaylist(movie)}
                                >
                                    Add to Playlist
                                </button>
                            </div>
                        )}

                        {hideAddToPlaylist && !showDelete && (
                            <div className="flex items-center mt-4">
                                <button
                                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-100
                                disabled
                                hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none"
                                    type="button"
                                    disabled
                                >
                                    Added
                                </button>
                            </div>
                        )}

                        {showDelete && (
                            <div className="flex items-center mt-4">
                                <button
                                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                    type="button"
                                    onClick={() => handleDelete(movie.imdbID)}
                                >
                                    Delete from Playlist
                                </button>
                            </div>
                        )}
                    </footer>
                </div>
            </article>
        </div>
    );
};

Card.defaultProps = {
    movie: {},
    addToPlaylist: () => {},
    hideAddToPlaylist: false,
    showDelete: false,
    handleDelete: () => {},
};

Card.propTypes = {
    movie: PropTypes.object,
    addToPlaylist: PropTypes.func,
    hideAddToPlaylist: PropTypes.bool,
    showDelete: PropTypes.bool,
    handleDelete: PropTypes.func,
};

export default Card;
