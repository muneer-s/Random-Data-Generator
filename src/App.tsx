import React, { useEffect, useState } from "react";
import axios from "axios";
import UserProfileData from './model/userDataInterface';

const App: React.FC = () => {
  const [userData, setUserData] = useState<UserProfileData>();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const handleASync = async () => {
      const response = await axios.get<UserProfileData>('https://random-data-api.com/api/v2/users');
      setUserData(response.data);
    };
    handleASync();

  }, [counter]);

  const handleGetData = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center w-full max-w-sm">
        <img 
          id="avatar" 
          src={userData?.avatar} 
          alt="User Avatar" 
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-700">
          {userData?.first_name} {userData?.last_name}
        </h2>
        <p className="text-gray-500">{userData?.email}</p>
        <p className="text-gray-500 mt-2">ID: {userData?.uid}</p>
        <p className="text-gray-500">Gender: {userData?.gender}</p>
        <p className="text-gray-500">DOB: {userData?.date_of_birth}</p>
        <p className="text-gray-500">Phone: {userData?.phone_number}</p>
        <p className="text-gray-500">Job: {userData?.employment.title}</p>
        <p className="text-gray-500">Skill: {userData?.employment.key_skill}</p>
      </div>
      <button 
        onClick={handleGetData} 
        className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Get Data
      </button>
    </div>
  );
}

export default App;
