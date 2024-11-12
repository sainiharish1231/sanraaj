import { IoHome } from "react-icons/io5";
import { MdAddChart } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { LiaBlogSolid } from "react-icons/lia";
import Link from "next/link";

export const LeftSlider = () => {
  return (
    <div
      style={{ boxShadow: "0px 2px 20px 0px #fbfbfb4f" }}
      className="flex flex-col justify-between p-2 h-full  shadow-2xl  left-0 top-0 pb-[140px] items-center"
    >
      <div className=" font-bold items-center">
        <h2 className="text-2xl">Admin</h2>
      </div>
      <div>
        <Link
          href="/admin/dashboard"
          className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-300 flex-col"
        >
          <IoHome />
          Dashboard
        </Link>
      </div>
      <div>
        <Link
          href="/admin/news"
          className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-300 flex-col"
        >
          <LiaBlogSolid />
          News
        </Link>
      </div>
      <div>
        <Link
          href="/admin/user"
          className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-300 flex-col"
        >
          <FaRegCircleUser />
          Users
        </Link>
      </div>
      <div>
        <Link
          href="/admin/comment"
          className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-300 flex-col"
        >
          <FaRegCommentDots />
          Comments
        </Link>
      </div>

      <div>
        <Link
          href="/admin/addNews"
          className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-300 flex-col"
        >
          <MdAddChart />
          Add News
        </Link>
      </div>
      <div>
        <Link
          href="/admin/category"
          className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-300 flex-col"
        >
          <MdAddChart />
          Category
        </Link>
      </div>
    </div>
  );
};
