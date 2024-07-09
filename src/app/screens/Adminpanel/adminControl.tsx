import React from 'react';

const AdminControl = ({ onClose }) => {
  return (
    <div className="container1 p-6">
      <div className="form-container">
        <form id="stylishForm">
          <h2 className="text-lg font-semibold mb-4">Admin Control</h2>

          <div className="row mt-4">
            <div className="col-3">
              <label
                htmlFor="setOperator"
                className="d-flex justify-content-start"
              >
                setOperator
              </label>
            </div>
            <div className="col-md-10 flex items-center">
              <input
                type="text"
                id="setOperator"
                name="setOperator"
                required
                className="border rounded p-2 w-full"
              />
              <button
                type="submit"
                className="w-40 m-2 rounded-md app-bg  px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 ml-2"
              >
                Submit
              </button>
            </div>
          </div>

          {/*Checkbox*/}

          {/* Checkbox with Button on Left */}
          <div className="flex items-center mt-4">
            <div className="w-full flex flex-row justify-between align-middle space-y-4">
              {/* First Checkbox and Button */}
              <div className="flex items-center justify-center space-x-4">
                <label
                  htmlFor="setMaintainPriceOnOff"
                  className="flex items-center"
                >
                  <input
                    type="checkbox"
                    id="setMaintainPriceOnOff"
                    name="setMaintainPriceOnOff"
                    className="form-checkbox h-5 w-5 text-blue-600 mr-2"
                    required
                  />
                  setMaintainPriceOnOff
                </label>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>

              {/* Second Checkbox and Button */}
              <div className="flex items-center justify-center space-x-4">
                <label
                  htmlFor="setPurchaseBonusOnOff"
                  className="flex items-center"
                >
                  <input
                    type="checkbox"
                    id="setPurchaseBonusOnOff"
                    name="setPurchaseBonusOnOff"
                    className="form-checkbox h-5 w-5 text-blue-600 mr-2"
                    required
                  />
                  setPurchaseBonusOnOff
                </label>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-3">
              <label
                htmlFor="setVestingTimePeriod"
                className="d-flex justify-content-start"
              >
                setVestingTimePeriod
              </label>
            </div>
            <div className="col-md-10 flex items-center">
              <input
                type="text"
                id="setVestingTimePeriod"
                name="setVestingTimePeriod"
                required
                className="border rounded p-2 w-full"
              />
              <button
                type="submit"
                className="w-40 m-2 rounded-md app-bg  px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 ml-2"
              >
                Submit
              </button>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-3">
              <label
                htmlFor="setInitialVestingTimePeriod"
                className="d-flex justify-content-start"
              >
                setInitialVestingTimePeriod
              </label>
            </div>
            <div className="col-md-10 flex items-center">
              <input
                type="text"
                id="setInitialVestingTimePeriod"
                name="setInitialVestingTimePeriod"
                required
                className="border rounded p-2 w-full"
              />
              <button
                type="submit"
                className="w-40 m-2 rounded-md app-bg  px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 ml-2"
              >
                Submit
              </button>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-3">
              <label
                htmlFor="setSwapCap"
                className="d-flex justify-content-start"
              >
                setSwapCap
              </label>
            </div>
            <div className="col-md-10 flex items-center">
              <input
                type="text"
                id="setSwapCap"
                name="setSwapCap"
                required
                className="border rounded p-2 w-full"
              />
              <button
                type="submit"
                className="w-40 m-2 rounded-md app-bg  px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 ml-2"
              >
                Submit
              </button>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-3">
              <label
                htmlFor="setMAX_ACCEPTED_TOKENS"
                className="d-flex justify-content-start"
              >
                setMAX_ACCEPTED_TOKENS
              </label>
            </div>
            <div className="col-md-10 flex items-center">
              <input
                type="text"
                id="setMAX_ACCEPTED_TOKENS"
                name="setMAX_ACCEPTED_TOKENS"
                required
                className="border rounded p-2 w-full"
              />
              <button
                type="submit"
                className="w-40 m-2 rounded-md app-bg  px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 ml-2"
              >
                Submit
              </button>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-3">
              <label
                htmlFor="setAcceptedTokenAddresses"
                className="d-flex justify-content-start"
              >
                setAcceptedTokenAddresses
              </label>
            </div>
            <div className="col-md-10 flex items-center">
              <input
                type="text"
                id="setAcceptedTokenAddresses"
                name="setAcceptedTokenAddresses"
                required
                className="border rounded p-2 w-full"
              />
              <button
                type="submit"
                className="w-40 m-2 rounded-md app-bg  px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 ml-2"
              >
                Submit
              </button>
            </div>
          </div>

          <button
            onClick={onClose}
            className="absolute top-2 right-5 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            X
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminControl;
