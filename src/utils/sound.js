const playSound = async (ref, sound) => {
  try {
    if (sound === "moveSound") {
      await ref.loadAsync(require("../../assets/sounds/Move.mp3"));
      await ref.playAsync();
   //   await ref.unloadAsync()
    }
    if (sound === "captureSound") {
      await ref.loadAsync(require("../../assets/sounds/Capture.mp3"));
      await ref.playAsync();
   //   await ref.unloadAsync()
    }
    if (sound === "wrongMoveSound") {
      await ref.loadAsync(require("../../assets/sounds/Error.mp3"));
      await ref.setVolumeAsync(0.5);
      await ref.playAsync();
   //   await ref.unloadAsync()
    }
  } catch (error) {
    console.log("audio loading failed");
  }
};

export default playSound;
