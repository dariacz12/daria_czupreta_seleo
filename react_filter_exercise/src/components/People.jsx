import React, { useMemo } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function People({ list, query }) {
  console.log(query);
  return (
    <div>
      {list
        .filter(
          ({ name }) =>
            name.toLowerCase().includes(query.toLowerCase()) || !query
        )
        .map(({ name }, index) => (
          <div className="App-box" key={index}>
            {name}
          </div>
        ))}
    </div>
  );
}

People.propTypes = {
  list: PropTypes.array,
  query: PropTypes.string,
};

const mapStateToProps = (state) => ({
  list: state.people.list,
  query: state.people.query,
});

export default connect(mapStateToProps)(People);
