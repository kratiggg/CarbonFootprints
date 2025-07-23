import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GroupComponent from './group-component';

const RegistrationForm4 = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    userID: '',
    password: '',
    confirmPassword: '',
    employeeID: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match.');
        return;
      }

      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
      } else {
        const errorData = await response.json();
        alert(`Registration failed: ${errorData.message}`);
      }
    } catch (error) {
      alert('Error in registration');
      console.error('Error in registration', error);
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <form
        onSubmit={handleSubmit}
        className="flex-1 shadow-[0px_4px_35px_rgba(0,_0,_0,_0.08)] rounded-xl bg-black-white-white flex flex-col items-start justify-start pt-[29px] pb-[52px] pl-11 pr-[37px] box-border gap-[47px] max-w-full z-[9] text-left text-black font-button-sm"
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-[26.7px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full text-center text-xl">
            <i className="self-stretch relative font-bold z-[10] mq450:text-base">
              Initial Registration has been completed Successfully
            </i>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[65px] box-border max-w-full text-left text-base">
              <div className="flex-1 relative inline-block max-w-full z-[10]">
                Please complete your Login Credentials
              </div>
            </div>
          </div>
          <GroupComponent
            enterYourPassword="User ID"
            propDisplay="inline-block"
            propMinWidth="55px"
            propBorder="1px solid #2c9cf0"
            password="employee ID number"
          />
          <div className="self-stretch h-[92px] relative max-w-full">
            <div className="absolute top-[0px] left-[0px] w-full h-full flex flex-col items-start justify-start pt-[54px] px-0 pb-[19px] box-border gap-8 max-w-full z-[10]">
              <div className="mt-[-56px] relative">Enter your Password</div>
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="border-darkgray-100 border-[1px] border-solid [outline:none] bg-black-white-white w-full h-[57px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] rounded-4xs box-border"
                type="password"
                placeholder="Enter your password"
                required
              />
              <div className="w-[352px] flex flex-row items-start justify-start py-0 px-[25px] box-border max-w-full text-sm text-gray-400">
                <div className="flex-1 relative font-light z-[1]">
                  Password
                </div>
              </div>
            </div>
            <img
              className="absolute top-[51px] left-[415px] w-5 h-5 overflow-hidden z-[11]"
              loading="lazy"
              alt=""
              src="/eye.svg"
            />
          </div>
          <GroupComponent
            enterYourPassword="Confirm your Password"
            password="Password"
          />
        </div>
        <button 
          type="submit"
          className="cursor-pointer [border:none] py-[15px] pl-[21px] pr-5 bg-olivedrab-100 self-stretch shadow-[0px_4px_19px_rgba(119,_147,_65,_0.3)] rounded-3xs flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full z-[10] hover:bg-olivedrab-200"
        >
          <div className="h-[54px] w-[451px] relative shadow-[0px_4px_19px_rgba(119,_147,_65,_0.3)] rounded-3xs bg-olivedrab-100 hidden max-w-full" />
          <div className="relative text-base font-medium font-button-sm text-black-white-white text-left z-[1]">
            Create Account
          </div>
        </button>
      </form>
      <img
        className="h-[30px] w-[30px] absolute !m-[0] top-[-13px] right-[-7px] overflow-hidden shrink-0 z-[10]"
        loading="lazy"
        alt=""
        src="/iconsxcircle.svg"
      />
    </div>
  );
};

RegistrationForm4.propTypes = {
  className: PropTypes.string,
};

export default RegistrationForm4;
