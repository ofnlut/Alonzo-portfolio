import React from "react";
import { Video } from "./Video";

// [title: Hello, youtubelink: link, image: image]
const contentList = [
    {title: "Versa Studio Visit (2023)", link:"https://www.youtube.com/embed/Mt6RBwXCm3U?si=Ky2Wgr1x1-VdwsZJ", thumbnail: "https://img.youtube.com/vi/Mt6RBwXCm3U/hqdefault.jpg"},
    {title: "Versa Reign hoodie Ad", link: "https://www.youtube.com/embed/Fwr5sR-0l38?si=d71su-RSpZWift3-", thumbnail: "https://img.youtube.com/vi/Fwr5sR-0l38/maxresdefault.jpg"},
    {title: "B.Pac - I Hope So", link: "https://www.youtube.com/embed/wGRfLtMUd7g?si=8fbS7YzYVsTqh4Rg", thumbnail: "https://img.youtube.com/vi/wGRfLtMUd7g/hqdefault.jpg"},
    {title: "Chris Chase - Ben Simmons", link: "https://www.youtube.com/embed/J9rppUM-oug?si=j1dQywtgGZCKpzf4", thumbnail:"https://img.youtube.com/vi/J9rppUM-oug/maxresdefault.jpg"},
    {title: "FM Wu x Chris Chase - John Wick", link:"https://www.youtube.com/embed/bN4NIZda-Hw?si=gcvnHHFo0-JRfPUT", thumbnail:"https://img.youtube.com/vi/bN4NIZda-Hw/maxresdefault.jpg"},
    {title:"B.Pac - AHBLUGADA ", link:"https://www.youtube.com/embed/oS-2LKnxNm8?si=Fa-tw2jtAhHsCyZG", thumbnail:"https://img.youtube.com/vi/oS-2LKnxNm8/maxresdefault.jpg"},
    {title:"Mama's Boi - BERSERK", link:"https://www.youtube.com/embed/w-c7DdHJsF8?si=6_Bkhz1yXJONAF5e", thumbnail:"https://img.youtube.com/vi/w-c7DdHJsF8/maxresdefault.jpg"},
    {title:"Akiwele & Rakhi - Between Us", link:"https://www.youtube.com/embed/en7mreYGqQA?si=qn_IYa_hs3AS50Vp&amp;start=614", thumbnail:"https://img.youtube.com/vi/en7mreYGqQA/maxresdefault.jpg"}
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
