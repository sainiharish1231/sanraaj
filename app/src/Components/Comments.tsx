import React from "react";
import { H3 } from "./common";

const Comments = () => {
    return (
        <div className="  mb-4 border-t ">
            <H3> Comments</H3>
            <div className="  px-6 py-4 border-b  ">
                <div className="flex   items-center justify-between">
                    <div className="flex items-center     mb-6">
                        <img
                            src="https://randomuser.me/api/portraits/men/97.jpg"
                            alt="Avatar"
                            className="w-12 h-12 
        rounded-full mr-4"
                        />
                        <div>
                            <div className="text-lg font-medium text-gray-800">
                                John Doe
                            </div>
                            <div className="text-gray-500">2 hours ago</div>
                        </div>
                    </div>

                    <H3 className="flex  ">
                        <svg
                            className="h-6 w-6 "
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                        <div className="w-[40px]  text-xl ">2k</div>
                    </H3>
                </div>
                <p className="text-lg leading-relaxed mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    sit amet lorem nulla. Donec consequat urna a tortor sagittis
                    lobortis.
                </p>
                <div className="flex justify-between items-center">
                    <a href="#" className="text-gray-500 hover:text-gray-700">
                        <i className="far fa-comment-alt"></i> Reply
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Comments;
