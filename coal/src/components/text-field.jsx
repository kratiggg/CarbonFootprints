import PropTypes from "prop-types";

const TextField = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 rounded-md border-darkgray border-[1px] border-solid flex flex-row items-start justify-start pt-1.5 px-3 pb-[5px] z-[1] ${className}`}
    >
      <input
        className="w-[134px] [border:none] [outline:none] bg-[transparent] h-[25px] flex flex-row items-start justify-start font-button-sm text-sm text-mistyrose"
        placeholder="Enter your email"
        type="text"
      />
    </div>
  );
};

TextField.propTypes = {
  className: PropTypes.string,
};

export default TextField;
