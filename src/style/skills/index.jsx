import { makeStyles } from "@material-ui/core";
import { Colors } from "../theme/index.jsx";



export const useStyles = makeStyles((theme) =>({
    skillContainer : {
        margin: 0,
        padding: 0,
        width : "100%",
        height: "auto",
        minHeight: "90vh",
        background: Colors.white
    },
    skillHeader : {
        width: "100%",
        height: "auto",
        display: "flex",
        flexFlow: "column wrap",
        color: Colors.green ,
    },
    skillTitle: {
        fontSize: "5em",
        textAlign: "center",
    }
}))