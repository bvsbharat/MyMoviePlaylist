import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { set, get, push } from "../redux";
import { setValueInLocalStorage, getValueFromLocalStorage } from "../utils";
import { Layout, SearchInput, ResultList, ResultInfo } from "@components";
import useDebounce from "../hooks/useDebounce";
import { searchMovie } from "../services";

export default function Search() {
    const { addToast } = useToasts();
    const dispatch = useDispatch();
    const searchResults = useSelector((state) => get(state, "data.result"));
    const pageNo = useSelector((state) => get(state, "data.pageNo"));
    const playlist = useSelector((state) => get(state, "playlist"));
    const isLoading = useSelector((state) => get(state, "loading"));
    const [searchValue, setSearchValue] = useState(
        getValueFromLocalStorage("debouncedSearchValue") || "",
    );
    const debouncedSearchValue = useDebounce(searchValue, 500);
    const totalResult = parseInt(searchResults?.totalResults || 0, 10);

    useEffect(() => {
        if (debouncedSearchValue) {
            dispatch(set("data", { result: {}, pageNo: 1 }));
            dispatch(set("loading", true));
            searchMovie(debouncedSearchValue).then((res) => {
                dispatch(set("data.result", res));
                dispatch(set("loading", false));
            });
        } else {
            dispatch(set("data", { result: {}, pageNo: 1 }));
        }
        setValueInLocalStorage("debouncedSearchValue", debouncedSearchValue);
    }, [debouncedSearchValue]);

    const handleAddToPlaylist = (movie) => {
        addToast(`${movie.Title} : Added to Playlist `, {
            appearance: "success",
            autoDismiss: true,
        });
        dispatch(push("playlist", movie));
    };

    const handleLoadNextPage = () => {
        if (debouncedSearchValue) {
            dispatch(set("loading", true));
            searchMovie(debouncedSearchValue, pageNo + 1).then((res) => {
                const updatedResult = [...searchResults?.Search, ...res.Search];
                dispatch(set("data.result.Search", updatedResult));
                dispatch(set("data.pageNo", pageNo + 1));
                dispatch(set("loading", false));
            });
        }
    };

    return (
        <Layout>
            <div className="w-full">
                <SearchInput
                    value={searchValue}
                    setSearchValue={setSearchValue}
                />

                {searchResults?.Response === "True" && (
                    <div id="result">
                        <ResultInfo
                            totalResults={totalResult}
                            showing={searchResults?.Search?.length}
                        />

                        <ResultList
                            results={searchResults?.Search || []}
                            addToPlaylist={handleAddToPlaylist}
                            loadNext={handleLoadNextPage}
                            showLoadNext={pageNo * 10 < totalResult}
                            playlist={playlist}
                            isLoading={isLoading}
                        />
                    </div>
                )}

                {searchResults?.Response === "False" && (
                    <div className="flex flex-col justify-center pt-5 pb-10 sm:flex-row s">
                        <p className="text-lg text-red-800 text-center">
                            {searchResults?.Error}
                        </p>
                    </div>
                )}

                {isLoading && (
                    <div className="flex flex-col justify-center pt-5 pb-10 sm:flex-row s">
                        <p className="text-lg text-gray-800 text-center">
                            Loading...
                        </p>
                    </div>
                )}
            </div>
        </Layout>
    );
}
