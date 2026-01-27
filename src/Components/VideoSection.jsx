import React from "react";

const VideoSection = () => {
  return (
    <section className="w-full flex justify-center py-16">
      <div className="w-[1180px] px-4">
        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-6">
          How Our Products Made
        </h2>

        {/* Video Container */}
        <div
          className="
            w-full
            h-[487px]
            overflow-hidden
            bg-black
            shadow-lg
            rounded-b-[31px]
          "
        >
          <video
            className="w-full h-full object-cover"
            controls
            preload="metadata"
            poster="/images/video-poster.jpg" // optional
          >
            <source
              src="/videos/dryfruits-video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
