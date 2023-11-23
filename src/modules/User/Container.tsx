import React from "react";
import { IResponse, IUser } from "./Types";
import useAxios from "@/hooks/useAxios";
import Card from "./Card";
import Button from "@/components/Button";

const UserContainer = () => {
  const {
    data,
    error,
    loading,
    refetch: fetchUser,
  } = useAxios<IResponse>({
    url: "/",
  });
  const user: IUser | null =
    data?.results && data?.results.length > 0 ? data?.results[0] : null;
  if (!user || !!error) {
    return <p>User not found!</p>;
  }

  const userData = data?.results[0];
  return (
    <div className="flex flex-col gap-4 items-center">
      {userData && <Card data={userData} />}
      <Button type="button" isLoading={loading} onClick={fetchUser} />
    </div>
  );
};

export default UserContainer;
