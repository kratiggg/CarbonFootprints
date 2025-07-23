import PropTypes from "prop-types";
const Signup = ({ className = "" }) => {
  return (
    <div
      className={`w-[1194px] flex flex-row items-start justify-start py-0 px-[77px] box-border max-w-full text-left text-xl text-black-white-white font-acme mq1225:pl-[38px] mq1225:pr-[38px] mq1225:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-2 max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[13px] pl-5 pr-[23px] box-border max-w-full text-61xl">
          <h1 className="m-0 w-[347px] relative text-inherit font-normal font-[inherit] inline-block shrink-0 max-w-full z-[1] mq750:text-21xl mq450:text-5xl">
            Our Story
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[21px] pr-[22px] box-border max-w-full text-center font-inter">
          <div className="flex-1 flex flex-col items-end justify-start gap-[42px] max-w-full mq750:gap-[21px]">
            <div className="w-[981px] flex flex-col items-start justify-start gap-[31px] max-w-full mq750:gap-[15px]">
              <h3 className="m-0 self-stretch relative text-inherit font-normal font-[inherit] z-[1] mq450:text-base">
                started as a small initiative has now grown into a comprehensive
                tool used by government entities to monitor and reduce carbon
                footprints.
              </h3>
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-left text-burlywood font-acme">
                <div className="relative inline-block min-w-[43px] z-[1] mq450:text-base">
                  2024
                </div>
              </div>
            </div>
            <img
              className="self-stretch h-[33px] relative max-w-full overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src="/group-1.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 text-burlywood mq1050:flex-wrap">
          <h3 className="m-0 relative text-inherit font-normal font-[inherit] inline-block min-w-[71px] z-[1] mq450:text-base">
            February
          </h3>
          <div className="w-[711.4px] flex flex-col items-start justify-start gap-[49px] max-w-full mq750:gap-6">
            <div className="w-[693.9px] flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap">
                <h3 className="m-0 relative text-inherit font-normal font-[inherit] inline-block min-w-[50px] z-[1] mq450:text-base">
                  March
                </h3>
                <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[9px]">
                  <h3 className="m-0 relative text-inherit font-normal font-[inherit] inline-block min-w-[40px] z-[1] mq450:text-base">
                    April
                  </h3>
                </div>
                <div className="flex flex-col items-start justify-start py-0 pl-0 pr-2">
                  <h3 className="m-0 relative text-inherit font-normal font-[inherit] inline-block min-w-[34px] z-[1] mq450:text-base">
                    May
                  </h3>
                </div>
                <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[9px]">
                  <h3 className="m-0 relative text-inherit font-normal font-[inherit] inline-block min-w-[37px] z-[1] mq450:text-base">
                    June
                  </h3>
                </div>
                <h3 className="m-0 relative text-inherit font-normal font-[inherit] inline-block min-w-[32px] z-[1] mq450:text-base">
                  July
                </h3>
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-darkslategray-100 flex flex-col items-start justify-start pt-8 px-16 pb-[44.8px] box-border gap-[23px] max-w-full shrink-0 z-[1] text-13xl font-inter mq750:pl-8 mq750:pr-8 mq750:box-border mq450:pt-[21px] mq450:pb-[29px] mq450:box-border">
              <div className="w-[711.4px] h-[352.8px] relative rounded-xl bg-darkslategray-100 hidden max-w-full" />
              <div className="self-stretch flex flex-row items-start justify-center py-0 pl-0 pr-1">
                <h1 className="m-0 relative text-inherit font-normal font-[inherit] z-[2] mq750:text-7xl mq450:text-lgi">
                  Conception of the Idea
                </h1>
              </div>
              <div className="w-[401.3px] flex flex-row items-start justify-start relative max-w-full text-center text-xl text-black-white-white">
                <h3 className="m-0 h-[212px] flex-1 relative text-inherit font-normal font-[inherit] inline-block max-w-full z-[2] mq450:text-base">
                  The rising global concern over carbon emissions and their
                  impact on climate change led to the conception of our project.
                  Our team recognized the need for a comprehensive platform to
                  monitor the carbon footprint produced by coal plants, aiming
                  to drive actionable insights and promote sustainability.
                </h3>
                <img
                  className="h-[250px] w-[245.3px] absolute !m-[0] top-[-23px] right-[-222.7px] object-cover z-[4]"
                  loading="lazy"
                  alt=""
                  src="/untitled-design-20-1@2x.png"
                />
              </div>
            </div>
          </div>
          <h3 className="m-0 relative text-inherit font-normal font-[inherit] inline-block min-w-[59px] z-[1] mq450:text-base">
            August
          </h3>
        </div>
      </div>
    </div>
  );
};

Signup.propTypes = {
  className: PropTypes.string,
};

export default Signup;