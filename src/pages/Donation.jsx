import React from 'react'

import Banner from '../partials/Banner';
import PageIllustration from '../partials/PageIllustration';
import Header from '../partials/Header';
import DonationBox from '../partials/DonationBox';



const Donation = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>
        <DonationBox/>
      </main>
      <Banner/>

      {/*  Site footer */}
    </div>
  )
}

export default Donation