import React, { useState } from 'react';

const omikujiResults = ['大吉', '中吉', '小吉', '吉', '末吉', '凶', '大凶'];

const getResultStyle = (result: string | null) => {
  switch (result) {
    case '大吉': return { color: 'red', emoji: '🎉' };
    case '中吉': return { color: 'orange', emoji: '😊' };
    case '小吉': return { color: 'goldenrod', emoji: '😌' };
    case '吉': return { color: 'green', emoji: '🙂' };
    case '末吉': return { color: 'blue', emoji: '🤔' };
    case '凶': return { color: 'gray', emoji: '😱' };
    case '大凶': return { color: 'black', emoji: '💀' };
    default: return { color: 'black', emoji: '' };
  }
};

const App: React.FC = () => {
  const [result, setResult] = useState<string | null>(null);

  const drawOmikuji = () => {
    const randomIndex = Math.floor(Math.random() * omikujiResults.length);
    setResult(omikujiResults[randomIndex]);
  };

  const resultStyle = getResultStyle(result);

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: 'pink' }}>おみくじアプリ</h1>
      <button onClick={drawOmikuji}>
        おみくじを引く❤️
      </button>
      {result && (
        <div style={{ animation: 'fadeIn 1s', color: resultStyle.color, fontSize: '24px' }}>
          結果: <strong>{result}</strong>{resultStyle.emoji}
          <br />
          <button
            onClick={() => setResult(null)}
            style={{ marginTop: '10px' }}
          >
            もう一度引く
          </button>
        </div>
      )}
      {result && (
        <div>
          結果: <strong>{result}</strong>
        </div>
      )}
    </div>
  );
};

export default App;