import { useEffect, useState } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [usd, setUsd] = useState(0);

  const onChange = (event) => {
    setUsd(event.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <div>
            <label>USD</label>
            <input
              onChange={onChange}
              type="number"
              value={usd}
              placeholder="USD"
            />
          </div>
          <hr />

          <select id="coinOption">
            {coins.map((coin) => (
              <option key={coin.id}>
                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD / [
                {Math.round(usd / coin.quotes.USD.price)} {coin.symbol} 구매
                가능]
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default App;
