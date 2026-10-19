import { useState } from "react";

const sample = [
  { id: 1, text: "HTML 연습" },
  { id: 2, text: "CSS 복습" },
  { id: 3, text: "자바스크립트이해" },
  { id: 4, text: "리액트프로젝트" },
];

const ToDoSample = () => {
  const [todoData, setTodoData] = useState(sample); // 상태관리 (렌더링 조건을 만들기 위해서 사용)
  const [inputText, setInputText] = useState(""); // 입력에 대한 상태 관리
  const [nextId, setNextId] = useState(5); // id 증가에 대한 상태 관리

  const onClick = () => {
    const nextTodos = [...todoData, { id: nextId, text: inputText }];
    setNextId(nextId + 1); // id를 1 증가 시킴
    setTodoData(nextTodos);
    setInputText(""); // input 창을 지워 줌
  };

  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={onClick}>추가</button>
      <ul>
        {todoData && todoData.map((todo) => <li key={todo.id}>{todo.text}</li>)}
      </ul>
    </>
  );
};

export default ToDoSample;
