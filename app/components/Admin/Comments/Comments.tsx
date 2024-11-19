"use client";
import moment from "moment";
import { Table } from "flowbite-react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { customToast } from "../../CustomToast";

interface comments {
  content: string;
  userId: string;
  newsId: string;
  createdAt: string;
  id: string;
}
interface prope {
  comments: comments[];
}

const Comments: React.FC<prope> = ({ comments }) => {
  const [allComments, setAllComments] = useState(comments);
  const { data: user }: any = useSession();
  const handleDeleteComment = async (id: any) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST_URL}/comment/${id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `${user.token}`,
        },
      }
    );
    const result = await response.json();
    if (response.ok) {
      const comments = allComments.filter((c: any) => c.id !== id);
      setAllComments(comments);
      customToast("Comment Delete Successfully", "success");
    }
  };

  return (
    <>
      <div>
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell className="text-center">
              Date Updated
            </Table.HeadCell>
            <Table.HeadCell className="text-center">
              Comment Content
            </Table.HeadCell>

            <Table.HeadCell className="text-center">Post Id</Table.HeadCell>
            <Table.HeadCell className="text-center">User Id</Table.HeadCell>
            <Table.HeadCell className="text-center">Delete</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {allComments.map((comment) => {
              return (
                <Table.Row>
                  <Table.Cell className="text-center">
                    {moment(comment.createdAt).format("MMMM Do YYYY")}
                  </Table.Cell>
                  <Table.Cell className="text-center">
                    {comment.content}
                  </Table.Cell>

                  <Table.Cell className="text-center">
                    {comment.newsId}
                  </Table.Cell>
                  <Table.Cell className="text-center">
                    {comment.userId}
                  </Table.Cell>
                  <Table.Cell
                    className="text-center cursor-pointer font-bold text-red-600"
                    onClick={() => handleDeleteComment(comment.id)}
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

export default Comments;
