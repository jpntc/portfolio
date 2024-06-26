import React from "react";
import {WindowIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({ imgUrl, title, description, onClick, styles}) => {
  return (
    <div className="">
      <div
        className={`h-52 relative group overflow-hidden rounded-t-xl ${styles}`}
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: `${styles.backgroundSize}`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center ">
          <WindowIcon
            className="h-10 w-10 text-quaternary-dark cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2  hover:text-slate-100"
            onClick={onClick}
          />
        </div>
      </div>
      <div className="min-h-56 md:min-h-60 flex flex-col rounded-b-xl bg-slate-700 py-6 px-4">
        <h5 className="text-slate-100 text-xl xl:text-2xl font-bold mb-2 flex-grow ">
          {title}
        </h5>
        <p className="text-white flex-grow">{description}</p>
      </div>
    </div>
  );
};
export default ProjectCard;



