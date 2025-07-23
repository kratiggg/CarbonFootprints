import PropTypes from "prop-types";

const VisionContent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-[33px] pb-[212px] box-border max-w-full text-center text-xs text-black-white-white font-acme mq450:pb-[138px] mq450:box-border ${className}`}
    >
      <div className="w-[777px] flex flex-row items-start justify-center flex-wrap content-start gap-[21px] max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start min-w-[198px]">
          <div className="w-[200px] flex flex-row items-start justify-start pt-[151px] px-5 pb-3.5 box-border bg-[url('/public/untitled-design-17@2x.png')] bg-cover bg-no-repeat bg-[top] z-[3]">
            <img
              className="h-[200px] w-[200px] relative object-cover hidden"
              alt=""
              src="/untitled-design-17@2x.png"
            />
            <div className="w-[147px] relative inline-block shrink-0 z-[6]">
              Promoting Environmental Awareness
            </div>
            
          </div>
        </div>
        <div className="w-[142px] flex flex-col items-start justify-start pt-[151px] px-0 pb-0 box-border">
          <div className="self-stretch relative z-[3]">
            Driving Sustainable Innovation
          </div>
        </div>
        <div className="w-[137px] flex flex-col items-start justify-start pt-[151px] pb-0 pl-0 pr-[5px] box-border">
          <div className="self-stretch relative z-[3]">
            Fostering Global Collaboration
          </div>
        </div>
        <div className="w-[131px] flex flex-col items-start justify-start pt-[151px] px-0 pb-0 box-border">
          <div className="self-stretch relative z-[3]">
            Building a legacy for Future Generation
          </div>
        </div>
      </div>
    </section>
  );
};

VisionContent.propTypes = {
  className: PropTypes.string,
};

export default VisionContent;
