export default function BaskeItem(props) {
    const {id, name, price , quantity, incrementQuantity, decrementQuantity} = props

    return (
        <li className="collection-item ">
        {name} x {quantity} = {price * quantity} <b>$</b>
        <span className="secondary-content">

        <a  className="waves-effect waves-light btn btnq testcss" onClick={() => incrementQuantity(id)}>
            <i className="material-icons left blurcss">exposure_plus_1</i>
        </a>

        <a className="waves-effect waves-light btn btnq mar testcss" onClick={() => decrementQuantity(id)}>
            <i className="material-icons left blurcss">exposure_minus_1</i>
        </a>

        <i className="material-icons basket-delete" onClick={() => props.removeFromBasket(id)} >send</i>
        </span>
        </li>
    )
} 