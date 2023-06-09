import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getAuth, signOut } from "firebase/auth";
import { UserContext } from "../store/UserContext";

import { personalisedFilter, mainFilters } from "../constants/filters";
import Loading from '../layout/Loading';

const FilterPage = () => {
  const [showMoreFilter, setShowMoreFilter] = useState(false);
  const [values, setValues] = useState({});
  const navigate = useNavigate();
  const { username, usernameHandler } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  
  // useEffect(()=>{
  //   if(username == null){
  //     navigate("/login")
  //   }
  //   setIsLoading(false);
  // },[])
  
  // if(isLoading){
  //   return <h1>Loading</h1>
  // }
  const personaliseHandler = () => {
    setShowMoreFilter(true);
  };


  const renderMoreFilter = () => {
    return (
      <>
        <div className="bg-white px-6 py-5 rounded-tr-3xl w-4/5 flex  gap-5">
          {personalisedFilter.map((filter) => {
            const { title, icon, inputType, inputPlaceholder,value } = filter;
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
                    value={values.value}
                    name={value}
                    onChange={valueHandler}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  

  const valueHandler = (e) =>{
    const { name, value} = e.target;
    setValues((prevState)=> ({...prevState, [name]:value})) 
  };

  const BuildItineraryHandler = async(e) =>{
    setIsLoading(true);
    e.preventDefault();
    const response = await axios.post("https://travelplanner-apis.onrender.com/getplan", values);
    setIsLoading(false);
    const { choices } = response.data;
    const  { message } = choices[0];

   
    navigate('/travelPlan', {state:{"data":message.content}})
  };

  const logoutHandler = () =>{
    const auth = getAuth();
    signOut(auth).then(()=>{
       usernameHandler(null);
       navigate("/");
    })
  }
  
  return (isLoading ? <Loading/> : 
    <div className="flex items-center bg-orange-300 h-screen relative">
      <div className="absolute right-0 top-0 pr-12 py-10">
          <button onClick={logoutHandler} className="bg-white px-4 py-2 rounded-md font-semibold">Logout</button>
      </div>
      <div className="mx-auto w-9/12 max-w-4xl gap-1 flex flex-col">
        <h4 className="text-center font-semibold capitalize text-2xl mb-2">{`Hi ${username} 👋`}</h4>
        <form  onSubmit={BuildItineraryHandler} className="bg-white px-6 py-5 rounded-tr-3xl flex justify-evenly gap-2 flex-wrap sm:grid sm:grid-cols-2 lg:flex">
          {mainFilters.map((filter) => {
            const { title, icon, inputType, inputPlaceholder,value } = filter;
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
                    value={values.value}
                    name={value}
                    onChange={valueHandler}
                    required
                  />
                </div>
              </div>
            );
          })}

          <button
            className="p-5 font-semibold rounded-full bg-[#1B485A] text-white"
            type="submit"
          >
            Build Itinerary
          </button>
        </form>
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

