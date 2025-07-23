import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent = ({
  className = "",
  enterYourPassword,
  propDisplay,
  propMinWidth,
  propBorder,
  password,
}) => {
  const enterYourPasswordStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const rectangleInputStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  return (
    <div
      className={`self-stretch h-[92px] flex flex-col items-start justify-start pt-[35px] px-0 pb-0 box-border relative gap-[13px] z-[10] text-left text-base text-black font-button-sm ${className}`}
    >
      <div
        className="mt-[-37px] relative shrink-0"
        style={enterYourPasswordStyle}
      >
        {enterYourPassword}
      </div>
      <input
        className="border-darkgray-100 border-[1px] border-solid [outline:none] bg-black-white-white self-stretch h-[57px] relative rounded-4xs box-border min-w-[250px] shrink-0"
        type="text"
        style={rectangleInputStyle}
      />
      <div className="w-[302px] absolute !m-[0] bottom-[19px] left-[25px] text-sm font-light text-gray-400 inline-block z-[1]">
        {password}
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  enterYourPassword: PropTypes.string,
  password: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propBorder: PropTypes.any,
};
 export default GroupComponent;