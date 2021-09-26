import React, { useEffect, useRef } from "react";
import Form from "./Form";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const h2Ref = useRef();
  const contactRef = useRef();
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top center",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });
    timeline
      .from(h2Ref.current, { y: 100, opacity: 0, duration: 1 })
      .from(".form-container", {
        duration: 1,
        opacity: 0,
      });
  }, []);

  return (
    <section>
      <div className="section-container" id="contact">
        <div className="section-title">
          <h2 ref={h2Ref}>Contacto</h2>
          <div className="contact-container" ref={contactRef}>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
