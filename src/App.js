import { useState } from "react";
import "./App.css";
import Basic from "./components/Basic";

function App() {
  const [ready, setReady] = useState(false);

  const onClick = () => {
    var element = document.body;
    element.requestPointerLock =
      element.requestPointerLock ||
      element.mozRequestPointerLock ||
      element.webkitRequestPointerLock;
    if (/Firefox/i.test(navigator.userAgent)) {
      var fullscreenchange = function (event) {
        if (
          document.fullscreenElement === element ||
          document.mozFullscreenElement === element ||
          document.mozFullScreenElement === element
        ) {
          document.removeEventListener("fullscreenchange", fullscreenchange);
          document.removeEventListener("mozfullscreenchange", fullscreenchange);
        }
      };
      document.addEventListener("fullscreenchange", fullscreenchange, false);
      document.addEventListener("mozfullscreenchange", fullscreenchange, false);
      element.requestFullscreen =
        element.requestFullscreen ||
        element.mozRequestFullscreen ||
        element.mozRequestFullScreen ||
        element.webkitRequestFullscreen;
      element.requestFullscreen();
    } else {
      setReady(true);
      element.requestFullscreen();
    }
  };

  return (
    <div>
      {!ready && (
        <div id="instructions" onClick={() => onClick()}>
          <div>
            <h1>Click to begin</h1>
            Shoot: LEFT MOUSE CLICK
            <br />
            Move: W-A-S-D or ARROWS
            <br />
            Run: SHIFT
            <br />
            Jump: SPACE
            <br />
            Look: MOUSE
          </div>
        </div>
      )}
      {ready && <Basic />}
    </div>
  );
}

export default App;
