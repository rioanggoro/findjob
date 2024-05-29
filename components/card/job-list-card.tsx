import Link from "next/link";
import { AspectRatio } from "../ui/aspect-ratio";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import { Clock5 } from "lucide-react";

const JobListCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

      {/* Card Tokopedia */}
      <Card className="flex flex-col items-center justify-center lg:flex-row gap-4 px-7 py-6 shadow rounded-xl">
        <CardHeader className="p-0 rounded-2xl overflow-hidden shadow-md w-[110px] h-[110px] hover:-translate-y-1 border transition-all duration-500">
          <AspectRatio ratio={1 / 1}>
            <Image alt="company image" src={"/tokopedia.jpeg"} fill objectFit="cover" />
          </AspectRatio>
        </CardHeader>
        <CardContent className="p-0 flex-col gap-4 lg:gap-0 lg:justify-between md:gap-0 md:justify-between sm:gap-0 sm:justify-between">
          <h1 className="font-semibold lg:text-lg lg:text-left text-brand md:text-center md:text-sm sm:text-center sm:text-sm">
            Tokopedia
          </h1>
          <h1 className="font-semibold lg:text-lg lg:text-left text-black md:text-center md:text-sm sm:text-center sm:text-sm">
            Software Engineer
          </h1>
          <div className="flex flex-col gap-4 w-full md:flex-row md:items-center md:justify-between">
            <div className="bg-muted text-muted-foreground px-2 py-1 rounded-md">
              DEVELOPMENT
            </div>
            <div className="flex items-center gap-2">
              <Clock5 className="w-5 h-5 text-brand" />
              <p className="text-muted-foreground uppercase">FULL TIME</p>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-start">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 md:w-full md:text-center md:text-sm"
            >
              View Job Details
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Card Bukalapak ui/ux */}
      <Card className="flex flex-col items-center justify-center lg:flex-row gap-4 px-7 py-6 shadow rounded-xl">
        <CardHeader className="p-0 rounded-2xl overflow-hidden shadow-md w-[110px] h-[110px] hover:-translate-y-1 border transition-all duration-500">
          <AspectRatio ratio={1 / 1}>
            <Image alt="company image" src={"/bukalapak.png"} fill objectFit="cover" />
          </AspectRatio>
        </CardHeader>
        <CardContent className="p-0 flex-col gap-4 lg:gap-0 lg:justify-between md:gap-0 md:justify-between sm:gap-0 sm:justify-between">
          <h1 className="font-semibold lg:text-lg lg:text-left text-brand md:text-center md:text-sm sm:text-center sm:text-sm">
            Bukalapak
          </h1>
          <h1 className="font-semibold lg:text-lg lg:text-left text-black md:text-center md:text-sm sm:text-center sm:text-sm">
            Ui/Ux Desginer
          </h1>
          <div className="flex flex-col gap-4 w-full md:flex-row md:items-center md:justify-between">
            <div className="bg-muted text-muted-foreground px-2 py-1 rounded-md">
              DEVELOPMENT
            </div>
            <div className="flex items-center gap-2">
              <Clock5 className="w-5 h-5 text-brand" />
              <p className="text-muted-foreground uppercase">FULL TIME</p>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-start">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 md:w-full md:text-center md:text-sm"
            >
              View Job Details
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Card Bukalapak backend */}
      <Card className="flex flex-col items-center justify-center lg:flex-row gap-4 px-7 py-6 shadow rounded-xl">
        <CardHeader className="p-0 rounded-2xl overflow-hidden shadow-md w-[110px] h-[110px] hover:-translate-y-1 border transition-all duration-500">
          <AspectRatio ratio={1 / 1}>
            <Image alt="company image" src={"/bukalapak.png"} fill objectFit="cover" />
          </AspectRatio>
        </CardHeader>
        <CardContent className="p-0 flex-col gap-4 lg:gap-0 lg:justify-between md:gap-0 md:justify-between sm:gap-0 sm:justify-between">
          <h1 className="font-semibold lg:text-lg lg:text-left text-brand md:text-center md:text-sm sm:text-center sm:text-sm">
            Bukalapak
          </h1>
          <h1 className="font-semibold lg:text-lg lg:text-left text-black md:text-center md:text-sm sm:text-center sm:text-sm">
            Backend Developer
          </h1>
          <div className="flex flex-col gap-4 w-full md:flex-row md:items-center md:justify-between">
            <div className="bg-muted text-muted-foreground px-2 py-1 rounded-md">
              DEVELOPMENT
            </div>
            <div className="flex items-center gap-2">
              <Clock5 className="w-5 h-5 text-brand" />
              <p className="text-muted-foreground uppercase">FULL TIME</p>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-start">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 md:w-full md:text-center md:text-sm"
            >
              View Job Details
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Card Shopee frontend*/}
      <Card className="flex flex-col items-center justify-center lg:flex-row gap-4 px-7 py-6 shadow rounded-xl">
        <CardHeader className="p-0 rounded-2xl overflow-hidden shadow-md w-[110px] h-[110px] hover:-translate-y-1 border transition-all duration-500">
          <AspectRatio ratio={1 / 1}>
            <Image alt="company image" src={"/shopee.jpeg"} fill objectFit="cover" />
          </AspectRatio>
        </CardHeader>
        <CardContent className="p-0 flex-col gap-4 lg:gap-0 lg:justify-between">
          <h1 className="font-semibold text-lg text-brand">Shopee</h1>
          <h1 className="font-semibold lg:text-lg lg:text-left text-black md:text-center md:text-sm sm:text-center sm:text-sm">
            Frontend Developer
          </h1>
          <div className="flex flex-col gap-4 w-full md:flex-row md:items-center md:justify-between">
            <div className="bg-muted text-muted-foreground px-2 py-1 rounded-md">
              DEVELOPMENT
            </div>
            <div className="flex items-center gap-2">
              <Clock5 className="w-5 h-5 text-brand" />
              <p className="text-muted-foreground uppercase">FULL TIME</p>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-start">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 md:w-full md:text-center md:text-sm"
              >
              View Job Details
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Card Tokopedia data analyst */}
      <Card className="flex flex-col items-center justify-center lg:flex-row gap-4 px-7 py-6 shadow rounded-xl">
        <CardHeader className="p-0 rounded-2xl overflow-hidden shadow-md w-[110px] h-[110px] hover:-translate-y-1 border transition-all duration-500">
          <AspectRatio ratio={1 / 1}>
            <Image alt="company image" src={"/tokopedia.jpeg"} fill objectFit="cover" />
          </AspectRatio>
        </CardHeader>
        <CardContent className="p-0 flex-col gap-4 lg:gap-0 lg:justify-between">
          <h1 className="font-semibold text-lg text-brand">Tokopedia</h1>
          <h1 className="font-semibold lg:text-lg lg:text-left text-black md:text-center md:text-sm sm:text-center sm:text-sm">
            Data Analyst
          </h1>
          <div className="flex flex-col gap-4 w-full md:flex-row md:items-center md:justify-between">
            <div className="bg-muted text-muted-foreground px-2 py-1 rounded-md">
              DEVELOPMENT
            </div>
            <div className="flex items-center gap-2">
              <Clock5 className="w-5 h-5 text-brand" />
              <p className="text-muted-foreground uppercase">Remote</p>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-start">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 md:w-full md:text-center md:text-sm"
              >
              View Job Details
            </button>
          </div>
        </CardContent>
      </Card>
       {/* Card Tokopedia data analyst */}
       <Card className="flex flex-col items-center justify-center lg:flex-row gap-4 px-7 py-6 shadow rounded-xl">
        <CardHeader className="p-0 rounded-2xl overflow-hidden shadow-md w-[110px] h-[110px] hover:-translate-y-1 border transition-all duration-500">
          <AspectRatio ratio={1 / 1}>
            <Image alt="company image" src={"/tokopedia.jpeg"} fill objectFit="cover" />
          </AspectRatio>
        </CardHeader>
        <CardContent className="p-0 flex-col gap-4 lg:gap-0 lg:justify-between">
          <h1 className="font-semibold text-lg text-brand">Tokopedia</h1>
          <h1 className="font-semibold lg:text-lg lg:text-left text-black md:text-center md:text-sm sm:text-center sm:text-sm">
            Data Analyst
          </h1>
          <div className="flex flex-col gap-4 w-full md:flex-row md:items-center md:justify-between">
            <div className="bg-muted text-muted-foreground px-2 py-1 rounded-md">
              DEVELOPMENT
            </div>
            <div className="flex items-center gap-2">
              <Clock5 className="w-5 h-5 text-brand" />
              <p className="text-muted-foreground uppercase">Remote</p>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-start">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 md:w-full md:text-center md:text-sm"
              >
              View Job Details
            </button>
          </div>
        </CardContent>
      </Card>
       {/* Card Tokopedia data analyst */}
       <Card className="flex flex-col items-center justify-center lg:flex-row gap-4 px-7 py-6 shadow rounded-xl">
        <CardHeader className="p-0 rounded-2xl overflow-hidden shadow-md w-[110px] h-[110px] hover:-translate-y-1 border transition-all duration-500">
          <AspectRatio ratio={1 / 1}>
            <Image alt="company image" src={"/tokopedia.jpeg"} fill objectFit="cover" />
          </AspectRatio>
        </CardHeader>
        <CardContent className="p-0 flex-col gap-4 lg:gap-0 lg:justify-between">
          <h1 className="font-semibold text-lg text-brand">Tokopedia</h1>
          <h1 className="font-semibold lg:text-lg lg:text-left text-black md:text-center md:text-sm sm:text-center sm:text-sm">
            Data Analyst
          </h1>
          <div className="flex flex-col gap-4 w-full md:flex-row md:items-center md:justify-between">
            <div className="bg-muted text-muted-foreground px-2 py-1 rounded-md">
              DEVELOPMENT
            </div>
            <div className="flex items-center gap-2">
              <Clock5 className="w-5 h-5 text-brand" />
              <p className="text-muted-foreground uppercase">Remote</p>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-start">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 md:w-full md:text-center md:text-sm"
              >
              View Job Details
            </button>
          </div>
        </CardContent>
      </Card>
       {/* Card Tokopedia data analyst */}
       <Card className="flex flex-col items-center justify-center lg:flex-row gap-4 px-7 py-6 shadow rounded-xl">
        <CardHeader className="p-0 rounded-2xl overflow-hidden shadow-md w-[110px] h-[110px] hover:-translate-y-1 border transition-all duration-500">
          <AspectRatio ratio={1 / 1}>
            <Image alt="company image" src={"/tokopedia.jpeg"} fill objectFit="cover" />
          </AspectRatio>
        </CardHeader>
        <CardContent className="p-0 flex-col gap-4 lg:gap-0 lg:justify-between">
          <h1 className="font-semibold text-lg text-brand">Tokopedia</h1>
          <h1 className="font-semibold lg:text-lg lg:text-left text-black md:text-center md:text-sm sm:text-center sm:text-sm">
            Data Analyst
          </h1>
          <div className="flex flex-col gap-4 w-full md:flex-row md:items-center md:justify-between">
            <div className="bg-muted text-muted-foreground px-2 py-1 rounded-md">
              DEVELOPMENT
            </div>
            <div className="flex items-center gap-2">
              <Clock5 className="w-5 h-5 text-brand" />
              <p className="text-muted-foreground uppercase">Remote</p>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-start">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 md:w-full md:text-center md:text-sm"
              >
              Lihat Detail Lowongan
            </button>
          </div>
        </CardContent>
      </Card>

    </div>
  );
};

export default JobListCard;
