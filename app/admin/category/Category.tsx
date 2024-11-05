"use client";
import { Button, Label, List, TextInput } from "flowbite-react";
import { Result } from "postcss";
import React, { useState } from "react";
import Alert from "../../components/Alert/Alert";

interface category {
  categoryName: string;
  parentCategory: string;
}

interface prope {
  category: category[];
}

const Category: React.FC<prope> = (prope) => {
  const { category } = prope;

  const [categories, setCategories] = useState(category);

  const [categoryData, setCategoryData] = useState({
    categoryName: "",
    parentCategory: "",
  });
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const changeHandler = (e: any) => {
    setCategoryData({ ...categoryData, [e.target.name]: e.target.value });
  };

  const addCategory = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST_URL}/category`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(categoryData),
      }
    );

    const result = await response.json();

    if (result.success) {
      setAlertMessage(result.message);
      setCategories([...categories, result.data]);
      setCategoryData({
        categoryName: "",
        parentCategory: "",
      });
    } else {
      setAlertMessage(result.message);
    }
  };

  const handleCloseAlert = () => {
    setAlertMessage(null);
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
            placeholder="Enter your coustom category"
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
          All Category
        </h1>
        {categories.map((item) => {
          return (
            <>
              <List className="mt-[20px]  ">
                <List.Item>{item.categoryName}</List.Item>
              </List>
            </>
          );
        })}
      </div>
      {alertMessage && (
        <Alert message={alertMessage} onClose={handleCloseAlert} />
      )}
    </>
  );
};

export default Category;
