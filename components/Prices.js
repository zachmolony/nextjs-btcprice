import { useState } from 'react'
import axios from 'axios'
import Price from './Price'

const Prices = ({ bpi }) => {
    const [state, setState] = useState(['GBP', 'USD', 'EUR'])
    return (
        <div>
            <ul className="list-group">
                {state.map(currency => (
                    <Price key={currency} bpi={bpi} currency={currency} />
                ))}
            </ul>
        </div>
    )
}



export default Prices;
