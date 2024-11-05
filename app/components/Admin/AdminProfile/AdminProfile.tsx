"use client";
import { Card, Button, TextInput } from "flowbite-react";
import Image from "next/image";
import { useState, useRef } from "react";

const AdminProfile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "Admin",
  });
  const [imageUrl, setImageUrl] = useState(
    "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
  );

  const imgRef: any = useRef();

  const changeHandler = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const updateHandler = () => {
    alert("update Succesfull");
  };

  const deleteHandler = () => {
    alert("delete Succesfull");
  };

  const signoutHandler = () => {
    alert("signOut Succesfull");
  };
  const handleImg = (e: any) => {
    const files = e.target.files[0];
    setImageUrl(URL.createObjectURL(files));
  };

  return (
    <div className="max-w-md w-full ">
      <div className="flex flex-col items-center">
        <div className="mb-5">
          <input type="file" onChange={handleImg} ref={imgRef} hidden />
          <Image
            className="w-24 h-24 rounded-full shadow-lg"
            src={imageUrl}
            alt="Profile Picture"
            width={150}
            height={150}
            onClick={() => imgRef.current.click()}
          />
        </div>
        <div className=" flex flex-col  gap-3 ">
          <input
            name="name"
            type="text"
            placeholder="username"
            required
            // value={user.name}
            onChange={changeHandler}
            className="p-2 border border-gray outline-none rounded-[10px] "
          />
          <input
            name="email"
            type="email"
            placeholder="name@gmail.com"
            required
            // value={user.email}
            onChange={changeHandler}
            className="p-2 border border-gray outline-none rounded-[10px] "
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            required
            // value={user.password}
            onChange={changeHandler}
            className="p-2 border border-gray outline-none rounded-[10px] "
          />
        </div>
        <p className="mt-2  ">{user.role}</p>
        <Button
          className="mt-4 "
          onClick={updateHandler}
          gradientDuoTone={"purpleToPink"}
          outline
        >
          Update
        </Button>
      </div>
      <div className="flex flex-row justify-around cursor-pointer">
        <Button
          onClick={deleteHandler}
          className="mt-4 "
          gradientDuoTone={"purpleToPink"}
          outline
        >
          Delete Account
        </Button>

        <Button
          onClick={signoutHandler}
          className="mt-4 "
          gradientDuoTone={"purpleToPink"}
          outline
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default AdminProfile;
