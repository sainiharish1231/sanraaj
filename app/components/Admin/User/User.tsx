"use client";
import moment from "moment";
import { Table } from "flowbite-react";
import React, { useState } from "react";
import { customToast } from "../../CustomToast";

interface users {
  name: String;
  email: string;
  password: string;
  createdAt: string;
  id: string;
}

interface prope {
  users: users[];
}

const User: React.FC<prope> = ({ users }) => {
  const [user, setUser] = useState(users);
  const handleDeleteUser = async (id: any) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_URL}/user/deleteUser/${id}`,
        {
          method: "DELETE",
          cache: "no-cache",
        }
      );
      const result = await response.json();

      if (response.ok) {
        if (result.message === "success") {
          const users = user.filter((u: any) => u.id !== id);
          setUser(users);
          customToast("user delete successfull", "success");
        }
      }
    } catch (error: any) {
      console.log("error ", error.message);
    }
  };

  return (
    <>
      <div>
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell className="text-center">
              Date Created
            </Table.HeadCell>
            <Table.HeadCell className="text-center">Username</Table.HeadCell>
            <Table.HeadCell className="text-center">Email</Table.HeadCell>
            <Table.HeadCell className="text-center">Delete</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {user.map((user) => {
              return (
                <Table.Row key={user.id}>
                  <Table.Cell className="text-center">
                    {moment(user.createdAt).format("MMMM Do YYYY")}
                  </Table.Cell>
                  <Table.Cell className="text-center">{user?.name}</Table.Cell>
                  <Table.Cell className="text-center">{user?.email}</Table.Cell>
                  <Table.Cell
                    onClick={() => handleDeleteUser(user.id)}
                    className="text-center cursor-pointer font-bold text-red-600"
                  >
                    Delete
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </>
  );
};

export default User;
