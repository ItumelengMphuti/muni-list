export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(muni => {
      return {
        params: { id: muni.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
  
    return {
      props: { muni: data }
    }
  }
  
  const Details = ({ muni }) => {
    return (
      <div>
        <h1>{ muni.name }</h1>
        <p>{ muni.email }</p>
        <p>{ muni.website }</p>
        <p>{ muni.address.city }</p>
      </div>
    );
  }
  
  export default Details;