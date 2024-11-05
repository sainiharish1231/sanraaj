import Category from "./Category";

const getCategory = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/category`, {
    cache: "no-cache",
  });
  const category = await response.json();
  return category;
};

const page = async () => {
  const category = await getCategory();
  return (
    <>
      <Category category={category.data} />
    </>
  );
};

export default page;
