const axios = require("axios");
import Link from "next/link";
import { useRouter } from "next/router";

import { Input, Dropdown, Button } from "semantic-ui-react";
import React, { useRef } from "react";
import Cookies from "js-cookie";
import * as Showdown from "showdown";
import ReactMde from "react-mde";

import "react-mde/lib/styles/css/react-mde-all.css";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

export default function postEdit() {
  const router = useRouter();
  const categoryReference = useRef();

  const titleReference = useRef();
  const [value, setValue] = React.useState("**Hello world!!!**");
  const [selectedTab, setSelectedTab] =
    React.useState<"write" | "preview">("write");

  const submit = (event) => {
    const category =
      (categoryReference.current as HTMLInputElement).value == undefined
        ? 0
        : (categoryReference.current as HTMLInputElement).value;
    const title =
      (titleReference.current as HTMLInputElement).value == undefined
        ? 0
        : (titleReference.current as HTMLInputElement).value;

    const content = value;
    const user = Cookies.get("user");

    if (title == 0) {
      alert("최소 한글자 이상의 제목을 입력해야 합니다");
    } else if (category == 0) {
      alert("카테고리를 선택해야 합니다");
    } else {
      axios
        .post("/api/postEdit", null, {
          params: {
            title: title,
            content: content,
            category: category,
            user: user,
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      router.push("/postList");
    }
  };

  const handleDropDownSelect = (event, data) => {
    (categoryReference.current as HTMLInputElement).value = data.value;
  };
  const handleTitleInput = (event, data) => {
    (titleReference.current as HTMLInputElement).value = data.value;
  };
  const options = [
    { key: 1, text: "일기", value: "diary" },
    { key: 2, text: "리뷰", value: "review" },
    { key: 3, text: "TIL", value: "til" },
  ];

  return (
    <>
      <h1>글 작성/수정</h1>

      <form>
        <div className="category">
          <Dropdown
            clearable
            options={options}
            selection
            onChange={handleDropDownSelect}
            ref={categoryReference}
          />
        </div>
        <div className="title">
          <Input
            ref={titleReference}
            type="text"
            id="title"
            minLength={1}
            maxLength={13}
            onChange={handleTitleInput}
            transparent
            placeholder="제목을 입력하세요"
          />
        </div>
        <div className="content">
          <ReactMde
            value={value}
            onChange={setValue}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={(markdown) =>
              Promise.resolve(converter.makeHtml(markdown))
            }
          />
        </div>

        <Button primary onClick={submit} type="button">
          저장
        </Button>

        <Link href="postList">
          <Button secondary type="button">
            취소
          </Button>
        </Link>
      </form>
    </>
  );
}
