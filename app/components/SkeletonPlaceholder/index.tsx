import React from "react";

const SkeletonPlaceholder: React.FC = () => (
  <>
    <div className="flex flex-col justify-center items-center">
      <div className="container">
        <div className="h-[260px] animate-pulse rounded-xl sm:h-[300px] w-full bg-slate-200 "></div>
        <div className="animate-pulse space-x-9">
          <div className="mt-8 w-full space-y-7">
            <div className="space-y-7">
              <div className="h-3 rounded bg-slate-200"></div>
              <div className="h-4 rounded bg-slate-200"></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1 h-2 rounded bg-slate-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default SkeletonPlaceholder;
