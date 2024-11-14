import NewsService from "@/services/NewsService";

import { redirect } from "next/navigation";
import NewNews from "./components/NewNews";

const Home = async () => {
  const newNews = (await NewsService.getData().catch(() => {}))?.data || [];
  const topNews = (await NewsService.getTopNews().catch(() => {}))?.data || [];
  const breakingNews =
    (await NewsService.getBreakingNews().catch(() => {}))?.data || [];

  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/category`, {
    cache: "no-cache",
  });
  const category = await response.json();

  if (!newNews) return redirect("/404");
  return (
    <div className="w-full mt-[60px] lg:h-[calc(100vh-145px)] lg:overflow-hidden mb-20">
      <NewNews
        news={newNews}
        topNews={topNews}
        breakingNews={breakingNews}
        category={category}
      />
    </div>
  );
};

export default Home;
