'use client'
import { videos } from "@/data/videos";
import VideoCard from "./VideoCard";

const VideoFeed = () => {
    return (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
            {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
            ))}
        </div>
    );
};

export default VideoFeed;