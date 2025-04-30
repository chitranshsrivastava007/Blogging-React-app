import React from 'react';
import { PaperClipIcon } from '@heroicons/react/20/solid'


const About: React.FC = () => {

  return (
    <div>

    <div className="mx-auto max-w-2xl py-3 sm:py-10 lg:py-18 mb-4">
          <div className="text-center">
            <div className="text-4xl font-bold tracking-tight sm:text-6xl">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-indigo-600">
                    About
                </h1>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Personal information and application
            </p>
          </div>
     </div>


    <div className="mt-6 border-t border-gray-100">
      <dl className="divide-y divide-gray-100">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Chitransh Srivastava</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Application for</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">blogging</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">YashSrivastav457@gmail.com</dd>
        </div>

        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          Enthusiastic web developer, reliable,
responsible and hard-working person.
team worker and adaptable to all
challenging situations. able to work well
both in a team environment as well as
using own initiative
          </dd>
        </div>
      
      </dl>
    </div>
  </div>
  );
};

export default About;
