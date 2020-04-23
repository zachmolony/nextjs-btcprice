import Head from 'next/head';
import Navbar from './Navbar';
import styles from './layout.module.css'

const Layout = ({ children }) => (
    <div>
        <Head>
            <title>BTC Monitor</title>
            <link rel="shortcut icon" href="coin.png" type="image/x-icon"/>
            <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/flatly/bootstrap.min.css" rel="stylesheet" integrity="sha384-yrfSO0DBjS56u5M+SjWTyAHujrkiYVtRYh2dtB3yLQtUz3bodOeialO59u5lUCFF" crossOrigin="anonymous" />
        </Head>
        <Navbar />
        <div className={styles.container + " container"}>
            {children}
        </div>
    </div>
)

export default Layout