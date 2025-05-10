import React, { useState } from "react";
import ReviewOnScroll from "../ReviewOnScroll";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const SERVICE_ID = "service_flacyvb";
  const TEMPLATE_ID = "template_aotgkqr";
  const PUBLIC_KEY = "SpNcZTxG4e5htk0Gk";

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        alert(`${error}Failed to send message. Please try again later.`);
      });
    e.target.reset();
  };
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <ReviewOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-slate-400 bg-clip-text text-transparent text-center">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6 " action="">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-white/5 border botder-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5  "
                placeholder="Name..."
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-white/5 border botder-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5  "
                placeholder="example@gmail.com"
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                className="w-full bg-white/5 border botder-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5  "
                placeholder="Your Message..."
              />
            </div>
            <button
              type="subit"
              className="w-full bg-purple-500 text-white py-3 px-6 rounded font-medium transition overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,220,0.4)] hover:bg-purple-500/80 active:bg-purple-500/90"
            >
              Send Message
            </button>
          </form>
        </div>
      </ReviewOnScroll>
    </section>
  );
};

export default Contact;
