import VOLUME_A from "../data/openings/volumes/VolumeA";
import VOLUME_B from "../data/openings/volumes/VolumeB";
import VOLUME_C from "../data/openings/volumes/VolumeC";
import VOLUME_D from "../data/openings/volumes/VolumeD";
import VOLUME_E from "../data/openings/volumes/VolumeE";

export const fetchOpenings = (vol, nameInput, moves) => {
  const name = nameInput.replace(/\W/g, "");

  switch (vol) {
    case "A": {
      const result = VOLUME_A.filter(line => {
        return (
          line.numMoves >= moves &&
          (line.shortName
            .replace(/\W/g, "")
            .toLowerCase()
            .indexOf(name.toLowerCase()) !== -1 ||
            line.name
              .replace(/\W/g, "")
              .toLowerCase()
              .indexOf(name.toLowerCase()) !== -1)
        );
      });
      return result;
    }
    case "B": {
      const result = VOLUME_B.filter(line => {
        return (
          line.numMoves >= moves &&
          (line.shortName
            .replace(/\W/g, "")
            .toLowerCase()
            .indexOf(name.toLowerCase()) !== -1 ||
            line.name
              .replace(/\W/g, "")
              .toLowerCase()
              .indexOf(name.toLowerCase()) !== -1)
        );
      });
      return result;
    }
    case "C": {
      const result = VOLUME_C.filter(line => {
        return (
          line.numMoves >= moves &&
          (line.shortName
            .replace(/\W/g, "")
            .toLowerCase()
            .indexOf(name.toLowerCase()) !== -1 ||
            line.name
              .replace(/\W/g, "")
              .toLowerCase()
              .indexOf(name.toLowerCase()) !== -1)
        );
      });
      return result;
    }
    case "D": {
      const result = VOLUME_D.filter(line => {
        return (
          line.numMoves >= moves &&
          (line.shortName
            .replace(/\W/g, "")
            .toLowerCase()
            .indexOf(name.toLowerCase()) !== -1 ||
            line.name
              .replace(/\W/g, "")
              .toLowerCase()
              .indexOf(name.toLowerCase()) !== -1)
        );
      });
      return result;
    }
    case "E": {
      const result = VOLUME_E.filter(line => {
        return (
          line.numMoves >= moves &&
          (line.shortName
            .replace(/\W/g, "")
            .toLowerCase()
            .indexOf(name.toLowerCase()) !== -1 ||
            line.name
              .replace(/\W/g, "")
              .toLowerCase()
              .indexOf(name.toLowerCase()) !== -1)
        );
      });
      return result;
    }
    default:
      return null;
  }
};

export default fetchOpenings;
