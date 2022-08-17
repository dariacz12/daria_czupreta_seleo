import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { SET_FILTER_VALUE } from "../redux/people/types";

function Filter({ setFilterValue }) {
  return (
    <div className="App-box">
      <input
        type="text"
        onChange={(event) => setFilterValue(event.target.value)}
      />
    </div>
  );
}

Filter.propTypes = {
  setFilterValue: PropTypes.func,
};

const mapStateToProps = (state) => ({
  people: state.people,
});

const mapDispatchToProps = (dispatch) => ({
  setFilterValue: (value) =>
    dispatch({ type: SET_FILTER_VALUE, payload: value }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
