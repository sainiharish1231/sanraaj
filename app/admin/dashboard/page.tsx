import React from "react";
import DashboardContant from "../../components/Admin/DashboardContant/DashboardContant";

const getNews = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/news`, {
    cache: "no-cache",
  });
  const news = await response.json();
  return news;
};

const getUser = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/user`, {
    cache: "no-cache",
  });
  const user = await response.json();

  return user;
};

const getComment = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/comment`, {
    cache: "no-cache",
  });
  const comment = await response.json();
  return comment;
};

async function Dashboard() {
  const news = await getNews();
  const user = await getUser();
  const comment = await getComment();
  return (
    <div>
      <DashboardContant
        news={news.data}
        user={user.data}
        comment={comment.data}
      />
    </div>
  );
}

export default Dashboard;
