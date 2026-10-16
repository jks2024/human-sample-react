// 테이블 요소에 이벤트 추가하기
// 아이디, 이름, 나이, 주소로 구성된 배열 5개 생성
import { useState, useEffect } from "react";
import "./App.css";

const rowData = [
  { id: 100, name: "카즈하", age: 23, addr: "오사카" },
  { id: 100, name: "안유진", age: 23, addr: "대전" },
  { id: 100, name: "장원영", age: 22, addr: "서울" },
  { id: 100, name: "유나", age: 23, addr: "수원" },
  { id: 100, name: "이서", age: 20, addr: "인천" },
];

const Table = () => {
  const [members, setMembers] = useState("");

  useEffect(() => {
    // 서버에 대한 데이터를 비동기로 요청함
    setMembers(rowData);
  }, []); // [] 마운트 시점을 의미 함

  return (
    <table>
      <tr>
        <th>이름</th>
        <th>나이</th>
        <th>주소</th>
      </tr>

      {members &&
        members.map((member) => (
          <tr key={member.id} onClick={() => alert(member.name)}>
            <td>{member.name}</td>
            <td>{member.age}</td>
            <td>{member.addr}</td>
          </tr>
        ))}
    </table>
  );
};

export default Table;
