"use client";
import moment from "moment";
import { Table } from "flowbite-react";
import React, { useState } from "react";
import { customToast } from "../../CustomToast";
import { useSession } from "next-auth/react";

interface users {
  name: String;
  email: string;
  password: string;
  createdAt: string;
  id: string;
  isAdmin: string;
}

interface prope {
  users: users[];
}

const User: React.FC<prope> = ({ users }) => {
  const [user, setUser] = useState(users);
  const { data: session }: any = useSession();
  const handleDeleteUser = async (id: any) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_URL}/user/deleteUser/${id}`,
        {
          method: "DELETE",
          cache: "no-cache",
          headers: {
            authorization: `${session.user.token}`,
          },
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
            <Table.HeadCell className="text-center">IsAdmin</Table.HeadCell>
            <Table.HeadCell className="text-center">Email</Table.HeadCell>
            <Table.HeadCell className="text-center">Delete</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {user &&
              user.map((user) => {
                return (
                  <Table.Row key={user.id}>
                    <Table.Cell className="text-center">
                      {moment(user.createdAt).format("MMMM Do YYYY")}
                    </Table.Cell>
                    <Table.Cell className="text-center">
                      {user?.name}
                    </Table.Cell>
                    <Table.Cell className="text-center flex items-center justify-center ">
                      {user?.isAdmin ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-red-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                    </Table.Cell>
                    <Table.Cell className="text-center">
                      {user?.email}
                    </Table.Cell>
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
