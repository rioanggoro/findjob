import DetailsJobCard from "@/components/card/details-job-card";

const DetailsJobPage = () => {
  return (
    <div className="space-y-7">
      <div>
        <h1 className="text-2xl font-bold text-brand">Applied Jobs</h1>
        <p>A list of jobs that you have applied for.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 1 }).map((_, index) => (
          <DetailsJobCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default DetailsJobPage;