import { Audio } from "expo-av";

const playSound = async sound => {
  const soundFx = new Audio.Sound();
  try {
    if (sound === "moveSound") {
      await soundFx.loadAsync(require("../../assets/sounds/Move.mp3"));
      await soundFx.playAsync();
    }
    if (sound === "captureSound") {
      await soundFx.loadAsync(require("../../assets/sounds/Capture.mp3"));
      await soundFx.playAsync();
    }
    if (sound === "wrongMoveSound") {
      await soundFx.loadAsync(require("../../assets/sounds/Error.mp3"));
      await soundFx.setVolumeAsync(0.5);
      await soundFx.playAsync();
    }
  } catch (error) {
    console.log("audio loading failed");
  }
};

export default playSound;
