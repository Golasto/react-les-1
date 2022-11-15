import React from 'react';
function Tile({imgSrc, text, title}) {
    if (imgSrc !== undefined) {
        return (
            <section>
                <img src={imgSrc}/>
            </section>
        )
    }else {
        return (
            <section>
                <h2>{title}</h2>
                <p>{text}</p>
            </section>
        )
    }
    }
export default Tile;