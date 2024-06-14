import { useState } from 'react';
import "./style.css";
function ToggleSwitch() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleSwitch = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <label className="switch">
        <input
          type="checkbox"
          checked={isToggled}
          onChange={toggleSwitch}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default ToggleSwitch;
