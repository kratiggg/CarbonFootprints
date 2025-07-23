import React, { useState } from "react";
import PropTypes from "prop-types";

// Define handleSubmit function
const handleSubmit = async (formType, formData) => {
  try {
    const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formType, ...formData }),
    });

    if (response.ok) {
      alert('Registration successful!');
    } else {
      const data = await response.json();
      alert(`Registration failed: ${data.message}`);
    }
  } catch (error) {
    alert('Error in submission');
    console.error('Error in submission', error);
  }
};

// Define submitForm3 function
const submitForm3 = async (formData) => {
  await handleSubmit('form3', formData);
};

const RegistrationForm2 = ({ className = "" }) => {
  // State management for form fields
  const [formData, setFormData] = useState({
    employeeId: '',
    jobTitle: {
      Miner: false,
      'Safety Officer': false,
      Engineer: false,
      Manager: false
    },
    workLocation: '',
    department: {
      'Mining Operations': false,
      'Safety & Compliance': false,
      'Environmental Management': false,
      'Human Resource': false,
      'Quality Control': false,
      Other: false
    },
    employmentType: {
      'Full-Time': false,
      'Part-Time': false,
      Contract: false,
      Temporary: false
    }
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => {
      if (type === 'checkbox') {
        return {
          ...prevData,
          [name]: checked
        };
      }
      return {
        ...prevData,
        [name]: value
      };
    });
  };

  const handleJobTitleChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      jobTitle: {
        ...prevData.jobTitle,
        [name]: checked
      }
    }));
  };

  const handleDepartmentChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      department: {
        ...prevData.department,
        [name]: checked
      }
    }));
  };

  const handleEmploymentTypeChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      employmentType: {
        ...prevData.employmentType,
        [name]: checked
      }
    }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await submitForm3(formData);
      // Optionally clear the form or perform other actions
      setFormData({
        employeeId: '',
        jobTitle: {
          Miner: false,
          'Safety Officer': false,
          Engineer: false,
          Manager: false
        },
        workLocation: '',
        department: {
          'Mining Operations': false,
          'Safety & Compliance': false,
          'Environmental Management': false,
          'Human Resource': false,
          'Quality Control': false,
          Other: false
        },
        employmentType: {
          'Full-Time': false,
          'Part-Time': false,
          Contract: false,
          Temporary: false
        }
      });
    } catch (error) {
      console.error('Error registering:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-2 pl-16 pr-[65px] box-border max-w-full text-center text-21xl text-olivedrab font-inter lg:pl-8 lg:pr-8 lg:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-start gap-[22.6px] max-w-full">
        <div className="w-[1122px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <h1 className="m-0 w-[704px] relative text-inherit inline-block italic font-light font-[inherit] shrink-0 max-w-full z-[4] mq450:text-5xl mq1050:text-13xl">
            Coal Mine’s Employee Registration
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-[25px] box-border max-w-full text-mini text-darkgray">
          <div className="flex-1 relative inline-block max-w-full z-[4]">
            Please fill out the form below to register as a coal plant worker on
            our platform. Your information will help us verify your identity and
            ensure secure access to the carbon footprint monitoring system.
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 text-base text-black-white-white lg:flex-wrap lg:justify-center">
          <div className="w-[429px] flex flex-col items-start justify-start gap-[33.3px] min-w-[431px] max-w-full lg:flex-1 mq450:gap-[17px] mq1050:min-w-full">
            <div className="self-stretch flex flex-row items-start justify-end pt-0 px-[11px] pb-[27.7px] box-border max-w-full">
              <div className="w-[356px] flex flex-col items-start justify-start gap-[15px] max-w-full">
                <div className="relative inline-block min-w-[105px] z-[4]">
                  Employee ID*
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-[18px] px-[11px] pb-[15px] relative z-[4]">
                  <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-mini bg-gray-100 mix-blend-screen" />
                  <input
                    name="employeeId"
                    value={formData.employeeId}
                    onChange={handleChange}
                    className="w-[121px] [border:none] [outline:none] font-inter text-base bg-[transparent] h-[23px] relative text-gray-300 text-center inline-block p-0 z-[1]"
                    placeholder="ex. ABC123456"
                    type="text"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Job Title with Checkboxes */}
            <div className="w-[223px] flex flex-row items-start justify-start pt-0 px-[62px] pb-[5.7px] box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-1.5">
                <div className="w-[68px] relative inline-block min-w-[68px] z-[4]">
                  Job Title
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-smi text-gray-300">
                  <label className="w-[39px] relative inline-block min-w-[39px] z-[4] flex items-center">
                    <input
                      type="checkbox"
                      name="Miner"
                      checked={formData.jobTitle.Miner}
                      onChange={handleJobTitleChange}
                      className="mr-2"
                    />
                    Miner
                  </label>
                  <label className="w-[39px] relative inline-block min-w-[39px] z-[4] flex items-center">
                    <input
                      type="checkbox"
                      name="Safety Officer"
                      checked={formData.jobTitle["Safety Officer"]}
                      onChange={handleJobTitleChange}
                      className="mr-2"
                    />
                    Safety Officer
                  </label>
                  <label className="w-[39px] relative inline-block min-w-[39px] z-[4] flex items-center">
                    <input
                      type="checkbox"
                      name="Engineer"
                      checked={formData.jobTitle.Engineer}
                      onChange={handleJobTitleChange}
                      className="mr-2"
                    />
                    Engineer
                  </label>
                  <label className="w-[39px] relative inline-block min-w-[39px] z-[4] flex items-center">
                    <input
                      type="checkbox"
                      name="Manager"
                      checked={formData.jobTitle.Manager}
                      onChange={handleJobTitleChange}
                      className="mr-2"
                    />
                    Manager
                  </label>
                </div>
              </div>
            </div>

            <div className="self-stretch flex flex-row items-start justify-end py-0 px-[11px] box-border max-w-full">
              <div className="w-[356px] flex flex-col items-start justify-start gap-3.5 max-w-full">
                <div className="w-[111px] relative inline-block min-w-[111px] z-[4]">
                  Work Location
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-[18px] px-[11px] pb-[15px] relative z-[4]">
                  <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-mini bg-gray-100 mix-blend-screen" />
                  <input
                    name="workLocation"
                    value={formData.workLocation}
                    onChange={handleChange}
                    className="w-[189px] [border:none] [outline:none] font-inter text-base bg-[transparent] h-[23px] relative text-gray-300 text-center inline-block p-0 z-[1]"
                    placeholder="Particular Mine or Office"
                    type="text"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-[431px] flex flex-col items-start justify-start gap-[33.3px] min-w-[431px] max-w-full lg:flex-1 mq450:gap-[17px] mq1050:min-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border max-w-full text-darkslategray-400"></div>

            {/* Department/Unit with Checkboxes */}
            <div className="w-[188px] flex flex-col items-start justify-start pt-0 px-0 pb-[4.7px] box-border gap-5">
              <div className="self-stretch flex flex-col items-start justify-start gap-3">
                <div className="w-[130px] relative inline-block z-[4]">
                  Department/Unit
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-smi text-gray-300">
                  <label className="w-[39px] relative inline-block min-w-[39px] z-[4] flex items-center">
                    <input
                      type="checkbox"
                      name="Mining Operations"
                      checked={formData.department["Mining Operations"]}
                      onChange={handleDepartmentChange}
                      className="mr-2"
                    />
                    Mining Operations
                  </label>
                  <label className="w-[39px] relative inline-block min-w-[39px] z-[4] flex items-center">
                    <input
                      type="checkbox"
                      name="Safety & Compliance"
                      checked={formData.department["Safety & Compliance"]}
                      onChange={handleDepartmentChange}
                      className="mr-2"
                    />
                    Safety & Compliance
                  </label>
                  <label className="w-[39px] relative inline-block min-w-[39px] z-[4] flex items-center">
                    <input
                      type="checkbox"
                      name="Environmental Management"
                      checked={formData.department["Environmental Management"]}
                      onChange={handleDepartmentChange}
                      className="mr-2"
                    />
                    Environmental Management
                  </label>
                  <label className="w-[39px] relative inline-block min-w-[39px] z-[4] flex items-center">
                    <input
                      type="checkbox"
                      name="Human Resource"
                      checked={formData.department["Human Resource"]}
                      onChange={handleDepartmentChange}
                      className="mr-2"
                    />
                    Human Resource
                  </label>
                  <label className="w-[39px] relative inline-block min-w-[39px] z-[4] flex items-center">
                    <input
                      type="checkbox"
                      name="Quality Control"
                      checked={formData.department["Quality Control"]}
                      onChange={handleDepartmentChange}
                      className="mr-2"
                    />
                    Quality Control
                  </label>
                  <label className="w-[39px] relative inline-block min-w-[39px] z-[4] flex items-center">
                    <input
                      type="checkbox"
                      name="Other"
                      checked={formData.department.Other}
                      onChange={handleDepartmentChange}
                      className="mr-2"
                    />
                    Other
                  </label>
                </div>
              </div>
            </div>

            {/* Employment Type with Checkboxes */}
            <div className="w-[150px] flex flex-col items-start justify-start pt-0 px-[15px] pb-[5.7px] box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-3">
                <div className="w-[92px] relative inline-block z-[4]">
                  Employment Type
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-smi text-gray-300">
                  <label className="w-[39px] relative inline-block min-w-[39px] z-[4] flex items-center">
                    <input
                      type="checkbox"
                      name="Full-Time"
                      checked={formData.employmentType["Full-Time"]}
                      onChange={handleEmploymentTypeChange}
                      className="mr-2"
                    />
                    Full-Time
                  </label>
                  <label className="w-[39px] relative inline-block min-w-[39px] z-[4] flex items-center">
                    <input
                      type="checkbox"
                      name="Part-Time"
                      checked={formData.employmentType["Part-Time"]}
                      onChange={handleEmploymentTypeChange}
                      className="mr-2"
                    />
                    Part-Time
                  </label>
                  <label className="w-[39px] relative inline-block min-w-[39px] z-[4] flex items-center">
                    <input
                      type="checkbox"
                      name="Contract"
                      checked={formData.employmentType.Contract}
                      onChange={handleEmploymentTypeChange}
                      className="mr-2"
                    />
                    Contract
                  </label>
                  <label className="w-[39px] relative inline-block min-w-[39px] z-[4] flex items-center">
                    <input
                      type="checkbox"
                      name="Temporary"
                      checked={formData.employmentType.Temporary}
                      onChange={handleEmploymentTypeChange}
                      className="mr-2"
                    />
                    Temporary
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center py-0 px-[3px] box-border max-w-full text-mini text-silver">
          <div className="self-stretch relative inline-block max-w-full z-[4]">
            *Please ensure that all information entered is accurate and up to
            date.
          </div>
        </div>
        <button type="submit" className="mt-5 p-2 bg-olivedrab text-white rounded-md">
          Submit
        </button>
      </div>
    </form>
  );
};

RegistrationForm2.propTypes = {
  className: PropTypes.string,
};

export default RegistrationForm2;
