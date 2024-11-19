"use client";
import { Button, Label, List, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { customToast } from "@/app/components/CustomToast";
import { useSession } from "next-auth/react";

interface category {
  categoryName: string;
  parentCategory: string;
}

interface props {
  category: category[];
}

const Category: React.FC<props> = (props) => {
  const { data: session }: any = useSession();
  const { category } = props;

  const [categories, setCategories] = useState(category);

  const [categoryData, setCategoryData] = useState({
    categoryName: "",
    parentCategory: "",
  });

  const changeHandler = (e: any) => {
    setCategoryData({ ...categoryData, [e.target.name]: e.target.value });
  };

  const addCategory = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_URL}/category`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `${session.user.token}`,
          },
          body: JSON.stringify(categoryData),
        }
      );

      if (response.status === 429) {
        // Handle rate limiting error
        const result = await response.json();
        console.log("result.message", result.message);
        customToast(result.message, "error");
        return;
      }

      const result = await response.json();

      if (result.success) {
        customToast("Category added successfully", "success");
        setCategories([...categories, result.data]);
        setCategoryData({
          categoryName: "",
          parentCategory: "",
        });
      } else {
        customToast(result.message, "error");
      }
    } catch (error) {
      customToast("An error occurred. Please try again later.", "error");
      console.error("Error adding category:", error);
    }
  };

  return (
    <>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Category" value="Category" />
          </div>
          <TextInput
            id="category"
            type="text"
            name="categoryName"
            value={categoryData.categoryName}
            placeholder="Enter your custom category"
            shadow
            onChange={changeHandler}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Parent Category" value="Parent Category" />
          </div>
          <TextInput
            id="parentCategory"
            type="text"
            name="parentCategory"
            value={categoryData.parentCategory}
            placeholder="Parent Category"
            shadow
            onChange={changeHandler}
          />
        </div>

        <div className="flex justify-center mt-[20px]">
          <Button className="w-[200px] text-center" onClick={addCategory}>
            Add
          </Button>
        </div>
      </form>
      <div className="mb-20">
        <h1 className="text-center flex justify-center text-2xl">
          All Categories
        </h1>
        {categories?.map((item: any) => {
          return (
            <div key={item.id}>
              <List className="mt-[20px]">
                <List.Item>{item.categoryName}</List.Item>
              </List>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Category;
