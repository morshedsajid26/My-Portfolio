import React from 'react';
import Container from '../Layer/Container';

const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#f8f9fa] dark:bg-[#343a40] text-center py-6 md:py-10">
      <Container>
        <div>
          <p className="font-pop text-sm md:text-base text-[#252b33] dark:text-white/80 px-4">
            Copyright © {currentYear}{' '}
            <a 
              href="https://github.com/morshedsajid26" 
              className="text-[#20c997] hover:text-[#17a586] transition-all duration-300"
            >
              Sajid
            </a>
            . All Rights Reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
