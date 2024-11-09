export async function fetchCommentData(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST_URL}/comment/${id}`,
      {
        cache: "no-store",
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const responseData = await response.json();
    if (!responseData.data) {
      console.log("Response does not contain 'data'. Full response:");
    }

    return responseData.data || null; // Return the data or null if it's not present
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export async function fetchLikeData(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST_URL}/like/${id}`,
      {
        cache: "no-store",
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const responseData = await response.json();
    if (!responseData) {
      console.log("Response does not contain 'data'. Full response:");
    }

    return responseData.data || null; // Return the data or null if it's not present
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
