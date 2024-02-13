import React from "react";
type VideoProps = {
    title: string,
    link: string,
    thumbnail: string
}

export const Video = ({title, link, thumbnail}: VideoProps) => {
    return (
        <div>
            <a className="relative w-full h-full bg-gray-900 group" href={link}>
            <img className=" absolute inset-0 object-cover w-full h-full group-hover:opacity-50" src={thumbnail}/>
            <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                <div className="relative p-4 pl-">
                    <div className="mt-60 mb-5">
                        {title}
                    </div>
                </div>
            </div>
            </a>
            {/* <iframe width="840" height="472" src={link} title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        </div>
    );
};