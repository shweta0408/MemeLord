import React from 'react';
import { GlobeAltIcon, MailIcon, PhoneIcon } from '@heroicons/react/outline'; // Import icons from Heroicons
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <footer
      className="bg-gray-900 text-white py-4 flex flex-col justify-center p-10 bg-gradient-to-b from-white to-amber-600"
      id="contact"
      style={{ alignItems: 'center' }}
    >
      <img src="/HeaderIcon.png" alt="Logo" className="h-auto w-40" />
      <div
        className=" mx-auto px-4 flex items-center justify-between mb-10 mt-10"
        style={{ width: '100%' }}
      >
        <div className="flex items-center space-x-4">
          <span className="text-lg">
            $MemeLord {new Date().getFullYear()} © All right reserved
          </span>
        </div>
        <div className="flex space-x-4">
          <SocialIcon
            url="https://telegram.org/"
            network="telegram"
            bgColor="none"
          />

          <SocialIcon
            url="https://www.linkedin.com/"
            network="linkedin"
            bgColor="none"
          />
          <SocialIcon
            url="https://www.facebook.com/"
            network="facebook"
            bgColor="none"
          />
          <SocialIcon
            url="https://twitter.com/"
            network="twitter"
            bgColor="none"
          />
          <SocialIcon
            url="https://youtube.com/"
            network="youtube"
            bgColor="none"
          />
          <SocialIcon
            url="https://github.com/"
            network="github"
            bgColor="none"
          />

          {/* Add more social media icons as needed */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
