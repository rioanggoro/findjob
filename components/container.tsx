import React from 'react'

const container = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <div className='px-4 md:px14 xl:px-20 pt-24 lg:pt-28 pb-8'>{children}</div>
    </div>
  );
};

export default container;

