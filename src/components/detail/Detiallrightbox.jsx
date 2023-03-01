import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addSchedule } from "../../axios/api";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import {
  Rightbg,
  Label,
  Input,
  Textarea,
  Box,
  RightButton,
  Rightcenter,
} from "./style";

function Detiallrightbox() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const mutation = useMutation(addSchedule, {
    onSuccess: (response) => {
      console.log(response);
      queryClient.invalidateQueries("schedule");
      console.log("성공하였습니다.");
    },
    onError: () => {
      queryClient.invalidateQueries("schedule");
      console.log("실패하셧습니다.");
    },
  });

  //작성자명
  const [author, setAuthor] = useState("");
  const userAuthorHandler = (e) => {
    setAuthor(e.target.value);
  };
  //제목
  const [title, setTitle] = useState("");
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  //내용
  const [contents, setContents] = useState("");
  const contentsHandler = (e) => {
    setContents(e.target.value);
  };

  const btnClick = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      alert("제목을 적어주세요");
      return;
    } else if (author.trim() === "") {
      alert("작성자명을 적어주세요");
      return;
    } else if (contents.trim() === "") {
      alert("내용을 적어주세요");
      return;
    }
    const newSchedule = {
      title: title,
      author: author,
      contents: contents,
      date: id,
    };

    mutation.mutate({ id, newSchedule });

    setAuthor("");
    setTitle("");
    setContents("");
  };

  return (
    <Rightbg>
      <Rightcenter onSubmit={btnClick}>
        <Box>
          <Label>작성자</Label>
          <Input
            type="text"
            placeholder="작성자를 적어주세요"
            maxLength="30"
            onChange={userAuthorHandler}
            value={author}
          />
        </Box>
        <Box>
          <Label>제목</Label>
          <Input
            type="text"
            placeholder="제목을 적어주세요"
            onChange={titleHandler}
            value={title}
            maxLength="60"
          />
        </Box>
        <Box>
          <Label>내용</Label>
          <Textarea
            placeholder="내용을 적어주세요"
            onChange={contentsHandler}
            value={contents}
            maxLength="250"
          />
        </Box>
        <RightButton>등록하기</RightButton>
      </Rightcenter>
    </Rightbg>
  );
}

export default Detiallrightbox;
