import { GrLocation } from "react-icons/gr";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";

export const personalisedFilter = [
    {
      title: "Activity",
      icon: <GrLocation size={50} />,
      inputType: "select",
      inputPlaceholder: "Water Sport",
      value:'activity'
    },
    {
      title: "Budget",
      icon: <GrLocation size={50} />,
      inputType: "select",
      inputPlaceholder: "Water Sport",
      value:'budget'
    },
    {
      title: "Cusines",
      icon: <GrLocation size={50} />,
      inputType: "select",
      inputPlaceholder: "Water Sport",
      value:"cusines"
    },
  ];

export  const mainFilters = [
    {
      title: "Destination",
      icon: <GrLocation size={50} />,
      inputType: "text",
      inputPlaceholder: "Enter Destination",
      value:'destination'
    },
    {
      title: "Travel Date",
      icon: <AiOutlineCalendar size={50} />,
      inputType: "date",
      inputPlaceholder: "",
      value:'date'
    },
    {
      title: "Days",
      icon: <AiOutlineUser size={50} />,
      inputType: "number",
      inputPlaceholder: "Enter Days",
      value:"numOfDays"
    },
  ];