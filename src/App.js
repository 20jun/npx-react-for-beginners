import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// Route는 URL을 의미하고
// Route를 찾으면 컴포넌트를 렌더링한다.
// Browser Router는 예상하는대로 생겼다.(보통의 웹사이트처럼)
// HashRouter는 /#/dsadasda 이런식으로 생김
// Switch는 한 번에 한 번만 렌더링하기 위해
// Link는 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트
