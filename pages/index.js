import Layout from '../components/Layout';
import Prices from '../components/Prices';
import axios from 'axios'
const Index = ({ bpi }) => {
    return (
        <Layout>
            <div>
                <h1>Latest Bitcoin Prices</h1>
                <Prices bpi={bpi} />
            </div>
        </Layout>   
    )
}

export async function getServerSideProps() {
    const res = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
    return {
        props: { bpi: res.data.bpi }
    }
}

export default Index;
