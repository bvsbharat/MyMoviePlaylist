import React from "react";
import PropTypes from "prop-types";

const ResultInfo = ({ totalResults, showing }) => {
    return (
        <div className="my-10 border-t border-gray-200">
            {totalResults && (
                <div className="flex items-center my-2 mx-2">
                    <p className="text-gray-500">
                        {`  Showing 1 - ${showing} of ${totalResults} results`}{" "}
                    </p>
                </div>
            )}
        </div>
    );
};

ResultInfo.defaultProps = {
    totalResults: 0,
    showing: 0,
};

ResultInfo.propTypes = {
    totalResults: PropTypes.number,
    showing: PropTypes.number,
};

export default ResultInfo;
