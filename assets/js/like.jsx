import * as React from 'react'
import * as ReactDOM from 'react-dom/client';

// A simple React JSX component.
class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }
  
    render() {
      if (this.state.liked) {
        return 'You liked this!';
      }
  
      return (
        <button onClick={() => this.setState({ liked: true }) }>
          Like?
        </button>
      );
    }
  }
  

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(<LikeButton />);
