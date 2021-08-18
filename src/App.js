import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Row, Col, Card, CardGroup, ListGroup } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/components/Home/Home";
import Week_1 from "./components/week_1/Week_1";
import Week_2 from "./components/week_2/Week_2";
import { Link } from "react-router-dom";
import Dev_M from "./components/Developers/Dev-M/Dev_M";
import Dev_N from "./components/Developers/Dev-N/Dev_N";
import Dev_E from "./components/Developers/Dev-E/Dev_E";
import Dev_B from "./components/Developers/Dev-B/Dev_B";
import Graphs from "./components/Graphs/Graphs";

// https://react-bootstrap.netlify.app/components/dropdowns/#menu-headers

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Trading-Bot</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#pricing"></Nav.Link>
                <NavDropdown title="Developers" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/dev-m">Marcus Info</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/dev-n">Nathan Info</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/dev-b">Benny Info</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/dev-e">
                    Emmanuel Info
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Weeks" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/week-1">Week # 1</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/week-2">Week # 2</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="/graphs">Graphs</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Future Plans
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* ========= ALL Routes ========= */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/week-1">
              <Week_1 />
            </Route>
            <Route exact path="/week-2">
              <Week_2 />
            </Route>
            <Route exact path="/dev-m">
              <Dev_M />
            </Route>

            <Route exact path="/dev-n">
              <Dev_N />
            </Route>
            <Route exact path="/dev-b">
              <Dev_B />
            </Route>
            <Route exact path="/dev-e">
              <Dev_E />
            </Route>
            <Route exact path="/graphs">
              <Graphs />
            </Route>
            <Route exact path="/future"></Route>
          </Switch>
        </div>

        {/* footer */}
        <Navbar
          className="footer"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand href="https://github.com/44nash/Trading-Bot-project-2">
              Github Code (Click me)
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    </Router>
  );
}

export default App;
