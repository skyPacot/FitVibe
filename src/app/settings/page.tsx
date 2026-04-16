// "use client";

// import Sidebar from "../../components/Sidebar";
// import Header from "../../components/Header";
// import { useState } from "react";

// export default function SettingsPage() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [notifications, setNotifications] = useState(true);

//   return (
//     <div className="flex bg-gray-100 min-h-screen">

//       <Sidebar />

//       <div className="flex-1 p-8">

//         <Header />

//         <h1 className="text-xl font-semibold mb-6">Settings</h1>

//         {/* PROFILE */}
//         <div className="bg-white p-6 rounded-xl shadow mb-6">
//           <h2 className="font-semibold text-purple-600 mb-4">
//             Profile
//           </h2>

//           <input
//             placeholder="Name"
//             className="w-full p-3 border rounded-lg mb-3"
//           />

//           <input
//             placeholder="Email"
//             className="w-full p-3 border rounded-lg mb-3"
//           />

//           <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
//             Save Changes
//           </button>
//         </div>

//         {/* PREFERENCES */}
//         <div className="bg-white p-6 rounded-xl shadow mb-6">
//           <h2 className="font-semibold text-purple-600 mb-4">
//             Preferences
//           </h2>

//           <div className="flex justify-between items-center mb-4">
//             <span>Dark Mode</span>
//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className={`px-4 py-2 rounded-lg ${
//                 darkMode ? "bg-purple-600 text-white" : "bg-gray-200"
//               }`}
//             >
//               {darkMode ? "ON" : "OFF"}
//             </button>
//           </div>

//           <div className="flex justify-between items-center">
//             <span>Notifications</span>
//             <button
//               onClick={() => setNotifications(!notifications)}
//               className={`px-4 py-2 rounded-lg ${
//                 notifications ? "bg-purple-600 text-white" : "bg-gray-200"
//               }`}
//             >
//               {notifications ? "ON" : "OFF"}
//             </button>
//           </div>
//         </div>

//         {/* SUPPORT */}
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="font-semibold text-purple-600 mb-4">
//             Support
//           </h2>

//           <p className="text-sm text-gray-600 mb-2">
//             Need help? Contact support below.
//           </p>

//           <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
//             Contact Support
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }

"use client";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { useState } from "react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1 p-8">

        <Header />

        <h1 className="text-xl font-semibold mb-6">Settings</h1>

        {/* PROFILE */}
        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <h2 className="font-semibold text-purple-600 mb-4">
            Profile
          </h2>

          <input
            placeholder="Name"
            className="w-full p-3 border rounded-lg mb-3"
          />

          <input
            placeholder="Email"
            className="w-full p-3 border rounded-lg mb-3"
          />

          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
            Save Changes
          </button>
        </div>

        {/* PREFERENCES */}
        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <h2 className="font-semibold text-purple-600 mb-4">
            Preferences
          </h2>

          <div className="flex justify-between items-center">
            <span>Notifications</span>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`px-4 py-2 rounded-lg ${
                notifications
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {notifications ? "ON" : "OFF"}
            </button>
          </div>
        </div>

        {/* SUPPORT */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold text-purple-600 mb-4">
            Support
          </h2>

          <p className="text-sm text-gray-600 mb-2">
            Need help? Contact support below.
          </p>

          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
            Contact Support
          </button>
        </div>

      </div>
    </div>
  );
}