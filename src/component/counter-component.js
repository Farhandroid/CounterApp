import React from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentCounter } from "../redux/counter/counter-selector";
import UseStyles from "./counter-component-style"

const CounterComponent = ({currentCounter}) => {
  const style = UseStyles()
  return (
    <div>
      <Typography className = {style.counterText}>
      {currentCounter}
      </Typography>
    </div>
  );
};

 const mapStateToProps = createStructuredSelector({
  currentCounter: selectCurrentCounter,
});

 export default connect(mapStateToProps)(CounterComponent);
