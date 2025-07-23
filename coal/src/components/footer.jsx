import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from "./text-field";
import Button from "./button";

// Import the images with correct paths
import instaIcon from '../image/insta.png';
import fbIcon from '../image/fb.png';
import twitterIcon from '../image/twitter.png';
import gitIcon from '../image/git.png';

const Footer = ({ className = "" }) => {
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [isCurrencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!isLanguageDropdownOpen);
    setCurrencyDropdownOpen(false); // Close currency dropdown if open
  };

  const toggleCurrencyDropdown = () => {
    setCurrencyDropdownOpen(!isCurrencyDropdownOpen);
    setLanguageDropdownOpen(false); // Close language dropdown if open
  };

  return (
    <footer
      className={`self-stretch h-[528px] relative bg-[rgba(43,44,47,1)] max-w-full z-[1] text-left text-sm text-whitesmoke font-button-sm mq1225:h-auto mq1225:min-h-[528] ${className}`}
    >
      <div className="absolute top-[0px] left-[calc(50%_-_720px)] bg-darkslategray-200 w-full h-full hidden" />
      <div className="absolute top-[4px] left-[24px] w-[1300px] flex flex-row items-start justify-start flex-wrap content-start gap-[24.9px] max-w-full">
        <div className="h-[367px] flex flex-col items-start justify-start gap-[66px] text-mistyrose">
          <img
            className="w-[250.8px] flex-1 relative max-h-full object-cover z-[1]"
            loading="lazy"
            alt="Sudhar"
            src="/src/image/sudharr.png" // Ensure this path is correct
          />
          <div className="flex flex-row items-start justify-start py-0 pl-5 pr-0">
            <div className="relative tracking-[0.8px] leading-[24px] uppercase font-semibold z-[1]" style={{ marginTop: '-10px' }}>
              Subscribe to our newsletter
            </div>
          </div>
        </div>
        <div className="w-[316.3px] flex flex-col items-start justify-start pt-[60px] pb-0 pl-0 pr-[7px] box-border text-base text-black-white-white">
          <i className="self-stretch h-[179px] relative leading-[180%] inline-block font-light shrink-0 box-border pr-0 z-[1]">
            Our platform is dedicated to empowering coal plants and government
            entities to monitor, manage, and reduce carbon emissions
            effectively. Together, we can build a more sustainable future.
          </i>
        </div>
        <div className="w-[84.7px] flex flex-col items-start justify-start pt-[65px] pb-0 pl-0 pr-[15px] box-border text-xs">
          <b className="self-stretch h-[159px] relative leading-[40px] inline-block shrink-0 z-[1]">
            <p className="m-0">Home</p>
            <p className="m-0">About Us</p>
            <p className="m-0">Services</p>
            <p className="m-0">Contact Us</p>
            <p className="m-0">FAQs</p>
          </b>
        </div>
        <div className="flex flex-col items-start justify-start pt-[108px] pb-0 pl-0 pr-[7px]">
          <div className="flex flex-col items-start justify-start py-0 pl-0 pr-px gap-[3.5px]">
            <div className="relative leading-[26px] z-[1]" style={{ marginTop: '-10px' }}>
              <span className="font-semibold">Email</span>
              <span>: sudhar453@gmail.com</span>
            </div>
            <div className="relative leading-[26px] z-[1]" style={{ marginTop: '-10px' }}>
              <span className="font-semibold">Phone</span>
              <span>: +1-800-123-5673</span>
            </div>
            <div className="h-[50px] relative leading-[180%] inline-block z-[1]" style={{ marginTop: '-10px' }}>
              <p className="m-0">
                <span className="font-semibold font-button-sm">Address</span>
                <span>: Sudhar Sustainability</span>
              </p>
              <p className="m-0">Lane, Green City, Tokyo</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-24 px-0 pb-0 box-border min-w-[242px] max-w-full">
          <form className="m-0 self-stretch flex flex-col items-end justify-start gap-[67px]">
            <div className="self-stretch flex flex-col items-start justify-start py-0 pl-[7px] pr-0 gap-[19px]">
              <div className="relative text-sm tracking-[0.8px] leading-[24px] uppercase font-semibold font-button-sm text-mistyrose text-left z-[1]" style={{ marginTop: '-10px' }}>
                Language & Currency
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3.5">
                {/* Language Dropdown */}
                <div className="relative w-full">
                  <div
                    className="self-stretch rounded-md border-darkgray border-[1px] border-solid flex flex-row items-start justify-between pt-1.5 pb-[5px] pl-[11px] pr-[13px] gap-5 cursor-pointer z-[1]"
                    onClick={toggleLanguageDropdown}
                  >
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative text-sm leading-[180%] font-button-sm text-black-white-white text-left inline-block min-w-[49px]">
                        English
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                      <span className={`w-4 h-4 relative overflow-hidden shrink-0 transition-transform duration-200 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </div>
                  </div>
                  {isLanguageDropdownOpen && (
                    <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-[2]">
                      <li className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">English</li>
                      <li className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">Spanish</li>
                      <li className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">French</li>
                    </ul>
                  )}
                </div>

                {/* Currency Dropdown */}
                <div className="relative w-full">
                  <div
                    className="self-stretch rounded-md border-darkgray border-[1px] border-solid flex flex-row items-start justify-between pt-1.5 pb-[5px] pl-[11px] pr-[13px] gap-5 cursor-pointer z-[1]"
                    onClick={toggleCurrencyDropdown}
                  >
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative text-sm leading-[180%] font-button-sm text-black-white-white text-left inline-block min-w-[28px]">
                        USD
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                      <span className={`w-4 h-4 relative overflow-hidden shrink-0 transition-transform duration-200 ${isCurrencyDropdownOpen ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </div>
                  </div>
                  {isCurrencyDropdownOpen && (
                    <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-[2]">
                      <li className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">USD</li>
                      <li className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">EUR</li>
                      <li className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">JPY</li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[19.3px]" style={{ marginTop: '10px' }}>
              <TextField />
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <Button />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="absolute top-[274px] left-[44px] bg-darkgray w-[1346px] h-px z-[2]" />
      <div className="absolute top-[393px] left-[44px] bg-darkgray w-[1346px] h-px z-[1]" />
      <div className="absolute top-[400px] left-[42px] w-[1316.2px] flex flex-row items-end justify-between max-w-full gap-5 text-base text-black-white-white mq1050:flex-wrap">
        <div className="w-[540px] flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch relative leading-[29px] shrink-0 z-[1]" style={{ marginTop: '-10px' }}>
            The latest news, articles, and resources, sent to your inbox weekly
          </div>
          <div className="w-[361.2px] h-[21px] flex flex-row items-start justify-start py-0 pl-0 pr-5 box-border max-w-full">
            <div className="mt-[-8px] flex-1 relative leading-[29px] inline-block shrink-0 max-w-full z-[2]">
              © 2020 Dlex, Inc. All rights reserved
            </div>
          </div>
        </div>
        <div className="w-60 flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border">
          <div className="self-stretch flex flex-row items-start justify-between gap-5">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
                loading="lazy"
                alt="Facebook"
                src={fbIcon}
              />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
                loading="lazy"
                alt="Twitter"
                src={twitterIcon}
              />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
                loading="lazy"
                alt="Instagram"
                src={instaIcon}
              />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
                loading="lazy"
                alt="GitHub"
                src={gitIcon}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;

