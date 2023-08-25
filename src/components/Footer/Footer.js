import React from "react";
import "../Footer/footer.css";

const SocialIcon = ({ href, iconClass }) => (
  <a href={href} target="_blank" rel="noreferrer">
    <i className={`icons fa-brands ${iconClass} fa-xl`}></i>
  </a>
);

function Footer() {
  const socialLinks = [
    { href: "https://www.instagram.com/aldov__/", iconClass: "fa-instagram" },
    {
      href: "https://www.facebook.com/aldo.huertavalencia",
      iconClass: "fa-facebook",
    },
    { href: "https://github.com/Av720", iconClass: "fa-github" },
    {
      href: "https://www.linkedin.com/in/aldo-valencia-95b250237/",
      iconClass: "fa-linkedin",
    },
  ];

  return (
    <div className="footer">
      <footer id="footer">
        <div className="icons-div">
          {socialLinks.map((link) => (
            <SocialIcon key={link.href} {...link} />
          ))}
        </div>
      </footer>
    </div>
  );
}

export default Footer;
