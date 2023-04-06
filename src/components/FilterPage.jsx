import { GrLocation } from "react-icons/gr";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";
import { useState } from "react";

const FilterPage = () => {
  const [showMoreFilter, setShowMoreFilter] = useState(false);
  const [values, setValues] = useState({});
  const personaliseHandler = () => {
    setShowMoreFilter(true);
  };

  const renderMoreFilter = () => {
    return (
      <>
        <div className="bg-white px-6 py-5 rounded-tr-3xl w-4/5 flex  gap-5">
          {personalisedFilter.map((filter) => {
            const { title, icon, inputType, inputPlaceholder } = filter;
            return (
              <div
                key={title}
                className="flex items-center bg-[#EDF4F7] px-3 py-2 gap-4 w-1/3 rounded-md"
              >
                {icon}
                <div className="ml-1">
                  <span className="text-sm font-semibold">{title}</span>
                  <input
                    type={inputType}
                    className="border-none w-full bg-[#EDF4F7]"
                    placeholder={inputPlaceholder}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  const personalisedFilter = [
    {
      title: "Activity",
      icon: <GrLocation size={50} />,
      inputType: "select",
      inputPlaceholder: "Water Sport",
    },
    {
      title: "Budget",
      icon: <GrLocation size={50} />,
      inputType: "select",
      inputPlaceholder: "Water Sport",
    },
    {
      title: "Cusines",
      icon: <GrLocation size={50} />,
      inputType: "select",
      inputPlaceholder: "Water Sport",
    },
  ];

  const mainFilters = [
    {
      title: "Destination",
      icon: <GrLocation size={50} />,
      inputType: "text",
      inputPlaceholder: "Enter Destination",
    },
    {
      title: "Travel Date",
      icon: <AiOutlineCalendar size={50} />,
      inputType: "date",
      inputPlaceholder: "",
    },
    {
      title: "Days",
      icon: <AiOutlineUser size={50} />,
      inputType: "number",
      inputPlaceholder: "Enter Days",
    },
  ];

  return (
    <div className="flex items-center bg-orange-300 h-screen">
      <div className="mx-auto w-9/12 max-w-4xl gap-1 flex flex-col">
        <div className="bg-white px-6 py-5 rounded-tr-3xl flex justify-evenly gap-2 flex-wrap sm:grid sm:grid-cols-2 lg:flex">
          {mainFilters.map((filter) => {
            const { title, icon, inputType, inputPlaceholder } = filter;
            return (
              <div
                key={title}
                className="flex items-center bg-[#EDF4F7] lg:w-1/4 px-3 py-2 gap-2 rounded-md"
              >
                {icon}
                <div className="ml-1">
                  <span className="text-sm font-semibold">{title}</span>
                  <input
                    type={inputType}
                    className="border-none w-full bg-[#EDF4F7] basis-4"
                    placeholder={inputPlaceholder}
                  />
                </div>
              </div>
            );
          })}

          <button
            className="p-5 font-semibold rounded-full bg-[#1B485A] text-white"
            variant="contained"
          >
            Build Itinerary
          </button>
        </div>
        <>
          {showMoreFilter ? (
            renderMoreFilter()
          ) : (
            <div className="flex justify-end">
            <a
              className="mt-3 mr-4 text-center font-semibold text-lg p-2 rounded-lg cursor-pointer hover:bg-white"
              onClick={personaliseHandler}
            >
              💡Personalise
            </a>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default FilterPage;
