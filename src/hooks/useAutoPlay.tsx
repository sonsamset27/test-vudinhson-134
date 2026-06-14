'use client'
import { useEffect, useRef, useState } from "react";

export const useVideoPlayer = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        const observer = new IntersectionObserver(
            async ([entry]) => {
                try {
                    if (entry.isIntersecting) {
                        await video.play();
                    } else {
                        video.pause();
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
        } else {
            video.pause();
        }
    };
    return {
        videoRef,
        togglePlay,
    };
};