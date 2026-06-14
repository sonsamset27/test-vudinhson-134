'use client'
import { Heart, MessageSquare, Share } from "lucide-react";
import { Video } from "@/types/video";
import { useLikeAction } from "@/hooks/useLikeAction";
import { useVideoPlayer } from "@/hooks/useAutoPlay";
import { useState } from "react";


interface VideoCardProps {
    video: Video;
}

const VideoCard = ({ video }: VideoCardProps) => {
    const { liked, handleLike, likeCount } = useLikeAction(video);
    const { videoRef, togglePlay } = useVideoPlayer();
    const [expanded, setExpanded] = useState(false);
    const formatCount = (count: number) => {
        if (count < 1000) return count;
        if (count < 1000000) return `${(count / 1000).toFixed(1)}K`;
        return `${(count / 1000000).toFixed(1)}M`;
    };
    return (
        <div className="flex justify-center h-full bg-black">
            <div className="grid grid-cols-1 h-[88vh] snap-start relative overflow-hidden md:h-[100vh] md:aspect-[9/16]">
                <video
                    className="w-full h-full object-contain z-0"
                    src={video.videoUrl}
                    ref={videoRef}
                    onClick={togglePlay}
                    loop
                />
                <div className="absolute bottom-14 left-5 z-10 flex flex-col gap-2 md:bottom-5">
                    <p className="text-gray-200 font-bold text-2xl">
                        {video.authorName}
                    </p>
                    <p
                        className={`text-gray-200 font-light text-sm max-w-[90vw] ${expanded ? "" : "line-clamp-2"}`}
                    >
                        {video.description}
                    </p>
                    {video.description.length > 50 && (
                        <span
                            className="text-gray-400 text-xs italic underline cursor-pointer"
                            onClick={() => setExpanded(!expanded)}
                        >
                            {expanded ? "Thu gọn" : "Xem thêm"}
                        </span>
                    )}
                </div>
                <div className="absolute top-[50%] translate-y-[-50%] right-2.5 z-10 flex flex-col items-center gap-6">
                    <div className="flex flex-col items-center">
                        <Heart
                            size={32}
                            color={liked ? "#ff3040" : "#fff"}
                            fill={liked ? "#ff3040" : "transparent"}
                            strokeWidth={2}
                            onClick={handleLike}
                            className="cursor-pointer"
                        />
                        <p className="text-white">{formatCount(likeCount)}</p>
                    </div>
                    <MessageSquare
                        size={32}
                        color="#fff"
                        fill="transparent"
                        strokeWidth={2}
                        className="cursor-pointer"
                    />
                    <Share
                        size={32}
                        color="#fff"
                        fill="transparent"
                        strokeWidth={2}
                        className="cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
};

export default VideoCard;