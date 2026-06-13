import { Video } from "../types/video";

export const videos: Video[] = [
    {
        id: 1,
        videoUrl:
            "https://www.w3schools.com/html/mov_bbb.mp4",
        authorName: "Vũ Đình Sơn",
        description: "Video demo 1, có một con heo :)))) dòng chữ này để test độ dài, dòng chữ này để test độ dàidòng chữ này để test độ dàidòng chữ này để test độ dàidòng chữ này để test độ dài",
        likesCount: 100,
    },
    {
        id: 2,
        videoUrl:
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4",
        authorName: "Tran Van B",
        description: "Video demo 2",
        likesCount: 200,
    },
    {
        id: 3,
        videoUrl:
            "https://media.w3.org/2010/05/sintel/trailer.mp4",
        authorName: "Le Van C",
        description: "Video demo 3",
        likesCount: 300,
    },

];