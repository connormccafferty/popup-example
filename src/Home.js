import React, { useState, useEffect } from "react";
import uuidv4 from "uuid/v4";

const Home = () => {
  const [version, setVersion] = useState("");
  useEffect(() => {
    async function ofVersion() {
      const v = await window.fin.System.getVersion();
      setVersion(v);
    }

    ofVersion();
  }, []);

  const createPopup = async () => {
    // const id = uuidv4();
    const windowOptions = {
      name: `popup-window`,
      url: `/popup`,
      autoShow: true
    };
    return await window.fin.Window.create(windowOptions);
  };

  const restorePopoutWithoutFocus = async () => {
    const popupWindow = await window.fin.Window.wrap({
      name: "popup-window",
      uuid: "popup-example"
    });

    async function restoreOnTop(window) {
      const result = Promise.all([
        window.restore(),
        window.updateOptions({ alwaysOnTop: true }),
        window.updateOptions({ alwaysOnTop: false })
      ]);
    }

    return setTimeout(() => {
      restoreOnTop(popupWindow);
    }, 5000);
  };

  const launchNotepad = async () => {
    window.fin.System.launchExternalProcess({
      path: "notepad",
      arguments: "",
      listener: result => {
        console.log(`Exit Code: ${result.exitCode}`);
      }
    })
      .then(processId => {
        console.log(processId);
        restorePopoutWithoutFocus();
      })
      .catch(console.error);
  };

  return (
    <div>
      <h1>Main Window</h1>
      <p>Current Version: {version}</p>
      <button onClick={() => createPopup()}>create popup</button>
      <button onClick={() => launchNotepad()}>notepad</button>
    </div>
  );
};

export default Home;
