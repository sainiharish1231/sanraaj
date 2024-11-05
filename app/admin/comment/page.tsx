import Comments from "@/app/components/Admin/Comments/Comments";

const getComment = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/comment`, {
    cache: "no-cache",
  });
  const comment = await response.json();
  return comment;
};

const comment = async () => {
  const comments = await getComment();
  return (
    <>
      <div>
        <Comments comments={comments.data} />
      </div>
    </>
  );
};

export default comment;
