import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myMoney, setMyMoney] = useState(0);
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        setSelected(json[0].quotes.USD.price);
      });
  }, []);

  const onChange = (e) => {
    console.log(e.target.value);
    setMyMoney(e.target.value);
  };
  console.log(selected);
  const onSelect = (e) => {
    console.log(e);
    setSelected(e.target.value);
  };
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <input
        onChange={onChange}
        value={myMoney}
        type="number"
        placeholder="money"
      />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onSelect} value={selected}>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
      <h3>by BTC {myMoney / selected}</h3>
    </div>
  );
}

export default App;
