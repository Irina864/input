import './Form.css';
import { useState } from 'react';

function Form() {
  const [text, setText] = useState('');
  const [editedText, setEditedText] = useState(text);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditedText(text.toLocaleUpperCase());
    setText('');
  };

  return (
    <main className="main">
      <form onSubmit={handleSubmit} className="form">
        <input
          className="input"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <input className="submit" type="submit" value="Submit" />
      </form>
      <p className="text">{editedText}</p>
    </main>
  );
}

export default Form;
