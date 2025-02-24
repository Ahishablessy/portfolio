import { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

function App() {
  // State to control navbar collapse
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    });

    const elements = document.querySelectorAll('.scroll-content');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

 

  // Function to handle the collapse behavior
  const handleNavLinkClick = () => {
    setExpanded(false); // Close the navbar when a link is clicked
  };

  


  return (
    <>
    <div className='text-white '>
      <Navbar expand="lg" className=" sticky-top text-white" style={{background:"black"}} expanded={expanded}>
      <Container fluid>
          {/* Move the Navbar.Brand a little bit to the left */}
          <Navbar.Brand href="#" className="text-white ms-xl-5 ms-lg-5 ms-md-0 ms-sm-0 ms-0 ps-xl-5 ps-lg-5 ps-md-4 ps-sm-4 ps-4">
            <strong>Ahisha Blessy</strong>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            onClick={() => setExpanded(!expanded)} // Toggle navbar visibility
          />
          <Navbar.Collapse id="navbarScroll" >
            <Nav className="ms-auto me-5 pe-5 my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="#home" className="text-white ps-4" onClick={handleNavLinkClick}>Home</Nav.Link>
              <Nav.Link href="#about" className="text-white ps-4" onClick={handleNavLinkClick}>About</Nav.Link>
              <Nav.Link href="#projects" className="text-white ps-4" onClick={handleNavLinkClick}>Projects</Nav.Link>
              <Nav.Link href="#contact" className="text-white ps-4" onClick={handleNavLinkClick}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Content Sections */}
      {/* <div id="home" className="scroll-content" style={{  paddingTop: '60px' ,textAlign:"center" }}>
      <div className="row" >
  <div className="col-lg-6 col-md-12 col-sm-12 col-12 " style={{height: '100vh'}}>

    <p>Hi,</p>
    <p>Junior Software Engineer</p>
  
  </div>
  <div className="col-lg-6 col-md-12 col-sm-12 col-12 " style={{height: '100vh'}}>
    dfwerfet
  </div>
</div>

      </div> */}

<div id="home" className="scroll-content"  style={{ height: '100vh'}}>
  <div className="row">
    <div  className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center" style={{ height: '100vh', textAlign: 'center' }}>
      <div>
        <p>Hi,</p>
        <p>Junior Software Engineer</p>
        <button>Image</button>
        
      </div>
<p>Skills</p>

    </div>
    <div  className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center" style={{ height: '100vh', textAlign: 'center' }}>
    <div>
        <p>Hi,</p>
        <p>Junior Software Engineer</p>
        <button>Get my Resume</button>
        
      </div>
    </div>
  </div>
</div>

   
      <div id="about" className="scroll-content" style={{ height: '100vh'}}>
        <h1>Link Section</h1>
        <p>Another content that fades in when scrolled into view.</p>
      </div>

      <div id="projects" className="scroll-content" style={{ height: '100vh', paddingTop: '60px' }}>
        <h1>Link Section</h1>
        <p>Another content that fades in when scrolled into view.</p>
      </div>


      <div id="contact" className="scroll-content" style={{ height: '100vh', paddingTop: '60px' }}>
        <h1>Link Section</h1>
        <p>Another content that fades in when scrolled into view.</p>
      </div>
      </div>
    </>
  );
}

export default App;


