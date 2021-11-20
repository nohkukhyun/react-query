import React, { useState } from "react";
import { useMutation } from "react-query";

interface IPostState {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

const Posts = () => {
  const [postData, setPostData] = useState<IPostState>({
    userId: 0,
    id: 0,
    title: "",
    body: "",
  });
  const [successMsg, setSuccessMsg] = useState<string>("");
  const createPostData = async (data: IPostState) => {
    const res: any = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  };

  const { mutate, isLoading } = useMutation(createPostData, {
    onSuccess: (data) => {
      const msg = "포스트 서브밋 완료";
      setSuccessMsg(msg);
    },
    onError: (error) => {
      console.log("error", error);
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, name },
    } = event;

    setPostData(() => ({
      ...postData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    mutate(postData);
  };

  const loading = isLoading && <h3>Loading...</h3>;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 50,
        rowGap: 10,
      }}
    >
      {loading}
      <input onChange={handleChange} name="userId" placeholder="userId" />
      <input onChange={handleChange} name="title" placeholder="title" />
      <input onChange={handleChange} name="body" placeholder="body" />
      <button onClick={handleSubmit}>submit</button>
      {successMsg}
    </div>
  );
};

export default Posts;
