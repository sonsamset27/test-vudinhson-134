This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Logic Play/Pause Video

Hệ thống sử dụng IntersectionObserver để tự động điều khiển trạng thái phát video dựa trên vị trí hiển thị trong viewport

Ở đây em tạo một custom hook useAutoPlay() để tái sử dụng logic
Trong custom hook có 2 state
- videoRef: state dùng để lưu trữ ref của video
- togglePlay: hàm dùng để play/pause video sẽ được gọi khi click vào video, logic là khi video đang pause thì play(), ngược lại thì pause()

Luồng hoạt động
- "const videoRef = useRef<HTMLVideoElement>(null);" cái này giúp ta có thể gọi các hàm của video element như play(), pause(),..
- Sau đó gọi useEffect để khởi tạo IntersectionObserver
IntersectionObserver sẽ theo dõi video element khi nó lọt vào viewport bằng entry.isIntersecting và kiểm tra nếu video lọt vào viewport thì gọi video.play(), ngược lại thì video.pause()
- Ở đây em để threshold là 0.7 có nghĩa là khi video lọt vào viewport 70% thì sẽ play, ngược lại nếu video lọt ra khỏi viewport 30% thì sẽ pause
- observer.observe(video); cái này để bắt đầu theo dõi video element
- return () => observer.disconnect(); cái này để cleanup observer khi component unmount tránh bị leak memory

Tiếp theo để sử dụng thì trong video component em gọi custom hook useAutoPlay(), destructure videoRef và togglePlay, sau đó gán videoRef vào video element và gọi togglePlay khi click vào video


