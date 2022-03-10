import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const getDF = async (text) => {
    console.log(text);
    const json = await (
      await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.neople.co.kr/df/servers/anton/characters?characterName=${text}&apikey=3ZJOnzvz1XN7513uG4IGBKZzqRRKoa2s`
      )
    ).json();

    console.log(json.rows[0]);
    setName(json.rows[0].jobGrowName);
  };
  // useEffect(() => {
  //   getDF();
  // }, []);

  const onChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const onClick = (e) => {
    console.log(e);
    getDF(text);
  };

  return (
    <>
      <input type="text" value={text} onChange={onChange} />
      <button onClick={onClick}>검색</button>
      <h1>{name}</h1>
    </>
    // <Router>
    //   <Switch>
    //     <Route path="/movie/:id">
    //       <Detail />
    //     </Route>
    //     <Route path="/">
    //       <Home />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

export default App;

// Route는 URL을 의미하고
// Route를 찾으면 컴포넌트를 렌더링한다.
// Browser Router는 예상하는대로 생겼다.(보통의 웹사이트처럼)
// HashRouter는 /#/dsadasda 이런식으로 생김
// Switch는 한 번에 한 번만 렌더링하기 위해
// Link는 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트

// 끝
