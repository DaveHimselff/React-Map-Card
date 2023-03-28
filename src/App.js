//Dave React-Map-Card
import React from 'react';
import img from './images/avatar1.jpg';
import img2 from './images/nacho cheez.png';
import img3 from './images/shy.png';
import img4 from './images/oppa.png';

const users = [
  {
    profileImage: img,
    name: "Honnie Pilletero",
    description: "BSIT 2nd Year, Pro SQL, GUI",
    time: "7:40 PM"
  },
  {
    profileImage: img2,
    name: "Dave Andrew",
    description: "Noob programmer",
    time: "9:00PM"
  },
  {
    profileImage: img3,
    name: "Celine",
    description: "Kara's twin sister, Kinder 2 student, Shy ",
    time: "6:00 AM"
  },
  {
    profileImage: img4,
    name: "Kara",
    description: "Celine's twin sister, Kinder 2 student",
    time: "6:00 AM"
  },
];

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden md:max-w-7xl w-4/5">
      <div className="pt-5 pl-6">
          <p className="text-base font-medium text-gray-900">August 30, 2022 | Wednesday</p>
        </div>
        {users.map((user) => (
          <div className="p-6 border-b">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-12 rounded-full"
                  src={user.profileImage}
                  alt=""
                />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  {user.name}
                </h4>
                <p className="text-sm font-medium text-gray-500">
                  {user.description}
                </p>
              </div>
              <div className="ml-auto">
                <p className="text-sm font-medium text-gray-500">
                  {user.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;