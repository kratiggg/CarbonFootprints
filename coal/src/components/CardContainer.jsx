import React from "react";
import Slider from "react-slick";

const Card = ({ image, name, title, description, socialLinks }) => {
  return (
    
    <div className="max-w-xs w-full p-4 text-center shadow-lg borderRadius: '15px'">
      
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-4/5 mx-auto border-2 border-yellow-500"
        />
      </div>
      <div className="bg-gray-200 text-white  p-10 mt-[-100px]">
        <h3 className="  text-lg">{name}</h3>
        <h4 className="text-white text-sm tracking-wide">{title}</h4>
        <p className="text-sm text-green-600 tracking-wider opacity-90">{description}</p>
        <div className="mt-4 flex justify-center space-x-2">
          {socialLinks.map((link, index) => (
            <a href={link.href} key={index} className="text-yellow-500 opacity-75 hover:opacity-100 transition-opacity duration-300">
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const CardCarousel = () => {
  const cards = [
    {
      image: "/src/image/khushiiii.png",
      name: "Khushi Pandit",
      title: "UI/UX Designer",
      description:
        "Design is not just about aesthetics; it's about creating experiences that resonate with people. Working on Sudha has allowed me to design a platform that is not only functional but also user-friendly, ensuring our message reaches and impacts as many people as possible.",
      socialLinks: [
        { href: "#", icon: "ion-social-reddit" },
        { href: "#", icon: "ion-social-twitter" },
        { href: "#", icon: "ion-social-vimeo" },
      ],
    },
    {
      image: "/src/image/khushiii.png",
      name: "Krati Gupta",
      title: "Project Coordinator &Quality Assurance",
      description:
        "Coordinating the SUDHAR project has been a journey of growth and learning. Every step, from ideation to implementation, has taught me the power of teamwork and dedication. Together, we’re not just building a platform; we’re building a better future.",
      socialLinks: [
        { href: "#", icon: "ion-social-reddit" },
        { href: "#", icon: "ion-social-twitter" },
        { href: "#", icon: "ion-social-vimeo" },
      ],
    },
    {
      image: "/src/image/spk.png",
      name: "Krishan Pratap Singh",
      title: "badmash",
      description:
      "Building the future, one line of code at a time. Being a part of the SUDHAR project has shown me how technology can truly make a difference in the world. Every challenge we overcome brings us one step closer to a more sustainable planet",
      socialLinks: [
        { href: "#", icon: "ion-social-reddit" },
        { href: "#", icon: "ion-social-twitter" },
        { href: "#", icon: "ion-social-vimeo" },
      ],
    },
    {
      image: "/src/image/lakku.png",
      name: "Lakshya Bhardwaj",
      title: "Lead Developer",
      description:
        "Turning ideas into code has always been my passion. As the Lead Developer for SUDHAR, I've had the opportunity to shape the core of our platform, ensuring it’s robust, scalable, and ready to make an impact. Every feature we build brings us closer to helping others understand their carbon footprint",
      socialLinks: [
        { href: "#", icon: "ion-social-reddit" },
        { href: "#", icon: "ion-social-twitter" },
        { href: "#", icon: "ion-social-vimeo" },
      ],
    },
    {
      image: "/src/image/makku.png",
      name: "Mayank Gupta",
      title: "Data Analyst",
      description:
        "Data tells the story of our planet, and I'm proud to be part of a project that listens. Analyzing the carbon footprint data for Sudha has deepened my understanding of the environmental impact we can address through informed decisions.",
      socialLinks: [
        { href: "#", icon: "ion-social-reddit" },
        { href: "#", icon: "ion-social-twitter" },
        { href: "#", icon: "ion-social-vimeo" },
      ],
    },
    {
      image: "/src/image/kallu.png",
      name: "Kumar Satyam",
      title: "Research Specialist",
      description:
        "Research is the foundation of any impactful project. Diving into the environmental issues that Sudha aims to address has been eye-opening and motivating. I'm excited to see how our work can drive positive change",
      socialLinks: [
        { href: "#", icon: "ion-social-reddit" },
        { href: "#", icon: "ion-social-twitter" },
        { href: "#", icon: "ion-social-vimeo" },
      ],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="px-4">
            <Card {...card} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
