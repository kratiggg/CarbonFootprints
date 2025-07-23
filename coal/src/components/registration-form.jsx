import React, { useState } from 'react';
import axios from 'axios';

// Handle the form submission
const handleSubmit = async (form1, form1Data) => {
  try {
    const response = await axios.post('http://localhost:5000/register', {
      form1,
      ...form1Data
    });

    if (response.status === 200) {
      alert('Registration successful!');
    } else {
      alert(`Registration failed: ${response.data.message}`);
    }
  } catch (error) {
    alert('Error in submission');
    console.error('Error in submission', error);
  }
};

// Function for handling Form 1 submission
const submitForm1 = async (form1Data) => {
  await handleSubmit('form1', form1Data);
};

// Main form component
const RegistrationForm = ({ className = "" }) => {
  const [form1Data, setForm1Data] = useState({
    fullName: '',
    gender: '',
    dateOfBirth: '',
    homeAddress: '',
    nationality: '',
  });

  const handleChange = (e) => {
    setForm1Data({ ...form1Data, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await submitForm1(form1Data);
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
      <div className="flex-1 flex flex-col items-end justify-start gap-[22.6px] max-w-full">
        <div className="w-[1122px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <h1 className="m-0 w-[704px] relative text-inherit inline-block italic font-light font-[inherit] shrink-0 max-w-full z-[4] mq450:text-5xl mq1050:text-13xl">
            Coal Mine’s Employee Registration
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-[25px] box-border max-w-full text-mini text-darkgray">
          <div className="flex-1 relative inline-block max-w-full z-[4]">
            Please fill out the form below to register as a coal plant worker on our platform. Your information will help us verify your identity and ensure secure access to the carbon footprint monitoring system.
          </div>
        </div>
        
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 text-base text-black-white-white lg:flex-wrap lg:justify-center">
          <div className="h-[374.7px] w-[429px] flex flex-col items-start justify-start gap-[61px] max-w-full mq450:gap-[30px]">
            <div className="self-stretch flex-1 flex flex-col items-center justify-start pt-[8.6px] pb-[6.8px] pl-5 pr-[123px] relative gap-[0.6px] text-xl text-black mq450:pr-5 mq450:box-border">
              {/* Add your StepIndicator component here if needed */}
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 px-3 box-border max-w-full">
              <div className="w-[356px] flex flex-col items-start justify-start gap-[15px] max-w-full">
                <div className="relative inline-block min-w-[84px] z-[4]">
                  Full Name*
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-[18px] px-[11px] relative z-[4]">
                  <div className="h-full w-full absolute top-0 right-0 bottom-0 left-0 rounded-mini bg-gray-100 mix-blend-screen" />
                  <input
                    className="w-[171px] border-none outline-none font-inter text-base bg-transparent h-5 relative text-gray-300 text-center inline-block p-0 z-[1]"
                    placeholder="ex. John Donkey Dope"
                    type="text"
                    name="fullName"
                    value={form1Data.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="w-[188px] flex flex-row items-start justify-start py-0 px-[61px] box-border">
              <div className="flex-1 flex flex-col items-end justify-start gap-1.5">
                <div className="self-stretch relative inline-block min-w-[66px] z-[4]">
                  Gender*
                </div>
                <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[13px] pr-[5px] text-smi text-gray-300">
                  <div className="flex-1 flex flex-col items-start justify-start gap-0.5">
                    <label className="relative inline-block min-w-[33px] z-[4] flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={form1Data.gender === "Male"}
                        onChange={handleChange}
                        required
                      />
                      Male
                    </label>
                    <label className="relative inline-block min-w-[48px] z-[4] flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={form1Data.gender === "Female"}
                        onChange={handleChange}
                        required
                      />
                      Female
                    </label>
                    <label className="relative inline-block min-w-[39px] z-[4] flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="Other"
                        checked={form1Data.gender === "Other"}
                        onChange={handleChange}
                        required
                      />
                      Other
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[429px] flex flex-col items-start justify-start gap-[61px] max-w-full mq450:gap-[30px]">
            <div className="w-[356px] flex flex-col items-start justify-start gap-3.5 max-w-full">
              <div className="relative inline-block min-w-[106px] z-[4]">
                Date of Birth*
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-[18px] px-[11px] pb-[15px] relative z-[4]">
                <div className="h-full w-full absolute top-0 right-0 bottom-0 left-0 rounded-mini bg-gray-100 mix-blend-screen" />
                <input
                  className="w-[95px] border-none outline-none font-inter text-base bg-transparent h-[23px] relative text-gray-300 text-center inline-block p-0 z-[1]"
                  placeholder="XX MM YYYY"
                  type="text"
                  name="dateOfBirth"
                  value={form1Data.dateOfBirth}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="w-[356px] flex flex-col items-start justify-start gap-3.5 max-w-full">
              <div className="relative inline-block z-[4]">
                Home Address*
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-[18px] px-[11px] pb-[15px] relative z-[4]">
                <div className="h-full w-full absolute top-0 right-0 bottom-0 left-0 rounded-mini bg-gray-100 mix-blend-screen" />
                <input
                  className="w-[232px] border-none outline-none font-inter text-base bg-transparent h-[23px] relative text-gray-300 text-center inline-block p-0 z-[1]"
                  placeholder="ex. Street, Area, District, State"
                  type="text"
                  name="homeAddress"
                  value={form1Data.homeAddress}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="w-[356px] flex flex-col items-start justify-start gap-3.5 max-w-full">
              <div className="relative inline-block min-w-[107px] z-[4]">
                Nationality*
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-[18px] px-[11px] pb-[15px] relative z-[4]">
                <div className="h-full w-full absolute top-0 right-0 bottom-0 left-0 rounded-mini bg-gray-100 mix-blend-screen" />
                <input
                  className="w-[133px] border-none outline-none font-inter text-base bg-transparent h-[23px] relative text-gray-300 text-center inline-block p-0 z-[1]"
                  placeholder="Your Nationality"
                  type="text"
                  name="nationality"
                  value={form1Data.nationality}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[33px] max-w-full text-center lg:gap-[13px] lg:items-start mq450:justify-center mq450:gap-[15px]">
          <button
            className="cursor-pointer p-0 bg-[transparent] relative text-black font-inter text-[inherit] text-center inline-block font-light min-w-[208px] h-[34px] shrink-0 z-[4]"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegistrationForm;
