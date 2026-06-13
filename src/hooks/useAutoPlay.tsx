'use client'
import { useEffect, useRef, useState } from "react";

export const useVideoPlayer = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        const observer = new IntersectionObserver(
            async ([entry]) => {
                try {
                    if (entry.isIntersecting) {
                        await video.play();
                        setIsPlaying(true);
                    } else {
                        video.pause();
                        setIsPlaying(false);
                    }
                } catch (err) {
                    console.error(err);
                }
            },
            {
                threshold: 0.7,
            }
        );
        observer.observe(video);
        return () => observer.disconnect();
    }, []);
    const togglePlay = async () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            await video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };
    return {
        videoRef,
        isPlaying,
        togglePlay,
    };
};