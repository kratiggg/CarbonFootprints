import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div
      className={`w-full !m-[0] absolute right-[0px] bottom-[527px] left-[0px] bg-gray-200 flex flex-row items-start justify-end pt-[108px] px-0 pb-[103px] box-border max-w-full ${className}`}
    >
      <div className="h-[726px] w-[1440px] relative bg-gray-200 hidden max-w-full z-[0]" />
      <img
        className="w-[655px] relative max-h-full object-cover max-w-full z-[2]"
        loading="lazy"
        alt=""
        src="/impact@2x.png"
      />
      <div className="h-[1189px] w-[1401px] absolute !m-[0] top-[-591px] left-[0px]">
        <img
          className="absolute top-[724px] left-[-90px] w-[1440px] h-[465px] z-[1]"
          alt=""
          src="/rectangle-4462.svg"
        />
        <img
          className="absolute top-[0px] left-[0px] rounded-3xs w-[655px] h-[772px] object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/untitled-design-16@2x.png"
        />
        <img
          className="absolute top-[359px] left-[815px] rounded-[50%] w-[119px] h-[120px] object-cover z-[4]"
          loading="lazy"
          alt=""
          src="/untitled-design-18@2x.png"
        />
        <img
          className="absolute top-[359px] left-[967px] rounded-[50%] w-[119px] h-[120px] object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/untitled-design-19@2x.png"
        />
        <img
          className="absolute top-[359px] left-[1125px] rounded-[50%] w-[119px] h-[120px] object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/untitled-design-20@2x.png"
        />
        <img
          className="absolute top-[359px] left-[1282px] rounded-[50%] w-[119px] h-[120px] object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/untitled-design-21@2x.png"
        />
        <img
          className="absolute top-[988px] left-[97px] w-[207px] h-[155px] object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/you-1-1@2x.png"
        />
        <img
          className="absolute top-[961px] left-[467px] w-[237px] h-[202px] object-cover z-[3]"
          loading="lazy"
          alt=""
          src="/you-3@2x.png"
        />
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
