import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import { style } from "glamor";
import { RiWhatsappFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ContactData = contactPageData.contactSection;

function Contact(props) {
  const theme = props.theme;

  const buttonStyles = style({
    backgroundColor: theme.accentBright,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  const sectionStyles = {
    container: {
      display: 'flex',
      width: '100%',
      height: '50vh', // Adjust the height as needed
    },
    left: {
      flex: 1,
      backgroundColor: '#f0f0f0', // Example background color for the left div
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#000', // Example text color
      fontSize: '24px', // Example text size
      textAlign: 'center', // Center align text
    },
    right: {
      flex: 1,
      backgroundColor: '#e0e0e0', // Example background color for the right div
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#000', // Example text color
      fontSize: '24px', // Example text size
      textAlign: 'center', // Center align text
    },
  };

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                className="profile-pic"
                src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                alt="Profile"
              />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia />
              <br />
              <br />
              <a {...buttonStyles} className="general-btn" href={greeting.resumeLink}>
                See my Resume
              </a>
            </div>
          </div>
        </Fade>

        {/* Message form and contact section */}
        <section className="contact section">
          <span className="section__subtitle" style={{ color: theme.text }}>Get in touch</span>
          <h3 className="section__title" style={{ color: theme.text }}>Contact Me</h3>

          <div className="contact__container container grid">
            <div className="contact__content">
              <h3 className="contact__title contact__title-info" style={{ color: theme.text }}>Talk to me</h3>

              <div className="contact__info">
                <div className="contact__card" style={{ backgroundColor: theme.projectCard, color: theme.text }}>
                  <i className='bx bx-mail-send contact__card-icon' style={{ color: theme.text }}></i>
                  <h3 className="contact__card-title" style={{ color: theme.text }}>Email</h3>
                  <span className="contact__card-data" style={{ color: theme.secondaryText }}>mohmdanish0123@gmail.com</span>
                  <a href="mailto:srijm941@gmail.com" target="_blank" className="contact__button general-btn" style={{ color: theme.text }}>
                    Write Me <SiGmail />
                  </a>
                </div>

                <div className="contact__card" style={{ backgroundColor: theme.projectCard, color: theme.text }}>
                  <i className='bx bxl-whatsapp contact__card-icon' style={{ color: theme.text }}></i>
                  <h3 className="contact__card-title" style={{ color: theme.text }}>Whatsapp</h3>
                  <span className="contact__card-data" style={{ color: theme.secondaryText }}>8112701652</span>
                  <a href="https://api.whatsapp.com/send?phone=+918112701652&text=Hey there!" target="_blank" className="contact__button general-btn" style={{ color: theme.text }} >
                    Write Me <RiWhatsappFill />
                  </a>
                </div>

                <div className="contact__card" style={{ backgroundColor: theme.projectCard, color: theme.text }}>
                  <i className='bx bxl-twitter contact__card-icon' style={{ color: theme.text }}></i>
                  <h3 className="contact__card-title" style={{ color: theme.text }}>Twitter</h3>
                  <span className="contact__card-data" style={{ color: theme.secondaryText }}>Danish_dk_1</span>
                  <a href="https://x.com/Danish_dk_1" target="_blank" className="contact__button general-btn" style={{ color: theme.text }}>
                    Write Me <FaTwitter />
                  </a>
                </div>
              </div>
            </div>

            <div className="contact__content contact-form-div">
              <h3 className="contact__title contact__title-form" style={{ color: theme.text }}>Write Me your Message</h3>

              <form action="" className="contact__form">
                <div className="contact__form-div" style={{ color: theme.text }}>
                  <label htmlFor="" className="contact__form-tag" style={{ backgroundColor: theme.body, color: theme.text }}>Name</label>
                  <input type="text" placeholder="Enter name" className="contact__form-input" style={{ backgroundColor: theme.inputBackground, color: theme.text }} />
                </div>
                <br />
                <div className="contact__form-div" style={{ color: theme.text }}>
                  <label htmlFor="" className="contact__form-tag" style={{ backgroundColor: theme.body, color: theme.text }}>Mail</label>
                  <input type="text" placeholder="Enter email" className="contact__form-input" style={{ backgroundColor: theme.inputBackground, color: theme.text }} />
                </div>
                <br />
                <div className="contact__form-div contact__form-area" style={{color: theme.text }}>
                  <label htmlFor="" className="contact__form-tag" style={{backgroundColor: theme.body, color: theme.text }}>Message</label>
                  <textarea name="" id="" cols="30" rows="10" placeholder="Write your Message" className="contact__form-input" style={{ backgroundColor: theme.inputBackground, color: theme.text }}></textarea>
                </div>
                <br />
               <div className="contact__form-div">
               <div className="send-btn-div contact__form-input  ">
               <button {...buttonStyles} className="general-btn send-btn">
                  Send Message
                </button>
               </div>
               </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Contact;
