import User from "@/app/components/Admin/User/User";

const getAllUser = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/user`, {
    cache: "no-cache",
  });

  const result = await response.json();
  return result;
};

const user = async () => {
  const user = await getAllUser();
  return (
    <>
      <div>
        <User users={user.data} />
      </div>
    </>
  );
};

export default user;
