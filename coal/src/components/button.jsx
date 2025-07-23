import PropTypes from "prop-types";

const Button = ({ className = "" }) => {
  return (
    <button
      className={`cursor-pointer [border:none] py-2 pl-[25px] pr-6 bg-indigo-500 rounded-md flex flex-row items-start justify-start z-[1] hover:bg-mediumslateblue ${className}`}
    >
      <div className="relative text-sm leading-[24px] font-medium font-button-sm text-black-white-white text-left inline-block min-w-[71px]">
        Subscribe
      </div>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
