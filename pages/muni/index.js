import Link from 'next/link';
import styles from '../../styles/munis.module.css'

export const getStaticProps = async () => {

const res = await fetch('https://jsonplaceholder.typicode.com/users')
const data = await res.json();

return {
  props: { munis: data }
}

}


const Munis = ({ munis }) => {
    return (
      <div>
        <h1>All Munis</h1>
        { munis.map(muni =>(
          <Link href={'/muni/' + muni.id} key={muni.id} className={styles.single}>
           
              <h3>{ muni.name }</h3>
            
          </Link>
        ))}
      </div>
    );
  }
   
  export default Munis;