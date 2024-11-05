import React from "react";
import AddNews from "./AddNews";

const getCategory = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/category`, {
    cache: "no-cache",
  });
  const category = await response.json();
  return category;
};

const addNews = async () => {
  const category = await getCategory();
  return (
    <>
      <AddNews category={category.data} />
    </>
  );
};

export default addNews;
