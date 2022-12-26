
import { useEffect } from "react";
import RoutePage from "./components/route/index.jsx";
import { Container } from "@mui/material";

function App() {

  useEffect(() => {
    document.title = "Mamadou SALL";
  }, []);

  return (
   
     <Container> 
        <RoutePage />
     </Container>
  

  );
}

export default App;
