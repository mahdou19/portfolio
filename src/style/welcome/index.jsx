import { Colors } from "../theme/index.jsx";
import { makeStyles } from "@material-ui/core";

import background from '../../assets/images/image2.jpg'

export const useStyles = makeStyles((theme) => ({
    welcomeContainer: {
        width: "100%",
        minHeight: "90vh",
        height: "auto",
        background: `linear-gradient(to bottom right,#04303140, #00606473),url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    },
    welcomeHeader : {
        padding: "50px",
        width: "100%",
        minHeight: "90vh",
        height: "auto",
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center",
        color: Colors.white ,
        [theme.breakpoints.down('xs')]: {
            padding: "35px",
            fontFamily: 'Bungee Inline'
          },
        
    },
    welcomeTitle : {
        fontSize: "5em",
        textAlign: "center",
       
    },
    welcomeDescription: {
        fontSize: "5em",
        textAlign: "center",
       
    }
}))