import Introduction from "@/components/Introduction";
import { useState, useEffect } from "react";
import Top from "../components/top";
import Picture from "@/components/Picture";
import Project from "@/components/Project";
import Footer from "@/components/Footer";
import emailjs from "@emailjs/browser";
import { IoMdClose } from "react-icons/io";


export default function Home() {
  const [modal, setModal] = useState(false);

  function contact(event) {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_aahskhi",
        "template_1ipwhzs",
        event.target,
        "Icp1xk9l7iS3qDKbA",
      )
      .then(() => {
        success.classList += " modal__overlay--visible";
      })
      .catch(() => {});
  }

  useEffect(() => {
    if (modal) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }
    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [modal]);

  return (
    <>
      <main className="relative">
        <video
          src="/background.mp4"
          className="background__video"
          autoPlay
          muted
          loop
        />

        <section id="intro" className={`${modal && "visible"}`}>
          <Top setModal={setModal} />
          <div className="introduction">
            <Introduction />
            <Picture />
          </div>
          <a href="#projects" class="scroll">
            <div class="scroll__icon click"></div>
          </a>
        </section>
        <section id="projects" className={`${modal && "visible"}`}>
          <h1 className="projects__title">Here are some of my projects</h1>
          <Project />
        </section>
        <section id="backToTop" className={`${modal && "visible"}`}>
          <h1 className="toTop__title">Back to The top</h1>
        </section>
      </main>
      <Footer
        setModal={setModal}
        modal={modal}
        className={`${modal && "visible"}`}
      />
      {modal && (
        <div className="modal">
          <div className={`modal__left ${modal ? "left__open" : ""}`}>
            <h1 className="left__title">Here's a bit about me.</h1>
            <h1 className="left__desc">Frontend Software Engineer</h1>
            <p className="left__para one">
              I’m a 22-year-old frontend software engineer passionate about
              building websites that deliver exceptional user experiences. I
              thrive on solving complex engineering challenges and learning from
              a team of highly skilled engineers.
            </p>
            <p className="left__para two">
              I specialize in creating intuitive, engaging web applications and
              am driven to grow as an engineer while building impactful,
              user-focused products.
            </p>
            <div class="modal__languages">
              <figure className="modal__language">
                <img
                  className="modal__language--img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/120px-HTML5_Badge.svg.png?_=20110131171049"
                  alt=""
                />
                <span className="language__name">HTML</span>
              </figure>
              <figure className="modal__language">
                <img
                  className="modal__language--img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/250px-CSS3_logo.svg.png"
                  alt=""
                />
                <span className="language__name">CSS</span>
              </figure>
              <figure className="modal__language">
                <img
                  className="modal__language--img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/120px-JavaScript-logo.png?20120221235433"
                  alt=""
                />
                <span className="language__name">JavaScript</span>
              </figure>
              <figure className="modal__language">
                <img
                  className="modal__language--img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/120px-React.svg.png?20230428153009"
                  alt=""
                />
                <span className="language__name">React</span>
              </figure>
              <figure className="modal__language">
                <img
                  className="modal__language--img"
                  src="https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F2389%2FPNG%2F512%2Fnext_js_logo_icon_145038.png&id=145038&pack_or_individual=pack"
                  alt=""
                />
                <span className="language__name">Next</span>
              </figure>
              <figure className="modal__language">
                <img
                  className="modal__language--img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1280px-Typescript_logo_2020.svg.png?_=20221110153201"
                  alt=""
                />
                <span className="language__name">Typescript</span>
              </figure>
              <figure className="modal__language">
                <img
                  className="modal__language--img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/960px-Vitejs-logo.svg.png?_=20220412224743"
                  alt=""
                />
                <span className="language__name">Vite</span>
              </figure>
              <figure className="modal__language">
                <img
                  className="modal__language--img"
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3NTc3Nzc3OC83Nzc3NzA1Kzc3Kzc3NTc3NzcyMjI3NzU1NTI4Nzc2Nzc1Nf/AABEIABwAHAMBEQACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAFBgcIAv/EADEQAAECBAQEBAQHAAAAAAAAAAECAwQFERIABhMhFDFBUQcVYaEWInGBMjM0QnKisf/EABoBAAMAAwEAAAAAAAAAAAAAAAMEBQECBgD/xAAnEQABAwMDAwQDAAAAAAAAAAABAAIDBBESBRMhMUFRFCKh0XHB8P/aAAwDAQACEQMRAD8AQsk5Rh5rCGYTIrLJUUtNINLqcyT9f8wjU1JYcWrn9W1Z9O/Zh69yi858Nm3lwy5KtTQW6lDyHDcEJP7x127YHFWnnNaUOryOBE/Pj6TXD+E+XHYHQIig9b+p1fmr3p+H2wD10t7pqKtmc656KM5ilD0hncXK4lQW5DOW3gUChSoP3BBxWjeJGBw7quxwc0OCdvDGbrcaVKVw7q0tqK0OoTVKQeiu29aYQrYuc7rmtbohuCcOHPb6R/OOcHstvQbMPBOqKnErcccSUoWgHdCT1Pr09a4FT0wlBJK9ptC2Vpc4qgszdLch818vmFNO/heHOvyrS3v98K7fvxuP0nY4sTjdZrzLOHZ/PYyavIDaoly4IBrakABIr1oAN8XYoxGwNHZV2NwaGqn+FCIdWXQWaausrWpzu6e1MTK2+7yuX1ZrzV+7pYW/vynePblaUQHm+lTjGuG1KfnV+WnrzwszPnHx8ItIx/OPj4TONsBTizH4j8J8cTjgLNHX3s5X0F/9rsX6a+y3JVYb7YuhMonExkz5flkW5DrUKKt3CvqDscEfGyQWcLr0sMcos8XXc5ns0njqHJrGuRBbFEBVAlPeiRsMYjiZGLNFlmOJkQswWRP49zVwHBedROjbbXa+n86Xe+NPTQ3yxWNmO97JbwdFX//Z"
                  alt=""
                />
                <span className="language__name">GSAP</span>
              </figure>
            </div>
          </div>
          <div className={`modal__right ${modal ? "right__open" : ""}`}>
            <h1 className="right__title">Let's Have a Chat!</h1>
            <h1 className="right__para">
              I'm currently open to new opportunites.
            </h1>
            <form id="contact__form" onSubmit={contact}>
              <div className="form__item">
                <input
                  className="input"
                  name="user_name"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div class="form__item">
                <input
                  className="input"
                  name="user_email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div class="form__item">
                <textarea
                  className="input here"
                  name="message"
                  type="text"
                  placeholder="Message"
                />
              </div>
              <button id="contact__submit" className="form__submit">
                Send it my way
              </button>
            </form>
            <IoMdClose className='close click' onClick={() => setModal(false)}/>
          </div>
        </div>
      )}
    </>
  );
}
