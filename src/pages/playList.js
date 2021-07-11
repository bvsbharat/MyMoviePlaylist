import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { set, get } from "../redux";
import { Layout, ResultList } from "@components";

export default function Dashboard() {
    const dispatch = useDispatch();
    const playlist = useSelector((state) => get(state, "playlist"));

    const handleDelete = (id) => {
        console.log(id);
        const index = playlist.findIndex((item) => item.imdbID === id);
        const newPlaylist = [...playlist];
        newPlaylist.splice(index, 1);
        dispatch(set("playlist", newPlaylist));
    };

    return (
        <Layout>
            {playlist.length > 0 ? (
                <ResultList
                    results={playlist}
                    hideAddToPlaylist
                    showDelete
                    handleDelete={handleDelete}
                />
            ) : (
                <div className="flex flex-row justify-center pt-5 pb-10 my-20 sm:flex-row s">
                    <p className="text-md text-gray-600">
                        No "Movies" in this playlist
                    </p>
                </div>
            )}
        </Layout>
    );
}
