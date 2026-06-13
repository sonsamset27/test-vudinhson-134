'use client'
import { useEffect, useState } from "react";
import { Video } from "@/types/video";

export const useLikeAction = (video: Video) => {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(video.likesCount);

    useEffect(() => {
        setLiked(false);
        setLikeCount(video.likesCount);
    }, [video.id]);
    const handleLike = () => {
        setLiked(!liked);
        setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    };

    return { liked, handleLike, likeCount };
};