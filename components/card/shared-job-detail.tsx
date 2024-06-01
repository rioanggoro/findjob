"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { Card, CardContent, CardHeader } from "../ui/card";
import Link from "next/link";
import { Clock5 } from "lucide-react";
import ExploreJobCard from "./explore-job-card";
import { exploreJobData } from "@/lib/data";

const SharedJobCard = () => {
  const [showActivity, setShowActivity] = useState(false);

  console.log(exploreJobData);

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
              <Link href="/" passHref>
                <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 rounded-md font-medium py-1 px-1.5 flex items-center">
                  <svg
                    className="h-6 w-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  APPLIED
                </button>
              </Link>
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
              <Link href="/" passHref>
                <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 rounded-md font-medium py-1 px-1.5 flex items-center">
                  <svg
                    className="h-6 w-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  APPLIED
                </button>
              </Link>
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
              <Link href="/" passHref>
                <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 rounded-md font-medium py-1 px-1.5 flex items-center">
                  <svg
                    className="h-6 w-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  APPLIED
                </button>
              </Link>
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
              <Link href="/" passHref>
                <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 rounded-md font-medium py-1 px-1.5 flex items-center">
                  <svg
                    className="h-6 w-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  APPLIED
                </button>
              </Link>
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
            <Link href="/" passHref>
              <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 rounded-md font-medium py-1 px-1.5 flex items-center">
                <svg
                  className="h-6 w-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                APPLIED
              </button>
            </Link>
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
            <Link href="/" passHref>
              <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 rounded-md font-medium py-1 px-1.5 flex items-center">
                <svg
                  className="h-6 w-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                APPLIED
              </button>
            </Link>
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
            <Link href="/" passHref>
              <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 rounded-md font-medium py-1 px-1.5 flex items-center">
                <svg
                  className="h-6 w-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                APPLIED
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Card explore Job */}
      <div className="text-black px-4 bg-white shadow-xl rounded-t-md py-2 col-span-3 flex flex-col max-h-[600px] overflow-y-auto">
        <h1 className="text-2xl font-bold text-center ">
          Explore Job
          <p className="text-center font-light text-sm opacity-50 jus">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </h1>
        <div className="P-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreJobData.map((data) => (
            <ExploreJobCard
              title={data.title}
              description={data.Description}
              image={data.Image}
              key={data.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SharedJobCard;
