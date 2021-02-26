import { makeStyles } from "@material-ui/core/styles";

const UseStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height : "100vh",
    marginTop :0,
    paddingTop :0
  },
  buttonContainer:{
      display : "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      justify: "center",
      width :"230px"

  }
}));

export default UseStyles;
