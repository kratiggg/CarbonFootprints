import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent4 = ({
  className = "",
  sudhar2,
  topNavFlexWrap,
  frameDivMinWidth,
}) => {
  const topNavStyle = useMemo(() => {
    return {
      flexWrap: topNavFlexWrap,
    };
  }, [topNavFlexWrap]);

  const frameDivStyle = useMemo(() => {
    return {
      minWidth: frameDivMinWidth,
    };
  }, [frameDivMinWidth]);

  return (
    <header
      className={`self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full text-center text-mini text-black-white-white font-inter ${className}`}
    >
      <div className="self-stretch rounded-xl bg-gray-200 border-dimgray-200 border-[2px] border-solid box-border flex flex-row items-end justify-start py-px px-0 gap-[25px] max-w-full">
        <div className="h-[45px] w-[1266px] relative rounded-xl bg-gray-200 border-dimgray-200 border-[2px] border-solid box-border hidden max-w-full" />
        <img
          className="h-[37px] w-[49px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src={sudhar2}
        />
        <div className="w-[1024px] flex flex-col items-start justify-end pt-0 px-0 pb-2 box-border max-w-[calc(100%_-_195px)]">
          <nav
            className="m-0 w-[539px] flex flex-row items-start justify-start flex-wrap content-start gap-3 max-w-full whitespace-nowrap text-center text-mini text-black-white-white font-inter"
            style={topNavStyle}
          >
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[5px]">
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[43px] z-[1]">
                Home
              </a>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[3px]">
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[66px] z-[1]">
                About Us
              </a>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[5px]">
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[78px] z-[1]">{`Dashboard `}</a>
            </div>
            <div
              className="flex-1 flex flex-row items-start justify-start min-w-[71px]"
              style={frameDivStyle}
            >
              <a className="[text-decoration:underline] flex-1 relative font-bold text-[inherit] inline-block min-w-[90px] z-[1]">
                Registration
              </a>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[2] ml-[-1px]"
                alt=""
                src="/chevrondown.svg"
              />
            </div>
            <div className="w-[87px] flex flex-col items-start justify-start py-0 pl-0 pr-[7px] box-border">
              <a className="[text-decoration:none] self-stretch relative text-[inherit] inline-block min-w-[80px] z-[1]">
                Contact Us
              </a>
            </div>
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[83px] z-[1]">
              Regulations
            </a>
          </nav>
        </div>
        <div className="w-24 flex flex-col items-start justify-end pt-0 px-0 pb-[3px] box-border">
          <button className="cursor-pointer [border:none] pt-1.5 px-[27px] pb-[7px] bg-gray-100 self-stretch rounded-mini flex flex-row items-start justify-start z-[1] hover:bg-dimgray-100">
            <div className="h-[30px] w-24 relative rounded-mini bg-gray-100 hidden" />
            <a className="[text-decoration:none] relative text-sm font-inter text-black-white-white text-center inline-block min-w-[37px] z-[1]">
              Login
            </a>
          </button>
        </div>
      </div>
      <div className="w-[812px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-48 rounded-mini bg-gray-200 flex flex-col items-start justify-start pt-3.5 px-3.5 pb-[11px] box-border gap-0.5">
          <div className="w-48 h-[67px] relative rounded-mini bg-gray-200 hidden" />
          <div className="flex flex-row items-start justify-start py-0 px-px">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[72px] z-[1]">
              Coal Mine
            </a>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-0.5">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0">
              <div className="h-px flex-1 relative border-dimgray-200 border-t-[1px] border-solid box-border z-[1]" />
            </div>
            <a className="[text-decoration:none] relative text-[inherit] z-[1]">
              Government Authority
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
  sudhar2: PropTypes.string,

  /** Style props */
  topNavFlexWrap: PropTypes.any,
  frameDivMinWidth: PropTypes.any,
};
export default FrameComponent4;
