import React from "react";
import './MovieRow.css';

export default ({title, items}) => {
    return (
        // items.results.map((item, key) => (
        //     console.log(item)
        // )),
        <div>
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                {items.results.map((item, key) => (
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                ))
                }
            </div>
        </div>
    );
}