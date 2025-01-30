import { Center, Text, Box } from "@mantine/core";
import Data from '../assets/data.json';

function Background() {
    const vid = Data.video
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
        <Text>
          Background video component can be used for hero sections and other
          immersive experiences.
        </Text>
      </Center>
    </Box>
  );
}

export default Background;
