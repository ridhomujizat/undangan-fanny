import React from "react";
import { border, Box } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

export default function sound() {
  const [isPlay, setIsplay] = React.useState(true);

  const playMusic = () => {
    const musicBg = document.getElementById("music-bg");

    if (isPlay) {
      setIsplay(false);
      musicBg.pause();
    } else {
      setIsplay(true);
      musicBg.play();
    }
  };
  return (
    <Box
      as="button"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        bgColor: "gray.100",
        padding: "10px",
        right: 0,
        bottom: "50px",
        opacity: "50%",
        borderRadius: "20px 0 0 20px",
        cursor: "pointer",
        outline: "none",
        "-webkit-tap-highlight-color": "transparent",
        zIndex: 99998,
        "[data-aos]": {
          "pointer-events": "none",
          "&.aos-animate": { "pointer-events": "auto" },
        },
      }}
      onClick={() => playMusic()}
    >
      {isPlay ? (
        <Icon icon="fluent:music-note-2-16-filled" width="30" height="30" />
      ) : (
        <Icon icon="fluent:music-note-off-2-16-filled" width="30" height="30" />
      )}

      <audio id="music-bg" src="/image/music.mp3" preload="auto"></audio>
    </Box>
  );
}
