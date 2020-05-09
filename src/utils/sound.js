import { Audio } from "expo-av";



const playSound = async sound => {
  try {
    if (sound === "moveSound") {
      const moveSound = new Audio.Sound();      
      await moveSound.loadAsync(require("../../assets/sounds/Move.mp3"));
      await moveSound.playAsync();
      await moveSound.unloadAsync()
    }
    if (sound === "captureSound") {
      const captureSound = new Audio.Sound();
      await captureSound.loadAsync(require("../../assets/sounds/Capture.mp3"));
      await captureSound.playAsync();
      await captureSound.unloadAsync()
    }
    if (sound === "wrongMoveSound") {
      const wrongMoveSound = new Audio.Sound();      
      await wrongMoveSound.loadAsync(require("../../assets/sounds/Error.mp3"));
      await wrongMoveSound.setVolumeAsync(0.5);
      await wrongMoveSound.playAsync();
      await wrongMoveSound.unloadAsync()
    }
  } catch (error) {
    console.log("audio loading failed");
  }
};

export default playSound;
