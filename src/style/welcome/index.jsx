import { Colors } from "../theme/index.jsx";

const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
    welcomeHeader: {
        width: "100%",
        height: "90vh",
        backgroundColor: Colors.green,
        margin: 0
    }
}))