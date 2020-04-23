import { useState } from 'react'
import axios from 'axios'
import Price from './Price'
import Link from 'next/link'

const Prices = ({ bpi }) => {
    const [state, setState] = useState(['GBP', 'USD', 'EUR'])
    return (
        <div>
            <ul className="list-group">
                {state.map(currency => (
                    <Link href={`/currency/${currency}`}><a href=""><Price key={currency} bpi={bpi} currency={currency} /></a></Link>
                ))}
            </ul>
        </div>
    )
}



export default Prices;
