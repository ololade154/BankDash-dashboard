import { useState } from "react";
import { NotificationOn } from "../Icons/notificationOn";
import { NotificationOff } from "../Icons/notificationOff";
export const NotificationButton = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? <NotificationOn /> : <NotificationOff />}
    </button>
  );
};
