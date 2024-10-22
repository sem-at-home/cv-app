import * as react from "react";
import PropTypes from "prop-types";

export default function Experience({ name }) {
  const [experiences, setExperiences] = react.useState([]);

  function addPracticalExperience() {
    setExperiences([...experiences]);
  }

  return (
    <section>
      <h2>{name}</h2>
      {experiences.map((experience) => {
        return <p key={experience}>{experience}</p>;
      })}
      <button onClick={addPracticalExperience}>Add</button>
    </section>
  );
}

Experience.propTypes = {
  name: PropTypes.string.isRequired,
};
