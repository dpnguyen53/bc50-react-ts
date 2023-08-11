interface Props {
  name: string;
  price: number;
  handleAlertName: (name: string) => void;
  handleHidden: () => void;
  handleShow: () => void;
}

export default function Product(props: Props): JSX.Element {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.price}$</p>
      <button onClick={() => props.handleAlertName(props.name)}>
        ALERT NAME
      </button>
      <button onClick={() => props.handleHidden()}>HIDDEN</button>
      <button onClick={() => props.handleShow()}>SHOW</button>
    </div>
  );
}
