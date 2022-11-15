import React from 'react';
function Product({imgSource, productName, productPrice, tag}) {
        return (
            <>
                <article>
                <span>{tag}</span>
                <img src={imgSource}/>
                    <p>{productName}</p>
                    <h4>{productPrice}</h4>
                </article>
            </>
        );
}
export default Product;