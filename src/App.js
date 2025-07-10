import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css'; // stilurile tale personalizate
import { Helmet } from "react-helmet";
import MyPicture from './../src/pictures/mypicture.jpg'
import DataBase from '../src/pictures/databaseimg.png'
import BootstrapLogo from '../src/pictures/bootstrap.jpeg'
import todoList from '../src/pictures/todolistLogo.png'

function App() {
  const [activeTab, setActiveTab] = useState('about');

  // Funcția din main.js mutată aici
  function afiseazaVarsta() {
    const varsta = 18;
    const persoana = 'Vasile';
    return varsta + 10;
  }



  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KJM8J4SP');
    `;
    document.head.appendChild(script);
  
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  

  return (
    <div className="App container my-4">

      {/* Navbar tab-uri */}
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'about' ? 'active' : ''}`} 
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'experience' ? 'active' : ''}`} 
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'cv' ? 'active' : ''}`} 
            onClick={() => setActiveTab('cv')}
          >
            MyCV
          </button>
        </li>
      </ul>

      {/* Conținut tab-uri */}
      <div className="tab-content mt-3">

        {activeTab === 'about' && (
          <div>
            <h2 className="about">Create Website</h2>
            <p className="text1">I'm a junior software developer with a passion for front and back-end development...</p>
            <p>My background is in Civil Engineering, yet I switched to the field of IT.</p>

            <div className="mypicture">
              <img className="pozamea" src={MyPicture} alt="LA" style={{ width: "15%" }} />

              <div className="container center">
                <div className="row">
                  <div className="col order-last">
                    <img src={todoList} alt="todolist" style={{ width: "35%" }} />
                    <h2>Todo list</h2>
                    <p>Todo list app challenge in Bootstrap with Firestore database integration.</p>
                  </div>
                  <div className="col">
                    <img src={DataBase} alt="databaseimg" style={{ width: "50%" }} />
                    <h2>Movie-database</h2>
                    <p>Example frontend to visualize database interaction.</p>
                  </div>
                  <div className="col order-first">
                    <img src={BootstrapLogo} alt="bootsrapimag" style={{ width: "50%" }} />
                    <h2>Bootstrap</h2>
                    <p>Bootstrap is a powerful front-end framework used to create modern websites and web apps.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="mt-4">
              <div className="row justify-content-center">
                <div className="col-md-5 text-center">
                  <img className="center2" src="pictures/IAlogo.jfif" alt="Logo" />
                  <p>Design and development solutions to compete in the modern marketplace.</p>
                  <strong>Contact Info</strong>
                  <p>(+44) 75178-29627<br />aritonionutz@yahoo.com</p>
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>{" "}
                  <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter-square"></i></a>{" "}
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <hr className="socket" />
              &copy; I.A.
            </footer>
          </div>
        )}

        {activeTab === 'experience' && (
          <div>
            <h2 className="experience">EXPERIENCE</h2>
            <p className="experiencetext text-center">12 week project based training course...</p>

            <div className="container-sm float-left">
              <h1>Experience about my learn path!</h1>
              <div className="img-article">
                <img className="img-fluid rounded mx-auto d-block" alt="Responsive" src='./pictures/jonas2.jpeg' />
                <h5 className="text-center">The Complete Javascript Course - Jonas Schmedtmann</h5>
              </div>

              <div className="media">
                <div className="avatar">
                  <img src="./pictures/itavatar.jpeg" width='55px' height="60px" alt="avatar" />
                </div>
                <div className="media-body">
                  <label>Ionut Ariton</label>
                  <span>15 FEB 2022</span>
                </div>
              </div>

              <div>
                <h5>1. Instructor</h5>
                <p>Jonas Schmedtmann, full-stack developer with a master’s in engineering.</p>
                <h5>2. Course structure</h5>
                <p>32 sections, 94+ hours of content.</p>
                <h5>3. About the course</h5>
                <p>Hands-on JavaScript training for beginners and intermediate developers.</p>
                <h5>4. Conclusion</h5>
                <p>Great experience that helped me grow as a developer.</p>
              </div>

              <div className="img-article">
                <img className="img-fluid rounded float-left" src='./pictures/Jonascertificate1.jpeg' width="500px" height="300px" alt="certificate" />
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col order-last">
                  <img src="pictures/jslogo.png" alt="jsimg" style={{ width: "30%" }} />
                </div>
                <div className="col">
                  <img src="pictures/css3logo.png" alt="css3img" style={{ width: "30%" }} />
                </div>
                <div className="col order-first">
                  <img src="pictures/html5logo.png" alt="htmlimg" style={{ width: "30%" }} />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'cv' && (
          <div>
            <a href="CV Ionut Ariton 2021 IT.pdf" target="_blank" rel="noreferrer">CV</a>
            <ul>
              <li>Iasi, Romania | M: +44 (0) 7517829627 | aritonionutz@yahoo.com</li>
              <li>Portfolio: www.out19pure.co.uk | GitHub: https://www.github.com/IonutDevBst</li>
              <li>LinkedIn: https://www.linkedin.com/in/ionutaritondev/</li>
            </ul>

            {/* Contact Form */}
            <div className="contact_me">
              <div className="contact_me_container container" id="contact_me">
                <div className="title row">
                  <h1>Contact Me</h1>
                </div>
                <div className="content row">
                  <div className="contact_me_form col-xl-6">
                    <form method="post" action="php/email.php">
                      <label htmlFor="name">Name:</label>
                      <input type="text" name="name" id="name" />
                      <label htmlFor="email">Email:</label>
                      <input type="text" name="email" id="email" />
                      <label htmlFor="phone_number">Phone Number:</label>
                      <input type="text" name="phone_number" id="phone_number" />
                      <label htmlFor="subject">Subject:</label>
                      <input type="text" name="subject" id="subject" />
                      <label htmlFor="message">Message:</label>
                      <textarea name="message" id="message" rows="5" cols="50"></textarea>
                      <input type="submit" name="submit" value="Submit" id="submit" />
                    </form>
                  </div>

                  <div className="contact_info col-xl-6">
                    <div className="social_media_buttons">
                      <div className="social_media_button">
                        <a href="https://www.facebook.com/ionutariton" target="_blank" rel="noreferrer"><i className="fa fa-facebook-square"></i></a>
                      </div>
                      <div className="social_media_button">
                        <a href="https://www.instagram.com/ionutariton/" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
                      </div>
                      <div className="social_media_button">
                        <a href="https://twitter.com/ionutariton" target="_blank" rel="noreferrer"><i className="fa fa-twitter-square"></i></a>
                      </div>
                      <div className="social_media_button">
                        <a href="https://www.linkedin.com/in/ionutaritondev/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
                      </div>
                      <div className="social_media_button">
                        <a href="https://github.com/IonutDevBst" target="_blank" rel="noreferrer"><i className="fa fa-github-square"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>

      {/* Exemplu apel funcție */}
      <div className="mt-5">
        <p>Exemplu afisare varsta: {afiseazaVarsta()}</p>
      </div>
    </div>
  );
}

export default App;
