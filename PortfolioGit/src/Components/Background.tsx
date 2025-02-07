import { Center, Box } from "@mantine/core";
import React from "react";
import Data from '../assets/data.json';
interface BackgroundProps {
  children: React.ReactNode; // Explicitly define the children prop
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  const vid = Data.video;
  return (
    <Box
      style={{
        position: "relative",
        width: "100%",
        flex: 1,
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source
          src={vid}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <Center
        p="md"
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          textAlign: "center",
        }}
      >
        {children}
      </Center>
    </Box>
    
  );
}

export default Background;
