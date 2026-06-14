import VideoFeed from "@/components/VideoFeed";
import Navbar from "@/components/NavBar";

const Page = () => {
  return (
    <div className="min-h-screen  bg-black">
      <VideoFeed />
      <Navbar />
    </div>
  );
};

export default Page;