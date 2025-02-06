import React from "react";
import PropTypes from "prop-types";

export default function Athar(props) {
  const [isShown, setIsShown] = React.useState(false);

  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }
  console.log(isShown);
  return (
    <>
      <div className="athar">
        <hr />
        {isShown && <h3>{props.text}</h3>}
        <h4>{props.narrator}</h4>
        <button onClick={toggleShown}>
          {!isShown ? "أظهر الأثر" : "اخفي الأثر"}
        </button>
      </div>
    </>
  );
}

Athar.propTypes = {
  text: PropTypes.string.isRequired,
  narrator: PropTypes.string.isRequired,
};
