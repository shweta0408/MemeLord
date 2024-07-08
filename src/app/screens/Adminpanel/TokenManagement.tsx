import React from 'react';

const TokenManagement = ({ onClose }) => {
  // Simulated data or state management can be implemented here
  const tokens = [
    {
      id: 1,
      name: 'Token A',
      symbol: 'TKA',
      supply: '1,000,000',
      price: '$1.00',
    },
    {
      id: 2,
      name: 'Token B',
      symbol: 'TKB',
      supply: '500,000',
      price: '$2.50',
    },
    {
      id: 3,
      name: 'Token C',
      symbol: 'TKC',
      supply: '2,000,000',
      price: '$0.75',
    },
  ];

  const handleTokenDistribution = (tokenId) => {
    // Logic to distribute tokens (e.g., trigger a distribution event)
    console.log(`Distributing tokens for token with ID ${tokenId}`);
  };

  const handleTokenTransaction = (tokenId) => {
    // Logic to manage token transactions (e.g., view transaction history)
    console.log(`Managing transactions for token with ID ${tokenId}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 relative">
      <h3 className="text-lg font-semibold mb-2">Token Management</h3>
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
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Symbol
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Supply
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Price
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
            {tokens.map((token) => (
              <tr key={token.id}>
                <td className="px-6 py-4 whitespace-nowrap">{token.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{token.symbol}</td>
                <td className="px-6 py-4 whitespace-nowrap">{token.supply}</td>
                <td className="px-6 py-4 whitespace-nowrap">{token.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleTokenDistribution(token.id)}
                    className="text-white hover:text-white font-medium w-32 rounded-sm"
                  >
                    Distribute
                  </button>
                  <button
                    onClick={() => handleTokenTransaction(token.id)}
                    className="ml-4 text-white hover:text-white font-medium w-32 rounded-sm"
                  >
                    Transactions
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

export default TokenManagement;
