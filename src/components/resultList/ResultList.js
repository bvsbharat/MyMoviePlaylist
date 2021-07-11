import React from "react";
import PropTypes from "prop-types";
import { Card } from "../";

const ResultList = ({
    results,
    addToPlaylist,
    hideAddToPlaylist,
    loadNext,
    showLoadNext,
    showDelete,
    handleDelete,
    playlist,
    isLoading,
}) => {
    const isInPlayList = (id) => {
        return playlist.findIndex((movie) => movie.imdbID === id) > -1;
    };

    return (
        <>
            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {results?.map((movie, index) => {
                        return (
                            <Card
                                movie={movie}
                                addToPlaylist={addToPlaylist}
                                hideAddToPlaylist={
                                    hideAddToPlaylist ||
                                    isInPlayList(movie.imdbID)
                                }
                                handleDelete={handleDelete}
                                showDelete={showDelete}
                                key={`${movie.imdbID} + ${index}}`}
                            />
                        );
                    })}
                </div>
            </div>

            {showLoadNext && (
                <div className="text-center my-12 border-t border-gray-200">
                    <button
                        type="button"
                        className="inline-flex my-12 items-center justify-center w-auto h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-gray-800 hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                        onClick={loadNext}
                        disabled={isLoading}
                    >
                        {isLoading ? "Loading.... " : "Load More"}
                    </button>
                </div>
            )}
        </>
    );
};

ResultList.defaultProps = {
    results: [],
    isLoading: false,
    addToPlaylist: () => {},
    hideAddToPlaylist: false,
    loadNext: () => {},
    showLoadNext: false,
    showDelete: false,
    handleDelete: () => {},
    playlist: [],
};

ResultList.propTypes = {
    results: PropTypes.array,
    addToPlaylist: PropTypes.func,
    hideAddToPlaylist: PropTypes.bool,
    loadNext: PropTypes.func,
    showLoadNext: PropTypes.bool,
    showDelete: PropTypes.bool,
    handleDelete: PropTypes.func,
    playlist: PropTypes.array,
    isLoading: PropTypes.bool,
};

export default ResultList;
