const PopupModal1 = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSecureAccount = () => {
    // Dummy validation logic
    const isFormValid = true; // Replace with actual form validation if needed

    if (isFormValid) {
      alert('Account secured successfully!');
      navigate('/next-page'); // Navigate to the next page
    } else {
      alert('Please complete all fields.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-[439px] h-auto relative shadow-[0px_4px_35px_rgba(0,_0,_0,_0.08)] rounded-xl bg-white p-8 max-w-full">
        <div className="flex flex-col items-center justify-start gap-[26.7px] max-w-full">
          <div className="flex flex-col items-center justify-start gap-[13px] max-w-full text-center text-xl">
            <i className="relative font-bold z-[10] mq450:text-base">
              Congratulations! Your account has been successfully created
            </i>
            <div className="flex flex-row items-center justify-center py-0 px-[65px] box-border max-w-full text-base">
              <div className="relative inline-block max-w-full z-[10]">
                To secure your account, please select a security question and provide an answer
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="text-left font-medium mb-2">Security Question</label>
              <select
                className="border-[1px] border-solid border-[#2c9cf0] bg-white w-full h-[57px] px-4 rounded-4xs box-border"
              >
                <option>Select</option>
                <option>What is your mother's maiden name?</option>
                <option>What is your best friend's name?</option>
                <option>What is the name of your first pet?</option>
                <option>What is the name of the street you grew up on?</option>
                <option>What is your favorite teacher's name?</option>
              </select>
            </div>
            <div className="flex flex-col relative">
              <label className="text-left font-medium mb-2">Security Answer</label>
              <input
                className="border-[1px] border-solid border-darkgray-100 bg-white w-full h-[57px] px-4 rounded-4xs box-border"
                type={isPasswordVisible ? 'text' : 'password'}
                placeholder="Password"
              />
              <img
                className="absolute top-[35px] right-4 w-5 h-5 overflow-hidden z-[11] cursor-pointer"
                loading="lazy"
                alt={isPasswordVisible ? 'Hide Password' : 'Show Password'}
                src={isPasswordVisible ? '/eye-off.svg' : '/eye.svg'}
                onClick={togglePasswordVisibility}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-left font-medium mb-2">Confirm Security Answer</label>
              <input
                className="border-[1px] border-solid border-darkgray-100 bg-white w-full h-[57px] px-4 rounded-4xs box-border"
                type="password"
                placeholder="Password"
              />
            </div>
          </div>
          <button
            onClick={handleSecureAccount}
            className="cursor-pointer bg-green-600 [border:none] py-[15px] px-8 bg-olivedrab-100 shadow-[0px_4px_19px_rgba(119,_147,_65,_0.3)] rounded-3xs flex items-center justify-center box-border whitespace-nowrap max-w-full z-[10] hover:bg-olivedrab-200"
          >
            <div className="relative text-base font-medium text-white text-center z-[1]">
              Secure My Account
            </div>
          </button>
        </div>
        <img
          className="h-[30px] w-[30px] absolute top-[-13px] right-[-7px] overflow-hidden shrink-0 z-[10] cursor-pointer"
          loading="lazy"
          alt="Close"
          src="/iconsxcircle.svg"
        />
      </div>
    </div>
  );
};

export default PopupModal1;
