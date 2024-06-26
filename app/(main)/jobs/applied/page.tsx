import SharedJobCard from "@/components/card/shared-job-detail";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const SharedJobsPage = () => {
  return (
    <div className="space-y-7">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-0">
        <div>
          <h1 className="text-2xl font-bold text-brand">Aplied Jobs</h1>
          <p>List of jobs you have applied.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 1 }).map((_, index) => (
          <SharedJobCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default SharedJobsPage;
