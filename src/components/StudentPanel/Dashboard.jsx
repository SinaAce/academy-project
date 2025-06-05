import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

const Dashboard = () => {
  const { userInfo } = useOutletContext();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userInfo) {
      setLoading(false);
    }
  }, [userInfo]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="whitetext flex flex-col gap-3">
      <span>fname : {userInfo.fName}</span>
      <span>lname : {userInfo.lName}</span>
      <span>number : {userInfo.phoneNumber}</span>
      <span>user about : {userInfo.userAbout}</span>
      <span>gender : {userInfo.gender ? "مرد" : "زن"}</span>
    </div>
  );
};

export default Dashboard;
