'use client'
import { videos } from "@/data/videos";
import VideoCard from "./VideoCard";

const VideoFeed = () => {
    return (
        <div className="h-[88vh] overflow-y-scroll snap-y snap-mandatory md:h-screen">
            {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
            ))}
        </div>
    );
};

export default VideoFeed;