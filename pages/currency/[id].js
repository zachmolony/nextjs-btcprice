import Layout from '../../components/layout'
import axios from 'axios';

export default function Post({ data }) {
    return (<Layout>
        <div class="card border-light mb-3" style={{'max-width': '20rem'}}>
            <div class="card-header">{data.code}</div>
            <div class="card-body">
                <h4 class="card-title">{data.description}</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </Layout>)
}

export async function getStaticPaths() {
    const paths = [{params: {id: 'GBP'}},{params: {id: 'USD'}},{params: {id: 'EUR'}},]
    return {
      paths,
      fallback: false
    }
  }

  export async function getStaticProps({ params }) {
    const res = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
    return {
        props: { data: res.data.bpi[params.id] }
    }
  }