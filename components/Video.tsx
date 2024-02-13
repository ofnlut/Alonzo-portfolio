import React from "react";
type VideoProps = {
    title: string,
    link: string,
    thumbnail: string
}

export const Video = ({title, link, thumbnail}: VideoProps) => {
    return (
        <div>
            <a href={link}>
            <img src={thumbnail}/>
            <div>{title}</div>
            </a>
            {/* <iframe width="840" height="472" src={link} title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        </div>
    );
};