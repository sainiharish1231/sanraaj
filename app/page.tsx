import NewsService from "@/services/NewsService";

import { redirect } from "next/navigation";
import NewNews from "./components/NewNews";

const Home = async () => {
  const newNews = (await NewsService.getData().catch(() => {}))?.data || [];
  const topNews = (await NewsService.getTopNews().catch(() => {}))?.data || [];
  const breakingNews =
    (await NewsService.getBreakingNews().catch(() => {}))?.data || [];

  if (!newNews) return redirect("/404");
  return (
    <div className="w-full flex mt-[80px] flex-col justify-center items-center mb-20">
      <NewNews news={newNews} topNews={topNews} breakingNews={breakingNews} />
    </div>
  );
};

export default Home;
