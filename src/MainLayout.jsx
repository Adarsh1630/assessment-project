import React from 'react';
import TabsWidget from './TabsWidget';
import GalleryWidget from './GalleryWidget';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex gap-5 h-fit">
      {/* For Left Side */}
      <div className="w-1/2 hidden md:block bg-slate-500 rounded-xl"></div>

      {/* Right side */}
      <div className="w-full md:w-1/2 px-2 space-y-2">
        {/* Widgets will go here */}
        <TabsWidget />
        <GalleryWidget/>
      </div>
    </div>
  );
}

export default MainLayout;
