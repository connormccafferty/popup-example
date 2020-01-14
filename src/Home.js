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
    const id = uuidv4();
    const windowOptions = {
      name: `popup-window-${id}`,
      url: `/popup/${id}`,
      autoShow: true
    };
    return await window.fin.Window.create(windowOptions);
  };

  return (
    <div>
      <h1>Main Window</h1>
      <p>Current Version: {version}</p>
      <button onClick={() => createPopup()}>create popup</button>
    </div>
  );
};

export default Home;
