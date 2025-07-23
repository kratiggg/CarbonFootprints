import RegistrationForm4 from "../components/registration-form4";
import FrameComponent3 from "/src/components/frame-component3";
import RegistrationForm from "/src/components/registration-form";
import { Link } from 'react-router-dom';


const OrganizationForm = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start pt-12 px-[87px] pb-[98px] box-border gap-[53px] leading-[normal] tracking-[normal] text-center text-base text-darkslategray-400 font-inter mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[26px] mq750:pl-[43px] mq750:pr-[43px] mq750:box-border">
      
      <div className="w-[429px] !m-[0] absolute top-[345px] left-[503px] flex flex-row items-start justify-start pt-[9.9px] pb-[16.1px] pl-[110px] pr-[100px] box-border max-w-full">
        
      </div>
      <RegistrationForm />
      <main className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <section className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-[url('/public/untitled-design-18@2x.png')] bg-cover bg-no-repeat bg-[top] z-[3]">
          <img
            className="absolute top-[1px] left-[0px] w-full h-full object-cover "
            alt=""
            src="/src/image/pink.png"
          />
          <div className="absolute top-[45px] left-[calc(50%_-_641.3px)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[30px] bg-darkslategray-100 w-[1270.6px] h-[795px] mix-blend-hard-light z-[1] opacity-[0.8]" />

          <img
            className="absolute top-[650px] left-[0px] w-[251.1px] h-[241px] object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/src/image/burn.png"
          />
          <img
            className="absolute top-[579px] left-[1050.6px] w-[283.4px] h-56 object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/src/image/kola.png"
          />
        </section>
        <img
          className="absolute top-[677px] left-[212px] w-2 h-[42px] z-[4]"
          loading="lazy"
          alt=""
          src="/gwenderoptions.svg"
        />
      </main>
      <div className="w-[1199px] flex flex-row items-start justify-center max-w-full">
     
        <div className="w-[345px] flex flex-row items-start justify-start flex-wrap content-start gap-[37px] max-w-full mq450:gap-[18px]">
          <button className="cursor-pointer border-gray-100 border-[1px] border-solid py-2.5 px-[43px] bg-gray-800 flex-1 rounded-mini box-border flex flex-row items-start justify-start min-w-[100px] z-[4] hover:bg-darkslategray-500 hover:border-dimgray-100 hover:border-[1px] hover:border-solid hover:box-border">
            <div className="h-[46px] w-[154px] relative rounded-mini bg-gray-800 border-gray-100 border-[1px] border-solid box-border hidden" />
            <div className="flex-1 relative text-base font-inter text-darkslategray-400 text-center z-[1]">
              Reset
            </div>
          </button>
          <Link
  to="/src/pages/OrganizationForm1"
  className="cursor-pointer border-gray-100 border-[1px] border-solid py-2.5 px-[43px] bg-gray-600 flex-1 rounded-mini box-border flex flex-row items-start justify-start min-w-[100px] z-[4] hover:bg-dimgray-300 hover:border-dimgray-100 hover:border-[1px] hover:border-solid hover:box-border"
>
  <div className="h-[46px] w-[154px] relative rounded-mini bg-gray-600 border-gray-100 border-[1px] border-solid box-border hidden" />
  <div className="flex-1 relative text-base font-inter text-gray-400 text-center z-[1]">
    Next  
  </div>
</Link>
        </div>
      </div>
    </div>
  );
};

export default OrganizationForm;