import PropTypes from "prop-types";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-gray-1200 bg-black flex flex-col items-center justify-start pt-12 pb-[124px] pl-5 pr-[22px] box-border gap-[105px] max-w-full z-[3] text-center text-77xl text-black-white-white font-inter mq450:gap-[26px] mq750:gap-[52px] mq750:pt-[31px] mq750:pb-[81px] mq750:box-border ${className}`}
    >
      <div className="w-[1440px] h-[626px] bg-black relative bg-gray-1200 hidden max-w-full" />
      
        <div className="h-[45px] w-[1266px] relative rounded-xl bg-gray-200 border-dimgray-200 border-[2px] border-solid box-border hidden max-w-full" />
        <img
          className="h-[100px] w-[250px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/src/image/kela.jpg"
        />
        <div className="w-[1145px]  flex flex-col items-start justify-end pt-0 px-0 pb-[3px] box-border max-w-full">

        </div>
     
      <div className="w-[1266px] bg-black flex flex-row items-start justify-center py-0 pl-px pr-0 box-border max-w-full">
        <div className="w-[955px] flex flex-col items-end justify-start gap-3 max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[25px] pr-5 box-border max-w-full">
            <h1 className="m-0 w-[794px]  relative text-inherit inline-block italic font-medium font-[inherit] shrink-0 max-w-full z-[4] mq450:text-10xl mq1050:text-29xl">
              Carbon Footprint Calculator
            </h1>
          </div>
          <i className="self-stretch relative text-5xl font-extralight z-[4] mq450:text-lgi">
            Please provide the details of your coal mine's emissions to
            calculate its carbon footprint.
          </i>
        </div>
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};
export default FrameComponent6;