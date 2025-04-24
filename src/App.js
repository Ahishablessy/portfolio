import { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import myimage from './images/mee.jpg'
import myimage1 from './images/mee1.jpg'
import contact from './images/contactgirl.png'
import award from './images/awardimage.jpg'
import Table from 'react-bootstrap/Table';
// import { FaHtml5 } from "react-icons/fa";
import { FaHtml5, FaReact, FaCss3Alt, FaJs, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { IoIosCall, IoMdMail, IoLogoLinkedin } from "react-icons/io";

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
    const pdfPath = 'Ahisha_resume.pdf'; // Adjust path if needed

    // Create an anchor element for download
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Ahisha_resume.pdf'; // This will set the name of the downloaded file
    link.click();
  }

  const opentomail = () =>
  {
    window.open('mailto:ahisharn@gmail.com')
  }

  const opentolinkedin = () =>
  {
    window.open("https://www.linkedin.com/in/ahisha-blessy-r-n-802a9921a")
  }

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
            <Navbar.Brand href="/portfolio" className=" ms-xl-5 ms-lg-5 ms-md-0 ms-sm-0 ms-0 ps-xl-5 ps-lg-5 ps-md-4 ps-sm-4 ps-4">
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

   

<div id="/portfolio" className="scroll-content heightset" style={{ paddingTop: "60px" }} >
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
      className={`scroll-content px-lg-5 px-md-5 px-sm-3 px-1 mx-lg-4 mx-md-1 mx-sm-0 mx-0 heightset ${isVisible ? 'slide-up' : ''}`}
      style={{ paddingTop: '60px' }}
    >
      <h3 style={{ textAlign: 'center' }} className=' my-lg-3 my-md-2 my-sm-2 my-2'>
        <strong className='underlined small'>About me</strong>
      </h3>

      <div className="row">
        <div className="col-lg-5 col-md-12 col-sm-12 col-12 px-lg-5 px-md-5 px-sm-3 px-3 my-lg-5 my-md-0 my-sm-0 my-0" style={{ textAlign: 'center' }}>
          <div className={`card ${isVisible ? 'slide-up' : ''}`} style={{ background: "#222222" }}>
            {/* <img className="card-img-top" src={myimage1} alt="Card image cap" /> */}
            <div className="card-body">
              <p className="card-text text-white">
                I’m Ahisha Blessy, a web developer dedicated to creating dynamic, responsive, and user-centric web applications. I focus on delivering innovative solutions that exceed client expectations.
              </p>
              <p className="card-text text-white">
                 I specialize in creating custom web applications that deliver both functionality and exceptional user experiences. 
              </p>
            </div>
          </div>

          <div className="row">
            <h5 style={{ textAlign: 'center', color: 'orange' }} className='mt-4 pb-2'>
              <strong>Skills</strong>
            </h5>
            {/* Assuming skills array exists */}
            {/* {skills.map((skill, item) => (
              <div key={item} className="col-lg-6 col-md-2 col-sm-6 col-6 my-lg-1 my-md-2 my-sm-2 my-2">
                <div style={{  background: '#222222', borderRadius: '6px' }} className='d-flex align-items-center justify-content-center'>
                  <span style={{ color: 'orange', fontSize: '35px' }} className='pb-2'>
                    <strong>{skill.icon} </strong>
                  </span>
                  <span style={{ color: 'white' }}>
                    <strong> {skill.name}</strong>
                  </span>
                </div>
              </div>
            ))} */}
            {skills.map((skill, item) => (
  <div key={item} className="col-lg-6 col-md-4 col-sm-6 col-6 my-lg-1 my-md-2 my-sm-2 my-2 ">
    <div 
      style={{ background: '#222222', borderRadius: '6px' }} 
    >
      <div className='row'>
        <div className='col-5 ' style={{textAlign:"end"}}>
      <span style={{ color: 'orange', fontSize: '35px'}}>
        <strong>{skill.icon}</strong>
      </span>
      </div>
      <div className='col-7 pt-3' style={{textAlign:"start"}}>
      <span style={{ color: 'white' }}>
        <strong>{skill.name}</strong>
      </span>
      </div>
      </div>
    </div>
  </div>
))}

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
            <Nav.Item className="">
              <Nav.Link eventKey="award" style={{ color: activeKey === 'award' ? 'orange' : 'white' }}>Award</Nav.Link>
            </Nav.Item>
          </Nav>

          {activeKey === 'education' && (
            <div className={`my-4 ${isVisible ? 'slide-up' : ''}`}>
              <p>
                I finished my 10th grade at Amala Convent Girls Higher Secondary School and continued my higher secondary education at Amala Convent Girls Higher Secondary School. Later, I completed my undergraduate studies at Bethlahem Institute of Engineering
              </p>
              <div className="my-3">
                <div className='card' style={{background:"#222222"}}>
                  <div className='card-body'>
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
              </div>
            </div>
          )}

          {activeKey === 'experience' && (
            <div className={`my-4 ${isVisible ? 'slide-up' : ''}`}>
             <ul>
                    <li>Proficient in scalable Redux architecture using slices, middleware, Reselect, normalized state, and Redux Thunk for side effects.</li>
                    <li>Experienced in integrating Redux with React for seamless data flow, maintainable codebases, and optimized component performance.</li>
                    <li>Proficient in implementing client-side routing using React Router for building seamless single-page applications (SPAs).</li>
                    <li>Proficient in using React hooks (useState, useEffect, useContext) to build dynamic and efficient functional components.</li>
                    <li>Experienced in using design systems like Bootstrap and media queries to build responsive and consistent user interfaces.</li>
                    <li>Strong communication skills; actively participated in daily stand-ups and ensured timely feature delivery in Agile-driven environments.</li>
                   


                  </ul>
            </div>
          )}

{activeKey === 'award' && (
            <div className={`my-4 ${isVisible ? 'slide-up' : ''}`}>
           <div className='row'>
           
            <div className='col-lg-7 col-md-6 col-sm-12 col-12 ' style={{ }}>
              <img src={award} style={{width:"100%", height:"auto",boxShadow:"5px 5px 15px #222222", borderRadius:"12px"}}/>
              </div>
              
              <div className='col-lg-5 col-md-6 col-sm-12 col-12'>
              <div className='card' style={{ background: "#222222" }}>
              <div className="card-body">
                <h5 className="text-white underlined" style={{textAlign:"center", fontSize:"19px"}}>Best Employee Award</h5>
                <p className="card-text text-white my-4" style={{textAlign:"center"}}>
                Our company awards one outstanding employee each month with the 'Employee of the Month' recognition.
                </p>
              <p className="card-text text-white" style={{textAlign:"center"}}>
              For me, Recipient of 'Best Employee Award' (July 2023) for outstanding performance and dedication, awarded with a cash prize .
                </p>
                </div>
                </div>
              </div>
            </div>
            </div>
          )}
        </div>
      </div>
    </div>


    <div
      id="projects"
      className={`scroll-content px-lg-4 px-md-2 px-sm-1 px-1 heightset ${visible ? 'zoom-in-out' : ''} `}
      style={{ paddingTop: '60px' }}
    >
      <h3 style={{ textAlign: 'center' }} className="my-2">
        <strong className='underlined small'>Projects</strong>
      </h3>
      <div className="row px-lg-5 px-md-2 px-sm-0 px-0 mx-lg-4 mx-md-1 mx-sm-0 mx-0 my-4">
        <div className="col-lg-12 col-md-12 col-sm-12 col-12" style={{ textAlign: 'center' }}>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 my-lg-0 my-md-1 my-sm-1 my-1">
              <div className="card" style={{ background: '#222222' }}>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: 'orange' }}>
                    <strong>PLAY REVOLUTION GAMES</strong>
                  </h5>
                  <p className="card-text text-white">
                  Play Revolution Games is an online gaming platform offering a collection of over 100 interactive games, designed to provide users with an engaging experience. The games are developed using Unity WebGL, allowing for seamless integration into the website without the need for additional plugins. Built with React, the platform ensures a dynamic and responsive interface, while Bootstrap is used to guarantee a mobile-friendly design. The website is structured using HTML and styled with CSS for a clean and user-friendly layout. By leveraging react-unity-webgl, the games perform well across different devices. Whether for casual play or long gaming sessions, the site offers an accessible and enjoyable platform. The website can be accessed at <a href="https://www.playrevolutiongames.com" style={{ color: "orange" }} target="_blank" rel="noopener noreferrer">playrevolutiongames.com.</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 my-lg-0 my-md-1 my-sm-1 my-1">
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
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 my-lg-0 my-md-1 my-sm-1 my-1">
              <div className="card" style={{ background: '#222222' }}>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: 'orange' }}>
                    <strong>QRDIN</strong>
                  </h5>
                  <p className="card-text text-white">
                  I was responsible for developing the admin panel of a QR-based food ordering platform. Users scan QR codes placed on tables to access digital menus and place orders seamlessly. I implemented backend integration to dynamically generate QR codes and enabled downloading and storing them on the frontend. Scanning the QR redirects users to the menu page, where orders placed are reflected in real time on the dashboard. I used Redux Toolkit and RTK Query for efficient state management and API handling. All API requests were secured using JWT authentication. The platform is deployed on Vercel for smooth performance and scalability.The admin panel can be accessed at <a href="https://qrdin-adminpanel1.vercel.app/" style={{ color: "orange" }} target="_blank" rel="noopener noreferrer"> qrdin-adminpanel</a> and an example QR redirect link is <a href=" https://qrdinn.github.io/Qrdinn/#/userid/26024d74-1007-4ab1-a68e-b5c7d1056f7a/tableid/1" style={{ color: "orange" }} target="_blank" rel="noopener noreferrer">click here.</a>
                                   </p>                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-3 col-md-12 col-sm-12 col-12 my-lg-0 my-md-1 my-sm-1 my-1" style={{ textAlign: 'center' }}>
          <div className="row">
            <h5 style={{ textAlign: 'center', color: 'orange' }}>
              <strong>Skills</strong>
            </h5>
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
        </div> */}
      </div>
    </div>


        <div
      id="contact"
      className={`scroll-content heightset ${visibility ? 'zoom-in' : 'zoom-out'}`}  // Using visible instead of isVisible
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
            <span >+91-9489404059</span>
          </div>
          <div className="my-4" onClick={opentomail} style={{cursor:"pointer"}}>
            <IoMdMail style={{ color: 'orange' }} />&nbsp;&nbsp;&nbsp;
            <span className='hovering'>ahisharn@gmail.com</span>
          </div>

          <div className="my-4" onClick={opentolinkedin} style={{cursor:"pointer"}}>
            <IoLogoLinkedin style={{ color: 'orange' }} />&nbsp;&nbsp;&nbsp;
            <span className='hovering'>Visit my linkedin page</span>
          </div>

        
          <div className="card mx-1 my-3" style={{ background: '#222222' }}>
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


