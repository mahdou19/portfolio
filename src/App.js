
import { useEffect } from "react";
import RoutePage from "./components/route/index.jsx";
import { Container } from "@mui/material";
import NavBar from "./components/common/navbar/NavBar.jsx";

function App() {

  useEffect(() => {
    document.title = "Mamadou SALL";
  }, []);

  return (
   
     <Container> 
        <NavBar />
        <RoutePage />
     </Container>
  

  );
}

export default App;
