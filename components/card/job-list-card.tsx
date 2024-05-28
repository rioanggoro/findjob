import Link from "next/link";
import { AspectRatio } from "../ui/aspect-ratio";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import { Clock5 } from "lucide-react";

const JobListCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card className="flex flex-col lg:flex-row gap-4 px-7 py-6 shadow rounded-xl">
        <CardHeader className="p-0 rounded-2xl overflow-hidden shadow-md w-[110px] h-[110px] hover:-translate-y-1 border transition-all duration-500">
          <AspectRatio ratio={1 / 1}>
            <Image
              alt="company image"
              src={"/tokopedia.jpeg"}
              fill
              objectFit="cover"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="p-0 flex-col gap-4 lg:gap-0 lg:justify-between">
          <h1 className="font-semibold text-lg text-brand">Tokopedia</h1>
          <Link
            href=""
            className="font-bold text-2xl hover:text-brand hover:translate-y-1 transition-all duration-500"
          >
            Software Engineer
          </Link>
          <div className="flex items-center gap-4">
            <div className="bg-muted text-muted-foreground px-2 py-1 rounded-md">
              DEVELOPMENT
            </div>
            <div className="flex items-center gap-2">
              <Clock5 className="w-5 h-5 text-brand" />
              <p className="text-muted-foreground uppercase">FULL TIME</p>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Lihat Detail Lowongan
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="flex flex-col lg:flex-row gap-4 px-7 py-6 shadow rounded-xl">
        <CardHeader className="p-3 rounded-2xl overflow-hidden shadow-md w-[110px] h-[110px] hover:-translate-y-1 border transition-all duration-500">
          <AspectRatio ratio={1 / 1}>
            <Image
              alt="company image"
              src={"/bukalapak.png"}
              fill
              objectFit="cover"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="p-0 flex-col gap-4 lg:gap-0 lg:justify-between">
          <h1 className="font-semibold text-lg text-brand">Bukalapak</h1>
          <Link
            href=""
            className="font-bold text-2xl hover:text-brand hover:translate-y-1 transition-all duration-500"
          >
            Backend Developer
          </Link>
          <div className="flex items-center gap-4">
            <div className="bg-muted text-muted-foreground px-2 py-1 rounded-md">
              DEVELOPMENT
            </div>
            <div className="flex items-center gap-2">
              <Clock5 className="w-5 h-5 text-brand" />
              <p className="text-muted-foreground uppercase">FULL TIME</p>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Lihat Detail Lowongan
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="flex flex-col lg:flex-row gap-4 px-7 py-6 shadow rounded-xl">
        <CardHeader className="p-3 rounded-2xl overflow-hidden shadow-md w-[110px] h-[110px] hover:-translate-y-1 border transition-all duration-500">
          <AspectRatio ratio={1 / 1}>
            <Image
              alt="company image"
              src={"/bukalapak.png"}
              fill
              objectFit="cover"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="p-0 flex-col gap-4 lg:gap-0 lg:justify-between">
          <h1 className="font-semibold text-lg text-brand">Bukalapak</h1>
          <Link
            href=""
            className="font-bold text-2xl hover:text-brand hover:translate-y-1 transition-all duration-500"
          >
            Backend Developer
          </Link>
          <div className="flex items-center gap-4">
            <div className="bg-muted text-muted-foreground px-2 py-1 rounded-md">
              DEVELOPMENT
            </div>
            <div className="flex items-center gap-2">
              <Clock5 className="w-5 h-5 text-brand" />
              <p className="text-muted-foreground uppercase">FULL TIME</p>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Lihat Detail Lowongan
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="flex flex-col lg:flex-row gap-4 px-7 py-4x shadow rounded-xl items-center">
        <CardHeader className="p-0 rounded-2xl overflow-hidden shadow-md w-[110px] h-[110px] hover:-translate-y-1 border transition-all duration-500">
          <AspectRatio ratio={1 / 1}>
            <Image
              alt="company image"
              src={"/shopee.jpeg"}
              fill
              objectFit="cover"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="p-0 flex-col gap-4 lg:gap-0 lg:justify-between">
          <h1 className="font-semibold text-lg text-brand">Shopee</h1>
          <Link
            href=""
            className="font-bold text-2xl hover:text-brand hover:translate-y-1 transition-all duration-500"
          >
            FrontEnd Developer
          </Link>
          <div className="flex items-center gap-4">
            <div className="bg-muted text-muted-foreground px-2 py-1 rounded-md">
              DEVELOPMENT
            </div>
            <div className="flex items-center gap-2">
              <Clock5 className="w-5 h-5 text-brand" />
              <p className="text-muted-foreground uppercase">FULL TIME</p>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Lihat Detail Lowongan
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
      
    </div>
  );
};

export default JobListCard;
