import { FC } from "react";
import { Section } from "@/components";

const VideoSection: FC = (): JSX.Element => {
   return (
      <Section parentClassName="my-16" sectionClassName="px-0" fluid>
         <div className="w-screen overflow-hidden rounded-none">
            <video
               className="h-full w-full rounded-none object-cover"
               src="/videos/laservideo.mp4"
               muted
               autoPlay
               loop
               playsInline
               preload="metadata"
            />
         </div>
      </Section>
   );
};

export default VideoSection;

