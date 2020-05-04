import { Audio } from "expo-av";

const playSound = async sound => {
  try {
    if (sound === "moveSound") {
      const moveSound = new Audio.Sound();
      await moveSound.loadAsync(require("../../assets/sounds/Move.mp3"));
      await moveSound.playAsync();
    }
    if (sound === "captureSound") {
      const captureSound = new Audio.Sound();
      await captureSound.loadAsync(require("../../assets/sounds/Capture.mp3"));
      //await captureSound.setVolumeAsync(0.5);
      await captureSound.playAsync();
    }
    if (sound === "wrongMoveSound") {
      const wrongMoveSound = new Audio.Sound();
      await wrongMoveSound.loadAsync(require("../../assets/sounds/Error.mp3"));
      await wrongMoveSound.setVolumeAsync(0.5);
      await wrongMoveSound.playAsync();
    }
  } catch (error) {
    console.log("audio loading failed");
  }
};

export default playSound;
