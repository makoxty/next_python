import React, { useEffect, useState } from "react";
import axios from "axios";

const Crud = () => {
  const [posts, setPosts] = useState();
  const getApiData = () => {
    axios
      .get("http://localhost:8000/api/hedgehogs/")
      .then((response) => {
        setPosts(response.data);
      })
      .catch(() => {
        console.log("通信に失敗しました");
      });
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div>
      <p>responseデータ</p>
      <p>{posts}</p>
    </div>
  );
};

export default Crud;
