"use client";
import React, { useEffect } from "react";
import DashboardContant from "../../components/Admin/DashboardContant/DashboardContant";
import { useSession } from "next-auth/react";

const getNews = async (token: any) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST_URL}/news/unpublish`,
    {
      cache: "no-cache",
      headers: {
        authorization: `${token}`,
      },
    }
  );
  const news = await response.json();
  return news;
};

const getUser = async (token: any) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/user`, {
    cache: "no-cache",
    headers: {
      authorization: `${token}`,
    },
  });
  const users = await response.json();

  return users;
};

const getComment = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/comment`, {
    cache: "no-cache",
  });
  const comment = await response.json();
  return comment;
};

const Dashboard: React.FC = () => {
  const { data: session, status }: any = useSession();
  const [data, setData] = React.useState<{
    news: any;
    user: any;
    comment: any;
  } | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const news = session?.user?.token
        ? await getNews(session.user.token)
        : null;
      const comment = await getComment();
      const user = session?.user?.token
        ? await getUser(session.user.token)
        : null;
      setData({
        news: news?.data || null,
        user: user?.data || null,
        comment: comment.data,
      });
    };
    fetchData();
  }, [session]);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <DashboardContant
        news={data.news}
        user={data.user}
        comment={data.comment}
      />
    </div>
  );
};

export default Dashboard;
