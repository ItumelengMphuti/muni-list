import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/footer'
import Link from 'next/link'

export default function Home() {
  
  return (
    <>
      <Head>
        <title> Muni List | Home</title>
        <meta name="keywords" content="munis"/>
      </Head>
        <div>
        
          <h1 className={styles.title}>Homepage</h1>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
          <Link href="/muni" className={styles.btn}>
            See Muni Listing
          </Link>
          
        </div>
    </>
  )
}