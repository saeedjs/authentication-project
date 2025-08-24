const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetchUserData = async () => {
  const res = await fetch(`${apiUrl}/api/?results=1&nat=us`);

  if (!res.ok) {
    throw new Error("خطا در دریافت اطلاعات کاربر!");
  }

  const data = await res.json();
  return data?.results[0];
};
