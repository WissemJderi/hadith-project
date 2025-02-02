import PropTypes from "prop-types";

export default function Athar(props) {
  return (
    <>
      <div className="athar">
        <hr />
        <h3>{props.text}</h3>
        <h4>{props.narrator}</h4>
      </div>
    </>
  );
}

Athar.propTypes = {
  text: PropTypes.string.isRequired,
  narrator: PropTypes.string.isRequired,
};
