import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
function Roadmap() {
  return (
    <div
      className="flex flex-col items-center justify-center mt-20"
      id="roadmap"
    >
      <div className="flex flex-col items-center justify-center rounded-lg overflow-hidden max-w-6xl w-full p-6 space-y-8">
        <h1 className="text-sm  font-semibold text-red-600 text-center">
          ROADMAP
        </h1>
        <h2 className="text-4xl font-bold mb-8 text-center">
          So, how are we going to do all of this?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Quarter 1 2023 */}
          <div className="border p-4 rounded-2xl shadow-lg app-bg ">
            <p className="text-xl lg:text-2xl font-bold mb-4">Q1 2023</p>
            <ul className="space-y-4">
              <li className="text-lg text-white">
                <CircularProgress size="1rem" color="error" /> Q3 2024
                Conceptualization: Finalize the vision and mission of Meme Lord.
              </li>
              <li className="text-lg text-white">
                <CircularProgress size="1rem" color="error" /> Team Formation:
                Assemble a team of blockchain experts, developers, and marketing
                strategists.
              </li>
              <li className="text-lg text-white">
                <CircularProgress size="1rem" color="error" /> Token Creation:
                Develop and deploy the Meme Lord token on the Binance Smart
                Chain.
              </li>
              <li className="text-lg text-white">
                <CircularProgress size="1rem" color="error" /> Storage Contract
                Development: Create and test the unique storage contract for
                exclusive presale buying.
              </li>
              <li className="text-lg text-white">
                <CircularProgress size="1rem" color="error" /> Exclusive Presale
                Launch: Initiate the presale phase, allowing only selected
                investors and community leaders to buy tokens.
              </li>
              <li className="text-lg text-white">
                <CircularProgress size="1rem" color="error" />
                Referral Program Launch: Introduce the referral program to
                incentivize community growth and engagement.
              </li>
              <li className="text-lg text-white">
                <CircularProgress size="1rem" color="error" /> Token Vesting
                Initiation: Begin the vesting schedule for all presale
                participants.
              </li>
              <li className="text-lg text-white">
                <CircularProgress size="1rem" color="error" /> Daily Price Pump
                Implementation: Activate the smart contract mechanism to ensure
                the token price rises by 1% daily.
              </li>
            </ul>
          </div>

          {/* Quarter 4 2024 */}
          <div className="border p-4 rounded-2xl shadow-lg app-bg ">
            <p className="text-xl lg:text-2xl font-bold mb-4">Q4 2024</p>
            <ul className="space-y-4">
              <li className="text-lg text-white">
                <CircularProgress size="1rem" color="error" /> Tap to Earn
                Airdrop: Roll out the Tap to Earn Airdrop, giving the community
                an exciting opportunity to earn free Meme Lord tokens by simply
                participating.
              </li>
              <li className="text-lg text-white">
                <CircularProgress size="1rem" color="error" /> Marketing Blitz:
                Roll out aggressive marketing campaigns across social media,
                crypto forums, and influencer networks.
              </li>
              <li className="text-lg text-white">
                <CircularProgress size="1rem" color="error" /> Community
                Building: Host AMAs, webinars, and community events to build a
                loyal following.
              </li>
            </ul>
          </div>

          {/* Quarter 1 2025 */}
          <div className="border p-4 rounded-2xl shadow-lg app-bg ">
            <p className="text-xl lg:text-2xl font-bold mb-4">Q1 2025</p>
            <ul className="space-y-4">
              <li className="text-lg text-white">
                <CircularProgress size="1rem" color="error" /> Listing on
                Centralised Exchanges: List MemeLord on major CEXs like Bybit
                for broader accessibility.
              </li>
              <li className="text-lg text-white">
                <CircularProgress size="1rem" color="error" /> Partnerships and
                Collaborations: Form strategic alliances with other crypto
                projects, influencers, and platforms to expand Meme Lord’s
                reach.
              </li>
              <li className="text-lg text-white">
                <CircularProgress size="1rem" color="error" /> Continued
                Marketing Efforts: Maintain a strong marketing presence to
                attract new investors and keep the community engaged.
              </li>
              <li className="text-lg text-white">
                <CircularProgress size="1rem" color="error" /> Technology
                Enhancements: Continuously improve smart contract functionality
                and explore new features for the Meme Lord ecosystem.
              </li>
              <li className="text-lg text-white">
                <CircularProgress size="1rem" color="error" /> Global Expansion:
                Target international markets and grow the global Meme Lord
                community.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
