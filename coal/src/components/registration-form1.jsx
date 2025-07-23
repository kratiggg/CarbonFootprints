import React, { useState } from 'react';
import PropTypes from "prop-types";
import StepIndicator from "./StepIndicator";

// Move handleSubmit outside or keep it here
const handleSubmit = async (formType, form2Data) => {
  try {
    const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formType, ...form2Data }),
    });

    if (response.ok) {
      alert('Registration successful!');
    } else {
      const data = await response.json();
      alert(`Registration failed: ${data.message}`);
    }
  } catch (error) {
    alert('Error in submission');
    console.error('Error in submission', error);
  }
};

// Example for Form 1
const submitForm2 = async (form2Data) => {
  await handleSubmit('form2', form2Data);
};

const RegistrationForm1 = ({ className = "" }) => {
  const [form2Data, setFormData] = useState({
    primaryPhone: '',
    email: '',
    alternatePhone: '',
    organizationalEmail: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...form2Data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await submitForm2(form2Data);
      // Optionally clear the form or perform other actions
      setFormData({
        primaryPhone: '',
        email: '',
        alternatePhone: '',
        organizationalEmail: '',
      });
    } catch (error) {
      console.error('Error registering:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-[95px] pl-16 pr-[65px] box-border max-w-full text-center text-21xl text-olivedrab font-inter lg:pl-8 lg:pr-8 lg:box-border mq750:pb-[62px] mq750:box-border ${className}`}
    >
      {/* Form content */}
      <div className="flex-1 flex flex-col items-end justify-start gap-[22.6px] max-w-full">
        {/* Form Title */}
        <div className="w-[1122px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <h1 className="m-0 w-[704px] relative text-inherit inline-block italic font-light font-[inherit] shrink-0 max-w-full z-[4] mq450:text-5xl mq1050:text-13xl">
            Coal Mine’s Employee Registration
          </h1>
        </div>
        {/* Form Description */}
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-[25px] box-border max-w-full text-mini text-darkgray">
          <div className="flex-1 relative inline-block max-w-full z-[4]">
            Please fill out the form below to register as a coal plant worker on
            our platform. Your information will help us verify your identity and
            ensure secure access to the carbon footprint monitoring system.
          </div>
        </div>
        {/* Form Fields */}
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 text-base text-black-white-white lg:flex-wrap lg:justify-center">
          <div className="h-[374.7px] w-[429px] flex flex-col items-start justify-start gap-[61px] max-w-full mq450:gap-[30px]">
            <div className="self-stretch flex-1 flex flex-col items-center justify-start pt-[8.6px] pb-[6.8px] pl-5 pr-[123px] relative gap-[0.6px] text-xl text-black mq450:pr-5 mq450:box-border">
              <StepIndicator />
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 px-3 box-border max-w-full">
              <div className="w-[356px] flex flex-col items-start justify-start gap-[15px] max-w-full">
                <div className="relative inline-block min-w-[84px] z-[4]">
                  Primary Phone Number*
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-[18px] px-[11px] relative z-[4]">
                  <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-mini bg-gray-100 mix-blend-screen" />
                  <input
                    name="primaryPhone"
                    value={form2Data.primaryPhone}
                    onChange={handleChange}
                    className="w-[171px] [border:none] [outline:none] font-inter text-base bg-[transparent] h-5 relative text-gray-300 text-center inline-block p-0 z-[1]"
                    placeholder="ex. +916236 "
                    type="text"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="w-[188px] flex flex-row items-start justify-start py-0 px-[61px] box-border">
              <div className="self-stretch flex flex-row items-start justify-end py-0 px-3 box-border max-w-full">
                <div className="w-[356px] flex flex-col items-start justify-start gap-[15px] max-w-full">
                  <div className="relative inline-block min-w-[84px] z-[4]">
                    E-mail*
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-[18px] px-[11px] relative z-[4]">
                    <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-mini bg-gray-100 mix-blend-screen" />
                    <input
                      name="email"
                      value={form2Data.email}
                      onChange={handleChange}
                      className="w-[171px] [border:none] [outline:none] font-inter text-base bg-[transparent] h-5 relative text-gray-300 text-center inline-block p-0 z-[1]"
                      placeholder="ex. @gmail.com "
                      type="email"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[429px] flex flex-col items-start justify-start gap-[61px] max-w-full mq450:gap-[30px]">
            <div className="w-[356px] flex flex-col items-start justify-start gap-3.5 max-w-full">
              <div className="w-[106px] relative inline-block min-w-[106px] z-[4]">
                Alternate Phone Number*
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-[18px] px-[11px] pb-[15px] relative z-[4]">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-mini bg-gray-100 mix-blend-screen" />
                <input
                  name="alternatePhone"
                  value={form2Data.alternatePhone}
                  onChange={handleChange}
                  className="w-[95px] [border:none] [outline:none] font-inter text-base bg-[transparent] h-[23px] relative text-gray-300 text-center inline-block p-0 z-[1]"
                  placeholder="+9111233"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="w-[356px] flex flex-col items-start justify-start gap-3.5 max-w-full">
              <div className="w-[121px] relative inline-block z-[4]">
                <p className="m-0">Organizational Email*</p>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-[18px] px-[11px] pb-[15px] relative z-[4]">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-mini bg-gray-100 mix-blend-screen" />
                <input
                  name="organizationalEmail"
                  value={form2Data.organizationalEmail}
                  onChange={handleChange}
                  className="w-[232px] [border:none] [outline:none] font-inter text-base bg-[transparent] h-[23px] relative text-gray-300 text-center inline-block p-0 z-[1]"
                  placeholder="ex. @gmail.com "
                  type="email"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className="mt-5 p-2 bg-olivedrab text-white rounded-md">
        Submit
      </button>
    </form>
  );
};

RegistrationForm1.propTypes = {
  className: PropTypes.string,
};

export default RegistrationForm1;
