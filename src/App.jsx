import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    propertyType: "Residential",
    possession: "Ready To Move In",
    city: "",
    area: "",
    budget: "",
    comments: "",
  });

  const {
    name,
    contact,
    email,
    propertyType,
    possession,
    city,
    area,
    budget,
    comments,
  } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitData = async (name, contact, email, propertyType , possession, city, area, budget, comments) => {
    try {
      const response = await axios.post("https://enquiry-form-fy0p.onrender.com/enquire", {
        name, contact, email, propertyType , possession, city, area, budget, comments
      })
      
      if (!response?.data?.success) {
        throw new Error(response?.data?.message)
      }
      
      toast.success("Form Submitted")
    } catch (error) {
      console.log("CREATE Enquiry Error...........", error)
      toast.error("Something went wrong")
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    submitData(name, contact, email, propertyType , possession, city, area, budget, comments)

    setFormData({ 
      name: "",
      contact: "",
      email: "",
      propertyType: "Residential",
      possession: "Ready To Move In",
      city: "",
      area: "",
      budget: "",
      comments: ""
    })
  };

  return (
    <>
      <div className="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-2xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20 sm:pt-8 sm:pb-10">
            <div className="text-center pb-6">
              <h1 className="text-3xl">Enquire Now</h1>

              <p className="text-gray-200">
                Please fill in the details below, my team will get back to you
                shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <label htmlFor="name" className="text-black flex flex-col">
                <p className="mb-1 text-[0.875rem]   flex items-center">
                  Name <sup className="text-red-500">*</sup>
                </p>
                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  required
                  value={name}
                  onChange={handleOnChange}
                />
              </label>

              <label htmlFor="contact" className="text-black flex flex-col">
                <p className="mb-1 text-[0.875rem]   flex items-center">
                  Contact Number <sup className="text-red-500">*</sup>
                </p>
                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Enter your contact number"
                  name="contact"
                  required
                  value={contact}
                  onChange={handleOnChange}
                />
              </label>

              <label htmlFor="email" className="text-black flex flex-col">
                <p className="mb-1 text-[0.875rem] ">Email Address</p>
                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  value={email}
                  onChange={handleOnChange}
                />
              </label>

              <label
                htmlFor="propertyType"
                className="text-black flex flex-col"
              >
                <p className="mb-1 text-[0.875rem]  flex items-center">
                  Property Type <sup className="text-red-500">*</sup>
                </p>
                <select
                  name="propertyType"
                  id="propertyType"
                  required
                  value={propertyType}
                  onChange={handleOnChange}
                  className="shadow mb-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="Residential">Residential</option>
                  <option value="Commmercial">Commmercial</option>
                  <option value="Land">Land</option>
                </select>
              </label>

              <label htmlFor="possession" className="text-black flex flex-col">
                <p className="mb-1 text-[0.875rem]   flex items-center">
                  Possession <sup className="text-red-500">*</sup>
                </p>
                <select
                  name="possession"
                  id="possession"
                  required
                  value={possession}
                  onChange={handleOnChange}
                  className="shadow mb-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="Ready To Move In">Ready To Move In</option>
                  <option value="Under Construction">Under Construction</option>
                </select>
              </label>

              <label htmlFor="city" className="text-black flex flex-col">
                <p className="mb-1 text-[0.875rem]   flex items-center">
                  City <sup className="text-red-500">*</sup>
                </p>
                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="test"
                  placeholder="Enter your city"
                  name="city"
                  required
                  value={city}
                  onChange={handleOnChange}
                />
              </label>

              <label htmlFor="area" className="text-black flex flex-col">
                <p className="mb-1 text-[0.875rem]   flex items-center">
                  Area <sup className="text-red-500">*</sup>
                </p>
                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Enter your area"
                  name="area"
                  required
                  value={area}
                  onChange={handleOnChange}
                />
              </label>

              <label htmlFor="budget" className="text-black flex flex-col">
                <p className="mb-1 text-[0.875rem]  ">Budget</p>
                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Enter your budget"
                  name="budget"
                  value={budget}
                  onChange={handleOnChange}
                />
              </label>

              <label htmlFor="comments" className="text-black flex flex-col">
                <p className="mb-1 text-[0.875rem] ">Comments</p>
                <textarea
                  className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Type comments here... (optional)"
                  name="comments"
                  value={comments}
                  onChange={handleOnChange}
                  style={{ height: "100px" }}
                />
              </label>

              {/* <div className="flex justify-center"> */}
              <input
                className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold w-full py-2 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                value="Send ➤"
              />
              {/* <input
                  className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="reset"
                /> */}
              {/* </div> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
