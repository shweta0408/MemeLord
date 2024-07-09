import React, { useState } from 'react';
import { Header } from '../../components/header/header';
import ParticlesComponent from '../../components/particles/particles';

import AdminControl from './adminControl';

const AdminPanel = () => {
  const navigation = [{ name: 'Home', href: '/' }];
  // const [showTokenModal, setShowTokenModal] = useState(false);
  // const [showUserModal, setShowUserModal] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);

  // const openTokenModal = () => {
  //   setShowTokenModal(true);
  // };

  // const closeTokenModal = () => {
  //   setShowTokenModal(false);
  // };

  // const openUserModal = () => {
  //   setShowUserModal(true);
  // };

  // const closeUserModal = () => {
  //   setShowUserModal(false);
  // };

  const openAdminModal = () => {
    setShowAdminModal(true);
  };

  const closeAdminModal = () => {
    setShowAdminModal(false);
  };

  return (
    <>
      <ParticlesComponent />
      <div className="flex flex-col items-center justify-evenly app-bg min-h-screen p-6">
        <Header navigation={navigation} />
        <div className="flex flex-col items-center justify-evenly bg-gradient-to-b from-gray-100 to-white rounded-2xl shadow-lg overflow-hidden w-5/6 h-3/4 max-w-4xl p-6 mt-1 mb-16">
          <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>

          {/* Buttons */}
          <div className="flex flex-col space-y-4 mt-4">
            <button
              onClick={openAdminModal}
              className="bg-gradient-to-b from-gray-400 to text-gray-200 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-grey-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            >
              Admin Control
            </button>
          </div>

          {/* Token Management Modal */}
          {/* {showTokenModal && (
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 mt-28 mb-14">
                <div
                  className="fixed inset-0 transition-opacity"
                  onClick={closeTokenModal}
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div> */}

          {/* Modal content */}
          {/* <div className="inline-block align-bottom bg-white rounded-lg shadow-xl text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
                  <TokenManagement onClose={closeTokenModal} />
                </div>
              </div>
            </div>
          )} */}

          {/* User Management Modal */}
          {/* {showUserModal && (
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 mt-28 mb-14">
                <div
                  className="fixed inset-0 transition-opacity"
                  onClick={closeUserModal}
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div> */}

          {/* Modal content */}
          {/* <div className="inline-block align-bottom bg-white rounded-lg shadow-xl text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
                  <UserManagement onClose={closeUserModal} />
                </div>
              </div>
            </div>
          )} */}

          {/* Admin Control Modal */}
          {showAdminModal && (
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 mt-28 mb-14">
                <div
                  className="fixed inset-0 transition-opacity"
                  onClick={closeAdminModal}
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                {/* Modal content */}
                <div className="inline-block align-bottom bg-white rounded-lg shadow-xl text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
                  <AdminControl onClose={closeAdminModal} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
