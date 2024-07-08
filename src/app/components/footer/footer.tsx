import React from 'react';
import { GlobeAltIcon, MailIcon, PhoneIcon } from '@heroicons/react/outline'; // Import icons from Heroicons
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <footer
      className="bg-gray-900 text-white py-4 flex flex-col justify-center w-full p-10 footer-bg"
      id="contact"
      style={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <div className="max-w-6xl w-full flex flex-col ">
        <img
          src="/HeaderIcon.png"
          alt="Logo"
          className="h-auto w-40 mx-auto mb-6"
        />

        <div className="mx-auto px-4 flex flex-col sm:flex-row items-center justify-between mb-10 mt-6 w-full">
          <div className="flex items-center justify-center sm:justify-start mb-4 sm:mb-0">
            <span className="text-lg">
              $MemeLord {new Date().getFullYear()} © All right reserved
            </span>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-end space-x-4">
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
      </div>
    </footer>
  );
}

export default Footer;
