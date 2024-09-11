import React from "react";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  return (
    // Container for the header, positioned at the top with full width and padding
    <div className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-gradient-to-b from-black to-transparent z-10">
      {/* Netflix Logo on the left */}
      <img
        className="w-32 md:w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />
      <ProfileMenu/>
    </div>
  );
};

export default Header;
