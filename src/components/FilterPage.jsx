import { GrLocation } from "react-icons/gr";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";
import { useState } from "react";

const FilterPage = () => {
  const [showMoreFilter, setShowMoreFilter] = useState(false);
  const personaliseHandler = () => {
    setShowMoreFilter(true)
  };

  const renderMoreFilter = () =>{
    return (  <>{mainFilters.map(filter =>{
      const {title, icon, inputType, inputPlaceholder } =filter;
        return (<div key={title} className="flex items-center bg-[#EDF4F7] px-3 py-2 gap-4 w-1/4 rounded-md">
          {icon}
        <div className="ml-1">
          <span className="text-sm font-semibold">{title}</span>
          <input
            type={inputType}
            className="border-none w-full bg-[#EDF4F7]"
            placeholder={inputPlaceholder}
          />
        </div>
      </div>)
    })}</>)
  }

  const personalisedFilter = [
    {
      title: "Destination",
      icon: <GrLocation size={50} />,
      inputType:'select',
      inputPlaceholder:"Enter Destination"
    },
  ];

  const mainFilters = [
    {
      title: "Destination",
      icon: <GrLocation size={50} />,
      inputType:'text',
      inputPlaceholder:"Enter Destination"
    },
    {
      title:"Travel Date",
      icon:<AiOutlineCalendar size={50} />,
      inputType:'date',
      inputPlaceholder:""

    },
    {
      title: "Days",
      icon:<AiOutlineUser size={50} />,
      inputType:'number',
      inputPlaceholder:"Enter Days"
    }
  ];


  return (
    <div className="flex items-center bg-orange-300 h-screen">
      <div className="mx-auto w-3/5">
        <div className="bg-white px-6 py-5 rounded-tr-3xl flex gap-5">

          {mainFilters.map(filter =>{
            const {title, icon, inputType, inputPlaceholder } =filter;
              return (<div key={title} className="flex items-center bg-[#EDF4F7] px-3 py-2 gap-4 w-1/4 rounded-md">
                {icon}
              <div className="ml-1">
                <span className="text-sm font-semibold">{title}</span>
                <input
                  type={inputType}
                  className="border-none w-full bg-[#EDF4F7]"
                  placeholder={inputPlaceholder}
                />
              </div>
            </div>)
          })}
          
          <button
            className="p-5 font-semibold rounded-full bg-[#1B485A] text-white"
            variant="contained"
          >
            Build Itinerary
          </button>
        </div>
        <div className="flex justify-end">
         { showMoreFilter? renderMoreFilter() : <a
            className="mt-3 mr-4 text-center font-semibold text-lg p-2 rounded-lg cursor-pointer hover:bg-white"
            onClick={personaliseHandler}
          >
            💡Personalise
          </a>}
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
