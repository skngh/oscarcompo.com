import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "../styles/samplesOld.css";
import BackButton from "../components/BackButton";

const samplesLocations = [
  "01_DIZZY.mp3",
  "02_ASKING.mp3",
  "03_NEVER RUN.mp3",
  "04_FLOWERPACK.mp3",
  "05_TRYING TIMES.mp3",
];
const sampleNames = [
  "Dizzy",
  "Asking",
  "Never Run (From This Love)",
  "Flowerpack",
  "Trying Times",
];
const artistNames = [
  "Kyra & the Chameleons",
  "1way4xx",
  "Oscar ZV",
  "Caesar Rodney",
  "Kyra Camille",
];
const creditNames = [
  "mastering",
  "vocal production, mixing",
  "production, mixing, mastering",
  "production, mixing, mastering",
  "production, mixing, mastering",
];

function Samples() {
  return (
    <>
      <BackButton />
      <div className="sample-container">
        <div className="audio-player-container">
          {samplesLocations.map((loc, index) => (
            <div className="song">
              <div className="top-text">
                <div className="song-names">
                  <b>{sampleNames[index]}</b> by {artistNames[index]}
                </div>
                <div className="song-names description">
                  {" "}
                  {creditNames[index]}
                </div>
              </div>

              <AudioPlayer
                src={"./audio/" + loc}
                showJumpControls={false}
                showDownloadProgress={false}
              ></AudioPlayer>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Samples;
