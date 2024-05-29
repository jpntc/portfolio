import React from "react";
import { CodeBracketIcon, EyeIcon, WindowIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
const ProjectCard = ({ imgUrl, title, description, onClick }) => {
  return (
    <div className="">
      <div
        className="h-52 md:h-52 relative group overflow-hidden rounded-t-xl "
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
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
      <div className="rounded-b-xl bg-slate-700 py-6 px-4 mb-3 h-40 md:h-56 ">
        <h5 className="text-slate-100 text-2xl font-bold mb-2 ">{title}</h5>
        <p className="text-white h-40 inline-block">{description}</p>
      </div>
    </div>
  );
};
export default ProjectCard;



