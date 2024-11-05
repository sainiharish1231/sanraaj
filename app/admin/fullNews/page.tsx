import FullNews from "@/app/components/Admin/FullNews/FullNews";

const fullNews = async ({
  searchParams,
}: {
  searchParams: {
    slug_key: string;
    category: string;
  };
}) => {
  const getCategory = async () => {
    const endpoint = `${process.env.NEXT_PUBLIC_HOST_URL}/category`;
    const response = await fetch(endpoint, {
      cache: "no-cache",
    });
    const category = await response.json();
    return category;
  };

  const newsSlug_key = searchParams.slug_key;

  const category = searchParams.category;
  const categories = await getCategory();

  return (
    <>
      <FullNews
        newsSlug_key={newsSlug_key}
        category={category}
        categories={categories}
      />
    </>
  );
};

export default fullNews;
