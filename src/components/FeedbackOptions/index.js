import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="feedback-options">
    {options.map((option) => (
      <button
        key={option}
        className="button"
        value={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
