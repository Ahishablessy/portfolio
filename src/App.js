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
                <Nav.Item  className='px-4'>
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
                <div className='my-4'>
                  {/* <p>Skilled in designing scalable state management solutions using Redux, including store configuration, reducers, and middleware. Experienced in optimizing performance with advanced Redux concepts like selectors (Reselect), normalized state, and Redux Thunk for side effects. Proficient in integrating Redux with React components for seamless data flow and improved maintainability. Expertise in client-side routing with React Router, including nested routes, protected routes, and code splitting for performance optimization. Experienced in managing route parameters and implementing navigation guards. Proficient in using core React hooks (useState, useEffect, useContext) for efficient functional components. Strong communication skills and Agile project experience.</p> */}
                  <ul>
  <li>Proficient in designing and implementing scalable state management solutions using Redux,including expertise in configuring stores, reducers, and middleware.</li>
  <li>Skilled in optimizing application performance using advanced Redux concepts such as selectors(Reselect), normalized state structures, and Redux Thunk for managing side effects.</li>
  <li>Experienced in integrating Redux with React components to enable seamless data flow andimprove application maintainability.</li>
  <li>Skilled in implementing client-side routing with React Router to build seamless and dynamicsingle-page applications (SPAs).</li>
  <li>Proficient in managing nested routes, implementing protected routes, and utilizing route-basedcode splitting to optimize application performance.</li>
  <li>Experienced in handling route parameters and implementing navigation guards to enhance userexperience and ensure application security.</li>
  <li>Proficient in leveraging core React hooks (e.g., useState, useEffect, useContext) to build dynamicand efficient functional components.</li>
  <li>Proficient in implementing design systems and component libraries such as Bootstrap orTailwind CSS</li>
  <li>Excellent Communication skills</li>
  <li>Attended the daily with development and management team</li>
  <li>Consistently ensured timely featured delivery in Agile Driven ProjectProficient</li>


</ul>  
                </div>
              )}
            </div>

          </div>
        </div>

        <div id="projects" className="scroll-content " style={{ paddingTop: '60px' }}>

          <div className='row '>
            <div className='col-lg-9 col-md-12 col-sm-12 col-12' style={{ height: '100vh', textAlign: 'center' }}>
              <h5 style={{ textAlign: "center" }}><strong>Projects</strong></h5>
              <div className='row px-4'>
                <div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
                  <div className="card mx-1 " style={{ background: "#222222" }}>
                    <div className="card-body">
                      <h5 className="card-title" style={{color:"orange"}}><strong>PLAY REVOLUION GAMES</strong></h5>
                      <p className="card-text text-white">Play Revolution Games is an online gaming platform offering a collection of over 100 interactive games, designed to provide users with an engaging experience. The games are developed using Unity WebGL, allowing for seamless integration into the website without the need for additional plugins. Built with React, the platform ensures a dynamic and responsive interface, while Bootstrap is used to guarantee a mobile-friendly design. The website is structured using HTML and styled with CSS for a clean and user-friendly layout. By leveraging react-unity-webgl, the games load efficiently and perform well across different devices. Whether for casual play or long gaming sessions, the site offers an accessible and enjoyable platform. The website can be accessed at <a href="https://www.playrevolutiongames.com" style={{color:"orange"}}  target="_blank" rel="noopener noreferrer">playrevolutiongames.com.</a></p>

                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                  <div className="card mx-1 " style={{ background: "#222222" }}>
                    <div className="card-body">
                      <h5 className="card-title" style={{color:"orange"}}><strong>WINLOTT</strong></h5>
                      <p className="card-text text-white">WinLott is a lottery-based application developed for Win-finity Gaming Private Limited, designed to provide users with an easy way to check lottery results daily. The application allows users to view upcoming lottery ticket advertisements on its interface, offering quick access to the details. Built using React for efficient, dynamic user interactions, the app also uses Bootstrap for responsive design, ensuring a seamless experience across devices. HTML and CSS are employed to structure and style the content. A key feature is the integration of @react-google-maps/api, providing location-based services or maps. This project offers a user-friendly interface for lottery enthusiasts to stay updated on results and upcoming tickets. It ensures accessibility and simplicity with a focus on smooth performance. The website can be accessed at <a href="https://winlott.in" style={{color:"orange"}}  target="_blank" rel="noopener noreferrer">winlott.in.</a></p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-12 col-sm-12 col-12 px-5' style={{ height: '100vh', textAlign: 'center' }}>
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


