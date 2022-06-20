import Modal from '@/Components/Modal';
import { Link } from '@inertiajs/inertia-react';
import React from 'react';
import Status from './Status';

function Home() {
  return (
    <div className="space-y-4    ">
      <div className="grid grid-cols-2  min-h-[84vh]  w-full    ">
        <div className="  flex">
          <div className="flex flex-col justify-center items-center mt-11">
            <div className="   w-[70%] mb-14 ">
              <div>
                <h1 className="text-4xl text-blue-300 py-4 font-bold">هنرستان شهید چمران</h1>
                <p className="text-xl leading-loose indent-6	 ">
                  با بهره مندی از بین تمامی اطلاعات در مورد هنرستان شهید چمران به شما کمک میکند.
                </p>
              </div>
              <div className=" mt-32 ">
                <Link href="/pre-register" className='Button px-14 ml-10'>
                  ثبت نام
                </Link>

                <Status className="btn_info_outline" />
              </div>
            </div>
          </div>
        </div>
        <div className="animate-bounce-2 relative flex flex-wrap justify-center items-center  overflow-hidden">
          <img
            className="  absolute z-50  object-cover w-full lg:h-full md:h-[70%] sm:h-[60%]  "
            src="http://www.upsara.com/images/n077128_.png"
            alt="boy"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
