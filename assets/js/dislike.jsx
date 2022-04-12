import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// A simple React JSX component.
function DislikeButton(props) {
  const [disliked, setDisliked] = useState(false);

  if (disliked) {
    return 'You disliked this!';
  }

  return (
    <button onClick={() => setDisliked(true) }>
      Dislike?
    </button>
  );
}

const domContainer = document.querySelector('#dislike_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(<DislikeButton />);
