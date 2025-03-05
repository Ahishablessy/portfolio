import { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import myimage from './images/mee.jpg'
import myimage1 from './images/mee1.jpg'
import contact from './images/contactgirl.png'
import Table from 'react-bootstrap/Table';
// import { FaHtml5 } from "react-icons/fa";
import { FaHtml5, FaReact, FaCss3Alt, FaJs, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { IoIosCall, IoMdMail } from "react-icons/io";
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

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
    const pdfPath = '/Ahisha_resume.pdf'; // Adjust path if needed

    // Create an anchor element for download
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Ahisha_resume.pdf'; // This will set the name of the downloaded file
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


  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const [status, setStatus] = useState(null);


  const onSubmit = (data) => {
    emailjs.send(
      'service_hn0acup',  
      'template_i02exqu',  
      {
        from_name: data.email,
        to_email: 'ahisharn@gmail.com',  // Add the recipient email
        message: data.message,                 
      },
      'tFhDUhAHcj9S8O2lI'  
    )
    .then(
      (response) => {
        console.log("SUCCESS", response);
        setStatus("success");
        reset(); 
      },
      (error) => {
        console.error("Email sending error:", error);
        setStatus("error");
      }
    );
  };
  

  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );
    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const [visible, setVisible] = useState(false);  // Changed isVisible to visible and setVisible

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true); // Element is visible, apply animation
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );
    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibility(true); // Trigger zoom-in animation when the section is visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);



  return (
    <>
      <div className='text-white '>
        <Navbar expand="lg" className=" sticky-top text-white" style={{ background: "black" }} expanded={expanded}>
          <Container fluid>
            {/* Move the Navbar.Brand a little bit to the left */}
            <Navbar.Brand href="/" className=" ms-xl-5 ms-lg-5 ms-md-0 ms-sm-0 ms-0 ps-xl-5 ps-lg-5 ps-md-4 ps-sm-4 ps-4">
            <strong style={{background: "linear-gradient(to top, white, orange)", color: "transparent", backgroundClip: "text"}}>Ahisha Blessy R N</strong>
            </Navbar.Brand>
            <Navbar.Toggle 
              aria-controls="navbarScroll"
              onClick={() => setExpanded(!expanded)} // Toggle navbar visibility
            />
            <Navbar.Collapse id="navbarScroll" >
              <Nav className="ms-auto me-5 pe-5 my-2 my-lg-0" style={{ maxHeight: '165px' }} navbarScroll>
                <Nav.Link href="/portfolio" style={{ color: "white" }}  onMouseEnter={(e) => e.target.style.color = 'orange'} onMouseLeave={(e) => e.target.style.color = 'white'} className=" ps-4" onClick={handleNavLinkClick}>Home</Nav.Link>
                <Nav.Link href="#about" style={{ color: "white" }}  onMouseEnter={(e) => e.target.style.color = 'orange'} onMouseLeave={(e) => e.target.style.color = 'white'} className=" ps-4" onClick={handleNavLinkClick}>About</Nav.Link>
                <Nav.Link href="#projects" style={{ color: "white" }}  onMouseEnter={(e) => e.target.style.color = 'orange'} onMouseLeave={(e) => e.target.style.color = 'white'} className=" ps-4" onClick={handleNavLinkClick}>Projects</Nav.Link>
                <Nav.Link href="#contact" style={{ color: "white" }}  onMouseEnter={(e) => e.target.style.color = 'orange'} onMouseLeave={(e) => e.target.style.color = 'white'} className="ps-4" onClick={handleNavLinkClick}>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

   

<div id="/portfolio" className="scroll-content" style={{ paddingTop: "60px" }} >
  <div className="row px-lg-5 px-md-0 px-sm-0 px-0 mx-lg-5 mx-md-0 mx-sm-0 mx-0">
    
    <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center" style={{ textAlign: 'start' }}>
      <div className="slide-left">
        <img src={myimage} style={{ clipPath: "ellipse(50% 50%)", border: "2px solid orange", background: "orange", boxShadow: "10px 10px orange" }} />
      </div>
    </div>
    
    <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center" style={{ textAlign: 'center' }}>
      <div className="slide-right">
        <p className='my-lg-1 my-md-3 my-sm-3 my-3'>Hi, I'm</p>
        <h1 style={{ color: "orange" }}><strong>Ahisha Blessy R N</strong></h1>
        <p>I am Professional web developer</p>
        <p>2+ years experience(React js)</p>
        <button style={{ background: "orange", border: "none", borderRadius: "6px", color: "white", fontWeight: "700", padding: "4px 10px" }} onClick={getmyresume}>Get my Resume</button>
      </div>
    </div>

  </div>
</div>




<div
      id="about"
      className={`scroll-content px-lg-5 px-md-5 px-sm-3 px-1 mx-lg-4 mx-md-1 mx-sm-0 mx-0 ${isVisible ? 'slide-up' : ''}`}
      style={{ paddingTop: '60px' }}
    >
      <h3 style={{ textAlign: 'center' }} className=' my-lg-3 my-md-2 my-sm-2 my-2'>
        <strong className='underlined small'>About me</strong>
      </h3>

      <div className="row">
        <div className="col-lg-5 col-md-12 col-sm-12 col-12 px-lg-5 px-md-5 px-sm-3 px-3 my-lg-5 my-md-0 my-sm-0 my-0" style={{ textAlign: 'center' }}>
          <div className={`card ${isVisible ? 'slide-up' : ''}`} style={{ background: "#222222" }}>
            <img className="card-img-top" src={myimage1} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text text-white">
                I’m Ahisha Blessy, a web developer dedicated to creating dynamic, responsive, and user-centric web applications. I focus on delivering innovative solutions that exceed client expectations.
              </p>
              <p className="card-text text-white">
                I specialize in creating custom web applications that deliver both functionality and exceptional user experiences. Below are two of my featured projects:
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-7 col-md-12 col-sm-12 col-12 px-lg-5 px-md-5 px-sm-3 px-3 my-4">
          <Nav variant="underline" activeKey={activeKey} onSelect={handleSelect}>
            <Nav.Item>
              <Nav.Link eventKey="education" style={{ color: activeKey === 'education' ? 'orange' : 'white' }}>Education</Nav.Link>
            </Nav.Item>
            <Nav.Item className="px-4">
              <Nav.Link eventKey="experience" style={{ color: activeKey === 'experience' ? 'orange' : 'white' }}>Experience</Nav.Link>
            </Nav.Item>
          </Nav>

          {activeKey === 'education' && (
            <div className={`my-4 ${isVisible ? 'slide-up' : ''}`}>
              <p>
                I finished my 10th grade at Amala Convent Girls Higher Secondary School and continued my higher secondary education at Amala Convent Girls Higher Secondary School. Later, I completed my undergraduate studies at Bethlahem Institute of Engineering
              </p>
              <div className="my-3">
                <Table striped bordered hover size="sm " className="my-4">
                  <thead>
                    <tr>
                      <th style={{ background: 'black', color: 'white', textAlign: 'center', padding: '15px' }}>Education</th>
                      <th style={{ background: 'black', color: 'white', textAlign: 'center', padding: '15px' }}>Institution & Year of Passing</th>
                      <th style={{ background: 'black', color: 'white', textAlign: 'center', padding: '15px' }}>Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ background: 'black', color: 'white', textAlign: 'center', padding: '15px' }}>BE(CSE)</td>
                      <td style={{ background: 'black', color: 'white', textAlign: 'center', padding: '15px' }}>Bethlahem Institute of Engineering</td>
                      <td style={{ background: 'black', color: 'white', textAlign: 'center', padding: '15px' }}>86%</td>
                    </tr>
                    <tr>
                      <td style={{ background: 'black', color: 'white', textAlign: 'center', padding: '15px' }}>12th</td>
                      <td style={{ background: 'black', color: 'white', textAlign: 'center', padding: '15px' }}>Amala Convent Girls Hr Sec School</td>
                      <td style={{ background: 'black', color: 'white', textAlign: 'center', padding: '15px' }}>75%</td>
                    </tr>
                    <tr>
                      <td style={{ background: 'black', color: 'white', textAlign: 'center', padding: '15px' }}>10th</td>
                      <td style={{ background: 'black', color: 'white', textAlign: 'center', padding: '15px' }}>Amala Convent Girls Hr Sec School</td>
                      <td style={{ background: 'black', color: 'white', textAlign: 'center', padding: '15px' }}>90%</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          )}

          {activeKey === 'experience' && (
            <div className={`my-4 ${isVisible ? 'slide-up' : ''}`}>
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


    <div
      id="projects"
      className={`scroll-content px-lg-4 px-md-2 px-sm-1 px-1 ${visible ? 'zoom-in-out' : ''} `}
      style={{ paddingTop: '60px' }}
    >
      <h3 style={{ textAlign: 'center' }} className="my-2">
        <strong className='underlined small'>Projects</strong>
      </h3>
      <div className="row px-lg-5 px-md-2 px-sm-0 px-0 mx-lg-4 mx-md-1 mx-sm-0 mx-0 my-4">
        <div className="col-lg-9 col-md-12 col-sm-12 col-12" style={{ textAlign: 'center' }}>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 my-lg-0 my-md-1 my-sm-1 my-1">
              <div className="card" style={{ background: '#222222' }}>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: 'orange' }}>
                    <strong>PLAY REVOLUTION GAMES</strong>
                  </h5>
                  <p className="card-text text-white">
                  Play Revolution Games is an online gaming platform offering a collection of over 100 interactive games, designed to provide users with an engaging experience. The games are developed using Unity WebGL, allowing for seamless integration into the website without the need for additional plugins. Built with React, the platform ensures a dynamic and responsive interface, while Bootstrap is used to guarantee a mobile-friendly design. The website is structured using HTML and styled with CSS for a clean and user-friendly layout. By leveraging react-unity-webgl, the games load efficiently and perform well across different devices. Whether for casual play or long gaming sessions, the site offers an accessible and enjoyable platform. The website can be accessed at <a href="https://www.playrevolutiongames.com" style={{ color: "orange" }} target="_blank" rel="noopener noreferrer">playrevolutiongames.com.</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 my-lg-0 my-md-1 my-sm-1 my-1">
              <div className="card" style={{ background: '#222222' }}>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: 'orange' }}>
                    <strong>WINLOTT</strong>
                  </h5>
                  <p className="card-text text-white">
                  WinLott is a lottery-based application developed for Win-finity Gaming Private Limited, designed to provide users with an easy way to check lottery results daily. The application allows users to view upcoming lottery ticket advertisements on its interface, offering quick access to the details. Built using React for efficient, dynamic user interactions, the app also uses Bootstrap for responsive design, ensuring a seamless experience across devices. HTML and CSS are employed to structure and style the content. A key feature is the integration of @react-google-maps/api, providing location-based services or maps. This project offers a user-friendly interface for lottery enthusiasts to stay updated on results and upcoming tickets. The website can be accessed at <a href="https://winlott.in" style={{ color: "orange" }} target="_blank" rel="noopener noreferrer">winlott.in.</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-12 col-sm-12 col-12 my-lg-0 my-md-1 my-sm-1 my-1" style={{ textAlign: 'center' }}>
          <div className="row">
            <h5 style={{ textAlign: 'center', color: 'orange' }}>
              <strong>Skills</strong>
            </h5>
            {/* Assuming skills array exists */}
            {skills.map((skill, item) => (
              <div key={item} className="col-lg-6 col-md-2 col-sm-6 col-6 my-lg-1 my-md-2 my-sm-2 my-2">
                <div style={{ background: '#222222', borderRadius: '6px' }} className="py-2">
                  <p style={{ color: 'orange', fontSize: '35px' }}>
                    <strong>{skill.icon} </strong>
                  </p>
                  <p style={{ color: 'white' }}>
                    <strong> {skill.name}</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>


        <div
      id="contact"
      className={`scroll-content ${visibility ? 'zoom-in' : 'zoom-out'}`}  // Using visible instead of isVisible
      style={{ paddingTop: '60px', paddingBottom: '30px' }}
    >
      <h3 style={{ textAlign: 'center' }}>
        <strong className='underlined small'>Contact</strong>
      </h3>
      <div className="row px-lg-5 px-md-2 px-sm-1 px-1 mx-lg-3 mx-md-1 mx-sm-1 mx-1">
        <div className="col-lg-6 col-md-12 col-sm-12 col-12 px-lg-5 px-md-2 px-sm-1 px-1">
          <h4 style={{ color: 'orange' }}>
            <strong>Let's get in touch</strong>
          </h4>
          <div className="my-4">
            <IoIosCall style={{ color: 'orange' }} />&nbsp;&nbsp;&nbsp;
            <span>+91-9489404059</span>
          </div>
          <div className="my-4">
            <IoMdMail style={{ color: 'orange' }} />&nbsp;&nbsp;&nbsp;
            <span>ahisharn@gmail.com</span>
          </div>
          <div className="card mx-1 " style={{ background: '#222222' }}>
            <div className="card-body">
              <h5
                className="card-title"
                style={{ color: 'orange', textAlign: 'center' }}
              >
                <strong>SEND A MESSAGE</strong>
              </h5>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="my-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    style={{
                      background: 'black',
                      color: 'white',
                      border: '1px solid white',
                      borderRadius: '6px',
                      width: '100%',
                    }}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                  {errors.email && <span style={{ color: 'red', fontSize:"14px" }}>{errors.email.message}</span>}
                </div>

                <div className="my-4">
                  <textarea
                    rows={4}
                    placeholder="Send message to me..."
                    style={{
                      background: 'black',
                      color: 'white',
                      border: '1px solid white',
                      borderRadius: '6px',
                      width: '100%',
                    }}
                    {...register('message', {
                      required: 'Message is required',
                      minLength: {
                        value: 10,
                        message: 'Message must be at least 10 characters long',
                      },
                    })}
                  />
                  {errors.message && <span style={{ color: 'red', fontSize:"14px"  }}>{errors.message.message}</span>}
                </div>

                <div className="my-4" style={{ textAlign: 'center' }}>
                  <button
                    type="submit"
                    style={{
                      background: 'orange',
                      border: 'none',
                      borderRadius: '6px',
                      color: 'white',
                      fontWeight: '700',
                      padding: '4px 10px',
                    }}
                  >
                    Send
                  </button>
                </div>
              </form>


            {status === "success" && <p style={{ color: "green", textAlign:"center" }}>Message sent successfully!</p>}
            {status === "error" && <p style={{ color: "red" , textAlign:"center" }}>Failed to send message. Try again.</p>}
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 d-lg-block d-md-none d-sm-none d-none pt-5 px-5">
          <img src={contact} className="px-5" />
        </div>
      </div>
    </div>
      </div>
    </>
  );
}

export default App;


