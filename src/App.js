import { useState } from 'react';
import './App.css';
import Box from './component/Box';


// 1. box 2개 - 타이틀, 사진정보, 결과
// 2. 가위 바위 보 버튼
// 3. 버튼 클릭 시 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 됨
// 5. 3,4의 결과를 가지고 누가 이겼는지 승패 보여줌
// 6. 승패 결과에 따라 테두리 색이 변경됨(이기면 초록, 지면 빨강, 비기면 검정)

const choice = {
  rock:{
    name:"Rock",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt_7ioYr9T6uh35rT46Z_cyNVtMM_SgbHppA&s"
  },
  scissors:{
    name:"Scissors",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO7LPjgUFUbWwESJK-aGZlpWXHd7w3Tpv8-A&s"    
  },
  paper:{
    name:"Paper",
    img:"https://i.ebayimg.com/images/g/G5kAAOSwmoRexd9C/s-l1600.webp"
  }
}
function App() {

  const [userSelect, setUserSelect] = useState(null)

  const play=(userChoice)=>{
    setUserSelect(choice[userChoice]);

    console.log("선택됨", userChoice);
  }
  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect}/>
        {/*<Box title="Computer" />*/}
      </div>
      <div className="main">
        <button onClick={()=>play("scissors")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
