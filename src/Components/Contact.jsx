import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  FiPhone,
  FiMapPin,
  FiMail,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiFacebook,
  FiExternalLink,
  FiTerminal,
  FiCode,
  FiMessageCircle,
} from "react-icons/fi";
import toast from "react-hot-toast";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_0q4e30j", // Replace with your EmailJS service ID
        "template_6viruie", // Replace with your EmailJS template ID
        formData, // Must match template variables
        "qnYvmyfqxGQjb_eYI" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          toast.success("Message sent successfully!");
          setLoading(false);
          setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("Email send error:", error.text);
          toast.error("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "borhansiddque19@gmail.com",
      href: "mailto:borhansiddque19@gmail.com",
      syntax: "sendEmail()",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+880 1627323206",
      href: "tel:+8801627323206",
      syntax: "makeCall()",
    },
    {
      icon: FiMessageCircle,
      label: "WhatsApp",
      value: "+880 1627323206",
      href: "https://wa.me/8801627323206",
      syntax: "sendWhatsApp()",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Chattogram, Bangladesh",
      href: "#",
      syntax: "getLocation()",
    },
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      href: "https://github.com/borhansiddque",
      label: "GitHub",
      color: "hover:text-green-400",
    },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/borhan-siddque/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: FiFacebook,
      href: "https://www.facebook.com/borhan.siddque.19/",
      label: "Facebook",
      color: "hover:text-blue-600",
    },
    {
      icon: FiExternalLink,
      href: "#",
      label: "Portfolio",
      color: "hover:text-purple-400",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Code decoration */}
      <div className="absolute top-10 right-4 md:right-10 font-mono text-green-400/20 text-xs md:text-sm hidden sm:block">
        // Let's connect!
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="font-mono text-green-400 mb-2">contact.init()</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-mono">
            Get In <span className="text-green-400">&lt;</span>
            <span className="text-blue-400">Touch</span>
            <span className="text-green-400">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-6"></div>
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-3 md:p-4 max-w-xs sm:max-w-lg mx-auto font-mono text-xs md:text-sm">
            <div className="text-purple-400">
              // Ready to collaborate on your next project
            </div>
            <div className="text-green-400 break-words">
              <span className="text-blue-400">const</span> collaboration ={" "}
              <span className="text-yellow-400">
                "Let's build something amazing!"
              </span>
              ;
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          <div className="flex-1 space-y-8">
            <div className="bg-gray-900/80 rounded-2xl p-4 md:p-6 border border-green-400/20 w-full">
              <div className="flex items-center space-x-2 mb-6">
                <FiTerminal className="text-green-400" size={16} />
                <h3 className="text-lg md:text-xl font-semibold text-white font-mono">
                  contact.info
                </h3>
              </div>

              <div className="space-y-3 md:space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center space-x-3 group hover:bg-gray-700/30 p-3 rounded-lg transition-all duration-300 border border-transparent hover:border-green-400/30"
                  >
                    <div className="p-2 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors border border-green-400/30 flex-shrink-0">
                      <info.icon size={16} className="text-green-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-gray-400 font-mono">
                        // {info.syntax}
                      </div>
                      <div className="text-white group-hover:text-green-400 transition-colors font-mono text-sm break-words">
                        "{info.value}"
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-2xl p-4 md:p-6 border border-green-400/20">
              <div className="flex items-center space-x-2 mb-6">
                <FiCode className="text-blue-400" size={16} />
                <h3 className="text-lg font-semibold text-white font-mono">
                  social.links
                </h3>
              </div>

              <div className="font-mono text-xs mb-3">
                <div className="text-purple-400">
                  // Connect with me on social platforms
                </div>
                <div className="text-green-400">
                  <span className="text-blue-400">const</span> socialMedia = [
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    className={`p-3 bg-gray-800/50 rounded-lg ${color} transition-all duration-300 transform hover:scale-105 border border-gray-600/50 hover:border-green-400/50 group`}
                    aria-label={label}
                    target="_blank"
                  >
                    <div className="flex items-center space-x-2">
                      <Icon size={16} />
                      <span className="font-mono text-sm">{label}</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="font-mono text-xs mt-3 text-green-400">];</div>
            </div>
          </div>

          <div className="bg-gray-900/80 rounded-2xl p-4 md:p-6 border border-blue-400/20 h-fit flex-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-blue-400 font-mono ml-2 text-sm">
                message.form
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-green-400 mb-2">
                    // name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-green-400 text-white placeholder-gray-400 transition-colors font-mono text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-green-400 mb-2">
                    // email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@domain.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-green-400 text-white placeholder-gray-400 transition-colors font-mono text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-green-400 mb-2">
                  // subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Discussion"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-green-400 text-white placeholder-gray-400 transition-colors font-mono text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-green-400 mb-2">
                  // message
                </label>
                <textarea
                  name="message"
                  placeholder="Let's discuss your project ideas..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-green-400 text-white placeholder-gray-400 resize-none transition-colors font-mono text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-800 via-green-600 to-green-800 rounded-lg font-mono font-semibold hover:from-green-700  hover:to-green-700 transition-all duration-300 transform hover:scale-105 border border-green-400/30 text-sm cursor-pointer"
              >
                {loading ? (
                  <span className="loading loading-spinner loading-xs"></span>
                ) : (
                  <>
                    <FiSend size={16} />
                    <span>sendMessage()</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
