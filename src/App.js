import { Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";
import Calculadora from "./componentes/calculadora";
import Newton from "./componentes/newton";
import Referencias from "./componentes/referencias";

function App() {
  return (
    <div>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container style={{ maxWidth: "800px", width: "100%" }}>
          <Navbar.Brand>Calculadora Vectorial</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#newton">Newton</Nav.Link>
            <Nav.Link href="#calculadora">Calculadora</Nav.Link>
            <Nav.Link href="#referencias">Referencias</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div
        id="newton"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Newton />
        <Calculadora />
        <Referencias />
      </div>
    </div>
  );
}

export default App;
