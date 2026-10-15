import "./App.css";
import WelcomeProp from "./WelcomeProp";

function App() {
  return (
    // 화면을 그려 주는 구간
    <>
      <WelcomeProp name="곰돌이" gender="남성" age={23} addr="천안시" />
      <WelcomeProp name="장원영" gender="여성" age={23} addr="천안시" />
      <WelcomeProp name="안유진" gender="여성" age={23} addr="천안시" />
      <WelcomeProp />
    </>
  );
}

export default App;
