const Price = ({ bpi, currency }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center my-1">
            <h5 className="my-1" style={{'marinBottom': "none"}}>
                Bitcoin rate for {currency}
                : <span className="badge badge-info">{bpi[currency].code}</span></h5>
                
                <strong>{bpi[currency].rate}</strong>
        </li>
    )
}

export default Price;
