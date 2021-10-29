import React from "react";

const ImageList = (props) => {
    const imagesList = props.images.map(({ urls, id, alt_description }) => {
        return <img src={urls.regular} key={id} alt={alt_description} />
    })

    return <div>{imagesList}</div>
}

export default ImageList;