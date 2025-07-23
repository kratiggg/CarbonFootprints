import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`ml-[-173px] w-[1490px] flex flex-col items-end justify-start gap-[33.9px] max-w-[114%] shrink-0 text-center text-13xl text-black-white-white font-inter mq750:gap-[17px] ${className}`}
    >
      <header className="w-[1442px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1266px] rounded-xl border-dimgray-200 border-[2px] border-solid box-border flex flex-row items-end justify-start py-px px-0 gap-[25px] max-w-full z-[1] mq1225:w-[242px]">
          <div className="h-[39.2px] w-[1266px] relative rounded-xl border-dimgray-200 border-[2px] border-solid box-border hidden max-w-full" />
          <img
            className="h-[32.2px] w-[49px] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/sudhar-2@2x.png"
          />
          <nav className="m-0 w-[1024px] flex flex-col items-start justify-end pt-0 px-0 pb-[5.4px] box-border max-w-full mq1225:hidden">
            <nav className="m-0 w-[524px] flex flex-row items-start justify-start gap-[17.4px] max-w-full text-center text-mini text-black-white-white font-inter">
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[43px] z-[1]">
                Home
              </a>
              <a className="[text-decoration:underline] relative leading-[15.7px] font-bold text-[inherit] inline-block min-w-[68px] whitespace-nowrap z-[1]">
                About Us
              </a>
              <a className="[text-decoration:none] flex-1 relative leading-[15.7px] text-[inherit] inline-block min-w-[78px] whitespace-nowrap z-[1]">{`Dashboard `}</a>
              <a className="[text-decoration:none] flex-1 relative leading-[15.7px] text-[inherit] inline-block min-w-[83px] z-[1]">
                Regulations
              </a>
              <a className="[text-decoration:none] flex-1 relative leading-[15.7px] text-[inherit] inline-block min-w-[80px] whitespace-nowrap z-[1]">
                Contact Us
              </a>
              <a className="[text-decoration:none] flex-1 relative leading-[15.7px] text-[inherit] inline-block min-w-[85px] whitespace-nowrap z-[1]">{`Registration `}</a>
            </nav>
          </nav>
          <div className="w-24 flex flex-col items-start justify-end pt-0 px-0 pb-[2.6px] box-border">
            <button className="cursor-pointer [border:none] pt-[5.2px] px-[27px] pb-[6.1px] bg-gray-100 self-stretch rounded-mini flex flex-row items-start justify-start z-[1] hover:bg-dimgray-100">
              <div className="h-[26.1px] w-24 relative rounded-mini bg-gray-100 hidden" />
              <a className="[text-decoration:none] relative text-sm leading-[14.8px] font-inter text-black-white-white text-center inline-block min-w-[37px] z-[1]">
                Login
              </a>
            </button>
          </div>
        </div>
      </header>
      <div className="self-stretch h-[815.9px] flex flex-row items-start justify-start pt-[278.7px] pb-0 pl-[120px] pr-0 box-border gap-24 max-w-full z-[2] mq750:gap-12 mq750:pl-[30px] mq750:pt-[118px] mq750:box-border mq1225:pl-[60px] mq1225:pt-[181px] mq1225:box-border mq450:gap-6 mq1050:h-auto">
        <div className="w-[329px] flex flex-col items-start justify-start gap-[180.4px] max-w-[calc(100%_-_1041px)] mq1225:max-w-full mq450:gap-[90px]">
          <h1 className="m-0 w-[285px] relative text-inherit inline-block z-[1] font-[inherit] mq750:text-7xl mq450:text-lgi">
            <span>{`Our `}</span>
            <i className="font-black">Mission</i>
            <span> is to..</span>
          </h1>
          <div className="self-stretch flex flex-row items-start justify-end">
            <h1 className="m-0 w-[285px] relative text-inherit leading-[33.1px] inline-block shrink-0 z-[1] font-[inherit] mq750:text-7xl mq750:leading-[26px] mq450:text-lgi mq450:leading-[20px]">
              <span>{`Our `}</span>
              <i className="font-black">Story</i>
              <span>..</span>
            </h1>
          </div>
        </div>
        <div className="mt-[-278.8px] flex-1 flex flex-col items-start justify-start gap-[52.3px] max-w-[calc(100%_-_425px)] shrink-0 text-45xl font-inria-serif mq750:gap-[26px] mq1225:hidden">
          <h1 className="m-0 w-[472px] relative text-inherit inline-block italic font-bold font-[inherit] max-w-full z-[1] mq750:text-32xl mq450:text-19xl">
            About SUDHAR
          </h1>
          <div className="self-stretch flex flex-row items-start justify-end max-w-full text-13xl font-inter">
            <div className="w-[863px] flex flex-row items-start justify-center gap-[25px] max-w-full mq1050:flex-wrap">
              <div className="w-[285px] flex flex-col items-start justify-start pt-[526.8px] px-0 pb-0 box-border min-w-[285px] mq750:pt-[342px] mq750:box-border mq1050:flex-1">
                <h1 className="m-0 self-stretch relative text-inherit leading-[33.1px] z-[1] font-[inherit] mq750:text-7xl mq750:leading-[26px] mq450:text-lgi mq450:leading-[20px]">
                  <span>{`Our `}</span>
                  <i className="font-extrabold">Team</i>
                  <span>..</span>
                </h1>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[131.5px] pb-[228.2px] pl-[109px] pr-12 box-border relative gap-[147.5px] min-w-[359px] max-w-full mq750:gap-[74px] mq750:pt-[85px] mq750:pb-[148px] mq750:pl-[54px] mq750:pr-6 mq750:box-border mq750:min-w-full mq450:gap-[37px] mq450:pl-5 mq450:box-border">
                <div className="self-stretch flex flex-row items-start justify-end">
                  <h1 className="m-0 w-[285px] relative text-inherit inline-block shrink-0 z-[1] font-[inherit] mq750:text-7xl mq450:text-lgi">
                    <i className="font-black">Vision</i>
                    <span>{` and `}</span>
                    <i className="font-black">Values</i>
                    <span>..</span>
                  </h1>
                </div>
                <h1 className="m-0 w-[285px] h-[100.1px] relative text-inherit inline-block shrink-0 z-[1] font-[inherit] mq750:text-7xl mq450:text-lgi">
                  <span>{`Our `}</span>
                  <i className="font-black">{`Impact `}</i>
                  <span>Stories..</span>
                </h1>
                <div className="w-full !m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-start max-w-full h-full">
                  <div className="h-[806.3px] w-[1451px] absolute !m-[0] top-[-130.6px] left-[-937px]">
                    <img
                      className="absolute top-[137.5px] left-[576.4px] rounded-mini w-[138.2px] h-[138.1px] object-cover"
                      loading="lazy"
                      alt=""
                      src="/row1column1-3@2x.png"
                    />
                    <img
                      className="absolute top-[127.2px] left-[735.8px] rounded-mini w-[205.2px] h-[160.9px] object-cover"
                      alt=""
                      src="/row1column2-1@2x.png"
                    />
                    <img
                      className="absolute top-[285.3px] left-[535px] rounded-mini w-[184px] h-[131.9px] object-cover"
                      alt=""
                      src="/row2column1-1@2x.png"
                    />
                    <img
                      className="absolute top-[306px] left-[735.8px] rounded-mini w-[219.2px] h-[134.7px] object-cover"
                      alt=""
                      src="/row2column2-1@2x.png"
                    />
                    <img
                      className="absolute top-[433.8px] left-[535px] rounded-mini w-[184px] h-[130.5px] object-cover"
                      alt=""
                      src="/row3column1@2x.png"
                    />
                    <img
                      className="absolute top-[452.4px] left-[734px] rounded-mini w-[172.6px] h-[135.4px] object-cover"
                      loading="lazy"
                      alt=""
                      src="/row3column2@2x.png"
                    />
                    <img
                      className="absolute top-[346.6px] left-[688px] w-[467px] h-[316.9px] object-cover z-[1]"
                      alt=""
                      src="/untitled-design-13-1@2x.png"
                    />
                    <img
                      className="absolute top-[37.5px] left-[315px] w-[467px] h-[316.9px] object-cover z-[2]"
                      alt=""
                      src="/untitled-design-13-2@2x.png"
                    />
                    <img
                      className="absolute top-[552.1px] left-[129px] w-[339px] h-[254.2px] object-cover"
                      alt=""
                      src="/untitled-design-15-1@2x.png"
                    />
                    <img
                      className="absolute top-[117.6px] left-[1112px] w-[339px] h-[254.2px] object-cover z-[2]"
                      loading="lazy"
                      alt=""
                      src="/untitled-design-15-2@2x.png"
                    />
                    <img
                      className="absolute top-[472.8px] left-[164px] w-[467px] h-[316.9px] object-cover z-[1]"
                      alt=""
                      src="/untitled-design-13-3@2x.png"
                    />
                    <img
                      className="absolute top-[0px] left-[0px] w-[636px] h-[489.3px] object-cover z-[3]"
                      alt=""
                      src="/untitled-design-16-1@2x.png"
                    />
                  </div>
                  <img
                    className="h-[685.3px] flex-1 relative max-w-full overflow-hidden object-contain z-[3]"
                    alt=""
                    src="/untitled-design-17-1@2x.png"
                  />
                  <div className="h-px w-[1291px] absolute !m-[0] bottom-[25.1px] left-[-801px] border-black-white-white border-t-[1px] border-solid box-border z-[4]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
