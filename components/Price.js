const Price = ({ bpi, currency }) => {
    return (
        <li className="list-group-item">
            Bitcoin rate for {currency}
            : <span className="badge badge-primary">{bpi[currency].code}</span> <strong>{bpi[currency].rate}</strong>
        </li>
    )
}

export default Price;
