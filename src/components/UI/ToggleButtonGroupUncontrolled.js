import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import './Toggle.css';

function ToggleButtonGroupUncontrolled() {
  return (
    <>
      <ToggleButtonGroup
        type="radio"
        name="options"
        defaultValue={1}
        className="btn-container"
      >
        <ToggleButton id="tbg-radio-1" value={1} className="toggle-btn">
          Insomnia
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2} className="toggle-btn">
          Depression
        </ToggleButton>
        <ToggleButton id="tbg-radio-3" value={3} className="toggle-btn">
          Comfortable
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}

export default ToggleButtonGroupUncontrolled;
