import React, { useState } from "react";
import { toast } from "react-toastify";

import "./Contact.css";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  //handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please provide all fields");
        return;
      }
      
      // Redirect to WhatsApp
      const phoneNumber = "+916309129162"; // Replace with your phone number
      const whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${msg}`;
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      window.location.href = whatsappURL;

      // Optionally, you can still send an email using your API
      // const res = await axios.post("/api/v1/portfolio/sendEmail", {
      //   name,
      //   email,
      //   msg,
      // });
      // if (res.data.success) {
      //   toast.success(res.data.message);
      //   setName("");
      //   setEmail("");
      //   setMsg("");
      // } else {
      //   toast.error(res.data.message);
      // }
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="contact"
                      className="image"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact With
                        <a href="https://www.linkedin.com/in/harish-sriramula-392211202/">
                          <BsLinkedin color="blue" size={30} className="ms-2" />
                        </a>
                        <a href="https://github.com/harishhere360">
                          <BsGithub color="black" size={30} className="ms-2" />
                        </a>
                        <a href="https://www.facebook.com/harish.sriramula.798">
                          <BsFacebook color="blue" size={30} className="ms-2" />
                        </a>
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        className="mb-3"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        className="mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Write your message"
                        className="mb-3"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <button className="button" onClick={handleSubmit}>
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
