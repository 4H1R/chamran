import { OpenModal } from '@/Shared/Modal/OpenModal';
import { Link } from '@inertiajs/inertia-react';
import React from 'react';

function Home() {
  return (
    <div className="space-y-6   ">
      <div className="flex w-full flex-col-reverse  md:grid   md:min-h-[84vh] md:grid-cols-2    ">
        {/* //describe page */}
        <div className="  md:flex  ">
          <div className="flex min-h-[40vh]  flex-col  items-center     md:mb-12 md:mt-11 md:h-auto  md:max-h-full md:justify-center">
            <div className="  mt-6 flex  flex-col items-center   xm:mb-14  lg:w-[70%] ">
              <div className="text-center   ">
                <h1 className="text-3xl  text-blue-300  md:text-4xl  font-bold">هنرستان شهید چمران</h1>
                <p className="mt-4 text-lg font-bold md:mt-11  md:indent-6  md:text-xl	 ">
                  با بهره مندی از بین تمامی اطلاعات در مورد هنرستان شهید چمران به شما کمک میکند.
                </p>
              </div>
              <div className=" mt-24   md:mt-32  ">
                <Link href="/pre-register" className="button_info ml-10  px-10 md:px-14">
                  ثبت نام
                </Link>
                <OpenModal className="btn_info_outline" name="status">
                  نتیجه ثبت نام
                </OpenModal>
              </div>
            </div>
          </div>
        </div>
        {/* img */}
        <div className="    flex flex-wrap items-center justify-center  ">
          <img
            className="animate-bounce-2 min-h-16 h-[60rem] max-h-[45vh] w-full object-cover xm:h-full  xm:w-[80%] xm:object-bottom  sm:object-center   md:h-[70%]  md:max-h-full md:w-full md:object-cover lg:h-full   "
            src="http://www.upsara.com/images/n077128_.png"
            alt="boy"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
