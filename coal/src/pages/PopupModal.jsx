import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PopupModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    userID: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Dummy data for successful login simulation
  const dummyProfile = {
    userID: 'testUser123',
    password: 'password123',
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      // Simulate a successful login with dummy data
      if (
        formData.userID === dummyProfile.userID &&
        formData.password === dummyProfile.password &&
        formData.password === formData.confirmPassword
      ) {
        alert('Login Successful');
        setLoading(false);
        onClose(); // Close the modal after successful login
        navigate('/src/main/Calculate'); // Redirect to the next page
      } else {
        alert('Invalid credentials or passwords do not match');
        setLoading(false);
      }
    }, 1000); // Simulate a delay
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-[439px] h-auto relative shadow-[0px_4px_35px_rgba(0,_0,_0,_0.08)] rounded-xl bg-white p-8 max-w-full">
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-start gap-[26.7px] max-w-full">
          <div className="flex flex-col items-center justify-start gap-[13px] max-w-full text-center text-xl">
            <i className="relative font-bold z-[10] mq450:text-base">
              Initial Registration has been completed Successfully
            </i>
            <div className="flex flex-row items-center justify-center py-0 px-[65px] box-border max-w-full text-base">
              <div className="relative inline-block max-w-full z-[10]">
                Please complete your Login Credentials
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="text-left font-medium mb-2">User ID</label>
              <input
                name="userID"
                value={formData.userID}
                onChange={handleChange}
                className="border-[1px] border-solid border-[#2c9cf0] bg-white w-full h-[57px] px-4 rounded-4xs box-border"
                type="text"
                placeholder="employee ID number"
              />
            </div>
            <div className="flex flex-col relative">
              <label className="text-left font-medium mb-2">Enter your Password</label>
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="border-[1px] border-solid border-darkgray-100 bg-white w-full h-[57px] px-4 rounded-4xs box-border"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-left font-medium mb-2">Confirm your Password</label>
              <input
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="border-[1px] border-solid border-darkgray-100 bg-white w-full h-[57px] px-4 rounded-4xs box-border"
                type="password"
                placeholder="Password"
              />
            </div>
          </div>
          <button 
            type="submit"
            disabled={loading}
            className="cursor-pointer bg-green-400 [border:none] py-[15px] px-8 bg-olivedrab-100 shadow-[0px_4px_19px_rgba(119,_147,_65,_0.3)] rounded-3xs flex items-center justify-center box-border whitespace-nowrap max-w-full z-[10] hover:bg-olivedrab-200"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>
        <img
          className="h-[30px] w-[30px] absolute top-[-13px] right-[-7px] overflow-hidden shrink-0 z-[10] cursor-pointer"
          loading="lazy"
          alt="Close"
          src="/iconsxcircle.svg"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default PopupModal;
