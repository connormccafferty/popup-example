import React, { useEffect } from "react";

const Popup = () => {
  useEffect(() => {
    const windowHandle = window.fin.Window.getCurrentSync();
    const setAsForeground = async () => await windowHandle.setAsForeground();

    setAsForeground();
  }, []);

  return (
    <div>
      <h1>Popup Window</h1>
    </div>
  );
};

export default Popup;
