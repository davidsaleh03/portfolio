import Introduction from "@/components/Introduction";
import {useState} from 'react';
import Top from "../components/top";
import Picture from "@/components/Picture";
import Project from "@/components/Project";
import Footer from "@/components/Footer";

export default function Home() {
  const [modal, setModal] = useState(false);
  
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
      <section id="intro">
        <Top setModal={setModal}/>
        <div className="introduction">
          <Introduction />
          <Picture />
        </div>
        <a href="#projects" class="scroll">
                <div class="scroll__icon click"></div>
            </a>
        
      </section>
      <section id="projects">
        <h1 className='projects__title'>Here are some of my projects</h1>
        <Project />
      </section>
      <section id='backToTop'>
        <h1 className='toTop__title'>
          Back to The top
        </h1>
      </section>
    </main>
    <Footer />
    <div className="modal">
      <div className="modal__left"></div>
      <div className="modal__right"></div>
    </div>
    </>
  );
}
