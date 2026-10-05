import './Button.css';

function Button(props) {
  return (
    <button onClick={props.onClick} style={props.style} type={props.type}>
      {props.text}
    </button>
  );
}

export default Button;