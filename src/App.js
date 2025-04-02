import { useState } from 'react';
import './App.css';
import RockImage from './images/rock.png';
import ScissorsImage from './images/scissors.png';
import PaperImage from './images/paper.png';
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
    img:RockImage
  },
  scissors:{
    name:"Scissors",
    img:ScissorsImage   
  },
  paper:{
    name:"Paper",
    img:PaperImage
  }
}
function App() {

  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState("")

  const play=(userChoice)=>{
    setUserSelect(choice[userChoice]);

    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)

    setResult(judgement(choice[userChoice], computerChoice))

  };

  const judgement = (user, computer) => {
    if(user.name === computer.name){
      return "TIE"
    }
    else if(user.name === "Rock"){
      return computer.name === "Scissors" ? "WIN" : "LOSE"
    } else if(user.name === "Scissors") {
      return computer.name === "Paper" ? "WIN" : "LOSE"
    } else if(user.name === "Paper") {
      return computer.name === "Rock" ? "WIN" : "LOSE"
    }
  }

  const randomChoice = () =>{
    let itemArray = Object.keys(choice)
    let randomItem = Math.floor(Math.random() * itemArray.length)

    let final = itemArray[randomItem]
    return choice[final]

  }

  return (
    <div className="mainBox">
      <div className="main">
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className="button">
        <img onClick={()=>play("scissors")} className="buttonImage" src={ScissorsImage}></img>
        <img onClick={()=>play("rock")} className="buttonImage" src={RockImage}></img>
        <img onClick={()=>play("paper")} className="buttonImage" src={PaperImage}></img>
      </div>
    </div>
  );
}

export default App;
