import React from "react";
import { Video } from "./Video";

// [title: Hello, youtubelink: link, image: image]
const contentList = [
    {title: "Versa Studio Visit (2023)", link:"https://www.youtube.com/embed/Mt6RBwXCm3U?si=Ky2Wgr1x1-VdwsZJ", thumbnail: "/images/thumbnails/versainterview.jpg"},
    {title: "Versa Reign hoodie Ad", link: "https://www.youtube.com/embed/Fwr5sR-0l38?si=d71su-RSpZWift3-", thumbnail: "/images/thumbnails/versahoodie.jpg"},
    {title: "B.Pac - I Hope So", link: "https://www.youtube.com/embed/wGRfLtMUd7g?si=8fbS7YzYVsTqh4Rg", thumbnail: "/images/thumbnails/bpacihopeso.jpg"},
    {title: "Chris Chase - Ben Simmons", link: "https://www.youtube.com/embed/J9rppUM-oug?si=j1dQywtgGZCKpzf4", thumbnail:"/images/thumbnails/chrischasebensimmons.jpg"},
    {title: "FM Wu x Chris Chase - John Wick", link:"https://www.youtube.com/embed/bN4NIZda-Hw?si=gcvnHHFo0-JRfPUT", thumbnail:"/images/thumbnails/johnwick.jpg"},
    {title:"B.Pac - AHBLUGADA ", link:"https://www.youtube.com/embed/oS-2LKnxNm8?si=Fa-tw2jtAhHsCyZG", thumbnail:"/images/thumbnails/bpacabhudwhja.jpg"},
    {title:"Mama's Boi - BERSERK", link:"https://www.youtube.com/embed/w-c7DdHJsF8?si=6_Bkhz1yXJONAF5e", thumbnail:"/images/thumbnails/beserk.jpg"},
    {title:"Akiwele & Rakhi - Between Us", link:"https://www.youtube.com/embed/en7mreYGqQA?si=qn_IYa_hs3AS50Vp&amp;start=614", thumbnail:"/images/thumbnails/concert.jpg"}
]; 
export const VideoList = () => {
    return (
        <div className="grid grid-cols-2 gap-3">
            {contentList.map((content, i ) => ( 
                <Video title={content.title} link={content.link} thumbnail={content.thumbnail} id={i}/>
            ))}
        </div>
    )
}
