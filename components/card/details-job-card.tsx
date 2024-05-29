'use client';

import React, { useState } from "react";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { Card, CardContent, CardHeader } from "../ui/card";
import Link from "next/link";
import { Clock5 } from "lucide-react";

  const DetailsJobPage = () => {
    const [showActivity, setShowActivity] = useState(false);

    const handleShowActivity = () => {
      setShowActivity(true);
    };

    return (
      <><div className="bg-gray-200 shadow-md rounded-md py-1 overflow-y-auto max-h-[600px]">
        <div className="flex flex-col gap-4">
          <div className="bg-white shadow-md rounded-md p-4">
            <div className="flex items-center mb-4">
              <div className="bg-white rounded-full p-2">
              <img src="/bukalapak.png" alt="company image" className="h-6 w-6 text-white" />
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
              <p className="text-gray-500 text-sm">Kota Jakarta Selatan</p>
            </div>
            <div className="mt-4">
              <button onClick={handleShowActivity}
                className="text-white bg-gradient-to-r from-lime-700 via-lime-600 to-lime-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-700 rounded-md font-bold py-1 px-1">
                Sudah Daftar
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <div className="flex items-center mb-4">
            <div className="bg-whiterounded-full p-2">
            <img src="/tokopedia.jpeg" alt="company image" className="h-6 w-6 text-white" />
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
            <p className="text-gray-500 text-sm">Kota Jakarta Pusat</p>
          </div>
          <div className="mt-4">
            <button className="text-white bg-gradient-to-r from-lime-700 via-lime-600 to-lime-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-700 rounded-md font-bold py-1 px-1">
              Sudah Daftar
            </button>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <div className="flex items-center mb-4">
          <div className="bg-whiterounded-full p-2">
            <img src="/tokopedia.jpeg" alt="company image" className="h-6 w-6 text-white" />
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
            <p className="text-gray-500 text-sm">Kota Jakarta Pusat</p>
          </div>
          <div className="mt-4">
            <button className="text-white bg-gradient-to-r from-lime-700 via-lime-600 to-lime-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-700 rounded-md font-bold py-1 px-1">
              Sudah Daftar
            </button>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <div className="flex items-center mb-4">
            <div className="bg-whiterounded-full p-2">
            <img src="/tokopedia.jpeg" alt="company image" className="h-6 w-6 text-white" />
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
            <p className="text-gray-500 text-sm">Kota Jakarta Pusat</p>
          </div>
          <div className="mt-4">
            <button className="text-white bg-gradient-to-r from-lime-700 via-lime-600 to-lime-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-700 rounded-md font-bold py-1 px-1">
              Sudah Daftar
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-xl rounded-t-md py-2 col-span-3 h-[50px] flex flex-col items-center justify-between">
      <h1 className="text-xl font-bold text-center mb-2 mt-2">Details Job</h1>
      </div></>
  );
};

export default DetailsJobCard;
