"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { Card, CardContent, CardHeader } from "../ui/card";
import Link from "next/link";
import { Clock5 } from "lucide-react";

const DetailsJobCard = () => {
  const [showActivity, setShowActivity] = useState(false);

  const handleShowActivity = () => {
    setShowActivity(true);
  };

  return (
    <>
      <div className="bg-gray-200 shadow-md rounded-md py-1 overflow-y-auto max-h-[600px]">
        <div className="flex flex-col gap-4 mb-2">
          <div className="bg-white shadow-md rounded-md p-4">
            <div className="flex items-center mb-4">
              <div className="bg-white rounded-full p-2">
                <img
                  src="/bukalapak.png"
                  alt="company image"
                  className="h-6 w-6 text-white"
                />
              </div>
              <div className="ml-3">
                <h2 className="font-bold text-lg">Bukalapak</h2>
                <p className="text-gray-500 text-sm">Full Time</p>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-bold text-xl">Backend Programmer</h3>
            </div>
            <div>
              <p className="text-gray-500 text-sm">South Jakarta</p>
            </div>
            <div className="mt-4">
              <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md font-bold py-1 px-1">
                Apply Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 mb-2">
          <div className="bg-white shadow-md rounded-md p-4">
            <div className="flex items-center mb-4">
              <div className="bg-white rounded-full p-2">
                <img
                  src="/bukalapak.png"
                  alt="company image"
                  className="h-6 w-6 text-white"
                />
              </div>
              <div className="ml-3">
                <h2 className="font-bold text-lg">Bukalapak</h2>
                <p className="text-gray-500 text-sm">Full Time</p>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-bold text-xl">Backend Programmer</h3>
            </div>
            <div>
              <p className="text-gray-500 text-sm">South Jakarta</p>
            </div>
            <div className="mt-4">
              <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md font-bold py-1 px-1">
                Apply Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 mb-2">
          <div className="bg-white shadow-md rounded-md p-4">
            <div className="flex items-center mb-4">
              <div className="bg-white rounded-full p-2">
                <img
                  src="/bukalapak.png"
                  alt="company image"
                  className="h-6 w-6 text-white"
                />
              </div>
              <div className="ml-3">
                <h2 className="font-bold text-lg">Bukalapak</h2>
                <p className="text-gray-500 text-sm">Full Time</p>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-bold text-xl">Backend Programmer</h3>
            </div>
            <div>
              <p className="text-gray-500 text-sm">South Jakarta</p>
            </div>
            <div className="mt-4">
              <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md font-bold py-1 px-1">
                Apply Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 mb-2">
          <div className="bg-white shadow-md rounded-md p-4">
            <div className="flex items-center mb-4">
              <div className="bg-white rounded-full p-2">
                <img
                  src="/bukalapak.png"
                  alt="company image"
                  className="h-6 w-6 text-white"
                />
              </div>
              <div className="ml-3">
                <h2 className="font-bold text-lg">Bukalapak</h2>
                <p className="text-gray-500 text-sm">Full Time</p>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-bold text-xl">Backend Programmer</h3>
            </div>
            <div>
              <p className="text-gray-500 text-sm">South Jakarta</p>
            </div>
            <div className="mt-4">
              <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md font-bold py-1 px-1">
                Apply Now
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-md p-4 mb-2">
          <div className="flex items-center mb-4">
            <div className="bg-whiterounded-full p-2">
              <img
                src="/tokopedia.jpeg"
                alt="company image"
                className="h-6 w-6 text-white"
              />
            </div>
            <div className="ml-3">
              <h2 className="font-bold text-lg">Tokopedia</h2>
              <p className="text-gray-500 text-sm">Full Time</p>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-xl">Frontend Developer</h3>
          </div>
          <div>
            <p className="text-gray-500 text-sm">South Jakarta</p>
          </div>
          <div className="mt-4">
            <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md font-bold py-1 px-1">
              Apply Now
            </button>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-md p-4 mb-2">
          <div className="flex items-center mb-4">
            <div className="bg-whiterounded-full p-2">
              <img
                src="/tokopedia.jpeg"
                alt="company image"
                className="h-6 w-6 text-white"
              />
            </div>
            <div className="ml-3">
              <h2 className="font-bold text-lg">Tokopedia</h2>
              <p className="text-gray-500 text-sm">Full Time</p>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-xl">Frontend Developer</h3>
          </div>
          <div>
            <p className="text-gray-500 text-sm">South Jakarta</p>
          </div>
          <div className="mt-4">
            <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md font-bold py-1 px-1">
              Apply Now
            </button>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-md p-4 mb-2">
          <div className="flex items-center mb-4">
            <div className="bg-whiterounded-full p-2">
              <img
                src="/tokopedia.jpeg"
                alt="company image"
                className="h-6 w-6 text-white"
              />
            </div>
            <div className="ml-3">
              <h2 className="font-bold text-lg">Tokopedia</h2>
              <p className="text-gray-500 text-sm">Full Time</p>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-xl">Frontend Developer</h3>
          </div>
          <div>
            <p className="text-gray-500 text-sm">South Jakarta</p>
          </div>
          <div className="mt-4">
            <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md font-bold py-1 px-1">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Card Detail Job */}
      <div className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  shadow-xl rounded-t-md py-2 col-span-3 h-[50px] flex flex-col justify-between  ">
        <h1 className="text-xl font-bold text-center mb-2 mt-0 ">
          Details Job
        </h1>
        <div className="bg-white text-black">
          <h2 className="text-2xl font-bold text-left ml-1">
            Backend Developer
          </h2>
          <h2 className="text-md font-normal text-left ml-1 opacity-60">
            South Jakarta
          </h2>
          <CardHeader className="p-0 overflow-hidden shadow-md w-[130px] h-[130px] hover:-translate-y-1 border transition-all duration-500 ml-1">
            <AspectRatio ratio={1 / 1}>
              <Image
                alt="company image"
                src={"/bukalapak.png"}
                fill
                objectFit="cover"
              />
            </AspectRatio>
          </CardHeader>
          <ul className="text-wrap list-disc text-lg font-semibold text-center ml-1 mt-4">
            Responsibilities{" "}
          </ul>
          <li className="text-sm font-regular text-left text-wrap ml-9 mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
            officia nemo molestiae debitis commodi fuga voluptas iste esse
            placeat reprehenderit ipsum deleniti animi cupiditate obcaecati,
            nobis eum est quos ex.
          </li>
          <li className="text-sm font-regular text-left text-wrap ml-9 mt-4">
            Second responsibility Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Nulla, officia nemo molestiae debitis commodi fuga
            voluptas iste esse placeat reprehenderit ipsum deleniti animi
            cupiditate obcaecati, nobis eum est quos ex.
          </li>
          <li className="text-sm font-regular text-left text-wrap ml-9 mt-4">
            Fourth responsibility Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Nulla, officia nemo molestiae debitis commodi fuga
            voluptas iste esse placeat reprehenderit ipsum deleniti animi
            cupiditate obcaecati, nobis eum est quos ex.
          </li>
          <ul className="text-wrap list-disc text-lg font-semibold text-center ml-1 mt-4">
            Qualification{" "}
          </ul>
          <li className="text-sm font-regular text-left text-wrap ml-9 mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
            officia nemo molestiae debitis commodi fuga voluptas iste esse
            placeat reprehenderit ipsum deleniti animi cupiditate obcaecati,
            nobis eum est quos ex.
          </li>
          <li className="text-sm font-regular text-left text-wrap ml-9 mt-4">
            Second responsibility Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Nulla, officia nemo molestiae debitis commodi fuga
            voluptas iste esse placeat reprehenderit ipsum deleniti animi
            cupiditate obcaecati, nobis eum est quos ex.
          </li>
        </div>
      </div>
    </>
  );
};

export default DetailsJobCard;
