import React from 'react';

export default function App() {
  const [text, setText] = React.useState('');
  const [textInput, setTextInput] = React.useState('');
  return (
    <div className="App">
      <div>
        <p>{text}</p>
      </div>
      <div
        role="status"
        aria-live="assertive"
        aria-atomic={true}
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          borderWidth: 0,
        }}
      >
        <p>You just said: {text}</p>
      </div>
      <input value={textInput} onChange={(e) => setTextInput(e.target.value)} />
      <button
        onClick={() => {
          setText(textInput);
          setTextInput('');
        }}
      >
        Submit
      </button>
    </div>
  );
}
