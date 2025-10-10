import React from 'react';
import CallToActionDesktop from './CallToActionDesktop';

const CallToActionSection = () => {
  return (
    <>
      <div className="hidden md:block">
        <CallToActionDesktop />
      </div>
    </>
  );
};

export default CallToActionSection;