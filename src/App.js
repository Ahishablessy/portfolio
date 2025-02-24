import { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import myimage from './images/mee.jpg'
import myimage1 from './images/mee1.jpg'
import Table from 'react-bootstrap/Table';
// import { FaHtml5 } from "react-icons/fa";
import { FaHtml5, FaReact, FaCss3Alt, FaJs, FaBootstrap, FaGitAlt } from 'react-icons/fa';

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

  const [activeKey, setActiveKey] = useState('education'); // Track the active tab

  const handleSelect = (key) => {
    setActiveKey(key); // Set the active tab when a tab is clicked
  };

  const getmyresume = () => {
    debugger
    const link = document.createElement('a');
    link.href = '../public/Ahisha_resume.pdf'; // Path to your PDF file
    link.download = 'Ahisha_resume.pdf'; // The name that the downloaded file will have
    link.click();
  }

  // const skills = ['React', 'Html', 'Css', 'Javascript', 'Bootstrap', 'Git']

  const skills = [
    { icon: <FaReact />, name: 'React' },
    { icon: <FaHtml5 />, name: 'HTML' },
    { icon: <FaCss3Alt />, name: 'CSS' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaBootstrap />, name: 'Bootstrap' },
    { icon: <FaGitAlt />, name: 'Git' },
  ];

  return (
    <>
      <div className='text-white '>
        <Navbar expand="lg" className=" sticky-top text-white" style={{ background: "black" }} expanded={expanded}>
          <Container fluid>
            {/* Move the Navbar.Brand a little bit to the left */}
            <Navbar.Brand href="#" className="text-white ms-xl-5 ms-lg-5 ms-md-0 ms-sm-0 ms-0 ps-xl-5 ps-lg-5 ps-md-4 ps-sm-4 ps-4">
              <strong >Ahisha Blessy R N</strong>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="navbarScroll"
              onClick={() => setExpanded(!expanded)} // Toggle navbar visibility
            />
            <Navbar.Collapse id="navbarScroll" >
              <Nav className="ms-auto me-5 pe-5 my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                <Nav.Link href="#home" style={{ color: "orange" }} className="text-white ps-4" onClick={handleNavLinkClick}>Home</Nav.Link>
                <Nav.Link href="#about" style={{ color: "orange" }} className="text-white ps-4" onClick={handleNavLinkClick}>About</Nav.Link>
                <Nav.Link href="#projects" style={{ color: "orange" }} className="text-white ps-4" onClick={handleNavLinkClick}>Projects</Nav.Link>
                <Nav.Link href="#contact" style={{ color: "orange" }} className="text-white ps-4" onClick={handleNavLinkClick}>Contact</Nav.Link>
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

        <div id="home" className="scroll-content" style={{ height: "100vh", paddingTop: "60px" }} >
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center" style={{ textAlign: 'center' }}>
              <div>
                <img src={myimage} style={{ clipPath: "ellipse(75% 50%)", border: "2px solid" }} />
              </div>

            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center" style={{ textAlign: 'center' }}>
              <div>
                <p>Hi, I'm</p>
                <h1 style={{ color: "orange" }}><strong>Ahisha Blessy R N</strong></h1>
                <p>I am Professional web developer</p>
                <p>2+ years experience(React js)</p>
                <button style={{ background: "orange", border: "none", borderRadius: "6px", color: "white", fontWeight: "700", padding: "4px 10px" }} onClick={getmyresume}>Get my Resume</button>

              </div>
            </div>

          </div>

        </div>


        <div id="about" className="scroll-content px-lg-5 px-md-2 px-sm-0 px-0" >
          <h5 style={{ textAlign: "center" }}><strong>About me</strong></h5>
          <div className='row'>
            <div className='col-lg-5 col-md-12 col-sm-12 col-12 px-5 d-flex justify-content-center align-items-center' style={{ height: '100vh', textAlign: 'center' }}>
              <div className="card mx-lg-4 mx-md-1 px-sm-0 px-0" style={{ background: "#222222" }}>
                <img className="card-img-top" src={myimage1} alt="Card image cap" />
                <div className="card-body">
                  {/* <h5 className="card-title text-white">Card title</h5> */}
                  <p className="card-text text-white">I’m Ahisha Blessy, a web developer dedicated to creating dynamic, responsive, and user-centric web applications. I focus on delivering innovative solutions that exceed client expectations.</p>
                  <p className="card-text text-white">I specialize in creating custom web applications that deliver both functionality and exceptional user experiences. Below are two of my featured projects:</p>
                </div>
              </div>
            </div>
            <div className='col-lg-7 col-md-12 col-sm-12 col-12 my-4' style={{ height: '100vh' }}>

              <Nav variant="underline" activeKey={activeKey} onSelect={handleSelect}>
                <Nav.Item>
                  <Nav.Link eventKey="education" style={{ color: activeKey === 'education' ? 'orange' : 'white' }}>Education</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="experience" style={{ color: activeKey === 'experience' ? 'orange' : 'white' }}>Experience</Nav.Link>
                </Nav.Item>
              </Nav>

              {/* Conditional content based on the active tab */}
              {activeKey === 'education' && (
                <div className='my-4'>
                  <p>I finished my 10th grade at Amala Convent Girls Higher Secondary School and continued my higher secondary education at Amala Convent Girls Higher Secondary School. Later, I completed my undergraduate studies at Bethlahem Institue of Engineering</p>
                  <div className='my-3'>
                    <Table striped bordered hover size="sm " className='my-4'>
                      <thead>
                        <tr>
                          <th style={{background:"black", color:"white", textAlign:"center", padding:"15px"}}>Education</th>
                          <th style={{background:"black", color:"white", textAlign:"center", padding:"15px"}}>Institution & Year of Passing</th>
                          <th style={{background:"black", color:"white", textAlign:"center", padding:"15px"}}>Percentage</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr >
                          <td style={{background:"black", color:"white", textAlign:"center", padding:"15px"}}> BE(CSE)</td>
                          <td style={{background:"black", color:"white", textAlign:"center", padding:"15px"}}>Bethlahem Institute of Engineering</td>
                          <td style={{background:"black", color:"white", textAlign:"center", padding:"15px"}}>86%</td>
                        </tr>
                        <tr>
                          <td style={{background:"black", color:"white", textAlign:"center", padding:"15px"}}>12th</td>
                          <td style={{background:"black", color:"white", textAlign:"center", padding:"15px"}}>Amala Convent Girls Hr Sec School </td>
                          <td style={{background:"black", color:"white", textAlign:"center", padding:"15px"}}>75%</td>
                        </tr>
                        <tr>
                        <td style={{background:"black", color:"white", textAlign:"center", padding:"15px"}}>10th</td>
                          <td style={{background:"black", color:"white", textAlign:"center", padding:"15px"}}>Amala Convent Girls Hr Sec School</td>
                          <td style={{background:"black", color:"white", textAlign:"center", padding:"15px"}}>90%</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              )}

              {activeKey === 'experience' && (
                <div>
                  <h2>Experience Content</h2>
                  <p>This is some content related to experience.</p>
                </div>
              )}
            </div>

          </div>
        </div>

        <div id="projects" className="scroll-content" style={{ paddingTop: '60px' }}>

          <div className='row '>
            <div className='col-lg-9 col-md-12 col-sm-12 col-12' style={{ height: '100vh', textAlign: 'center' }}>
              <h5 style={{ textAlign: "center" }}><strong>Projects</strong></h5>
              <div className='row px-4'>
                <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
                  <div className="card mx-1 " style={{ background: "#222222" }}>
                    <div className="card-body">
                      <h5 className="card-title" style={{color:"orange"}}><strong>PLAY REVOLUION GAMES</strong></h5>
                      <p className="card-text text-white">PlayRevolutionGames is an online gaming platform featuring over 100 interactive games. Developed using Unity WebGL, it offers seamless gameplay directly in web browsers without additional plugins. The platform integrates games into a responsive and user-friendly interface, ensuring smooth performance across devices. Built with React and styled with Bootstrap, it provides a mobile-friendly experience. Games range from puzzles to action-packed adventures, catering to a wide audience. The application leverages React-Unity WebGL for flawless integration of Unity games. Players can enjoy a diverse collection of engaging games with minimal loading time. The platform’s goal is to offer a fun, interactive space for users to unwind and challenge themselves. It’s designed for easy navigation, making it simple for users to start playing instantly.</p>

                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                  <div className="card mx-1 " style={{ background: "#222222" }}>
                    <div className="card-body">
                      <h5 className="card-title" style={{color:"orange"}}><strong>WINLOTT</strong></h5>
                      <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-12 col-sm-12 col-12' style={{ height: '100vh', textAlign: 'center' }}>
              <h5 style={{ textAlign: "center" }}><strong>Skills</strong></h5>
              <div className='row'>
              {skills.map((skill, item) => (
  <div 
    key={item} 
    style={{ background: "#222222", borderRadius: "6px"}} 
    className='my-1 p-1 col-lg-6 col-md-2 col-sm-4 col-4'
  >
     <p style={{ color: "orange", fontSize:"35px" }}>
      <strong>{skill.icon} </strong>
    </p>
    <p style={{ color: "white" }}>
      <strong> {skill.name}</strong>
    </p>
  </div>
))}
              </div>
            </div>
          </div>
        </div>


        <div id="contact" className="scroll-content" style={{ height: '100vh', paddingTop: '60px' }}>
          <h5 style={{ textAlign: "center" }}><strong>Contact me</strong></h5>
          <div className='row'>
            <div className='col-6'>

            </div>
            <div className='col-6'>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


