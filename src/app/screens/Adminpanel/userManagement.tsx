import React from 'react';

const UserManagement = ({ onClose }) => {
  // Simulated data or state management can be implemented here
  const users = [
    {
      id: 1,
      username: 'user1',
      email: 'user1@example.com',
      role: 'Admin',
    },
    {
      id: 2,
      username: 'user2',
      email: 'user2@example.com',
      role: 'User',
    },
    {
      id: 3,
      username: 'user3',
      email: 'user3@example.com',
      role: 'User',
    },
  ];

  const handleUserUpdate = (userId) => {
    // Logic to update user information
    console.log(`Updating user with ID ${userId}`);
  };

  const handleUserDelete = (userId) => {
    // Logic to delete user
    console.log(`Deleting user with ID ${userId}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 relative">
      <h3 className="text-lg font-semibold mb-2">User Management</h3>
      <button
        onClick={onClose}
        className="absolute top-2 right-5 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        X
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Username
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Role
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleUserUpdate(user.id)}
                    className="text-white hover:text-white font-medium w-32 rounded-sm"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleUserDelete(user.id)}
                    className="ml-4 text-white hover:text-white font-medium w-32 rounded-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
