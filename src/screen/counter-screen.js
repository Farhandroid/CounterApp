import React from "react";
import { connect } from "react-redux";
import { setCurrentCounter } from "../redux/counter/counter-action";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import CounterComponent from "../component/counter-component";
import { createStructuredSelector } from "reselect";
import { selectCurrentCounter } from "../redux/counter/counter-selector";
import UseStyles from "./counter-screen-design";

const CounterScreen = (props) => {
  const classes = UseStyles();

  const counterIncreaseButtonClicked = () => {
    props.setCurrentCounter(props.currentCounter + 1);
  };

  const counterDecreaseButtonClicked = () => {
    if (props.currentCounter > 0)
      props.setCurrentCounter(props.currentCounter - 1);
  };

  return (
    <Container component="main">
      <div className={classes.paper}>
        <CounterComponent />
        <div className= {classes.buttonContainer}>
          <Button
            variant="contained"
            onClick={() => counterDecreaseButtonClicked()}
          >
            Decrease
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={() => counterIncreaseButtonClicked()}
          >
            Increase
          </Button>
        </div>
      </div>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentCounter: (counter) => dispatch(setCurrentCounter(counter)),
});

const mapStateToProps = createStructuredSelector({
  currentCounter: selectCurrentCounter,
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterScreen);
