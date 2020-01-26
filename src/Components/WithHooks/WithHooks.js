import React , {useState , useEffect } from 'react'
// components
import './WithHooks.css';

function WithHooks(){

  const [ data , setData ] = useState([])
  const [ loading , setLoading ] = useState(false)

  useEffect(
     () => setLoading(true),
      fetch('https://restcountries.eu/rest/v2/all')
        .then(resp => resp.json())
        .then(data => {
          setData( data )
          return data
        })
        .catch( error => console.log(error)),
     () => setLoading(false)
  )

  // if(loading){
  //   return (
  //     <div>
  //       Loading....
  //     </div>
  //   )
  // }

  return(
    <div className='with-hooks-container'>
      <table>
        <thead>
          <th>Country</th>
          <th>Capital</th>
          <th>Population</th>
          <th>Flag</th>
        </thead>

        <tbody>
          {data.map( country =>{
            return(
              <tr key={country.name}>
                <td>{country.name}</td>
                <td>{country.capital}</td>
                <td>{country.population}</td>
                <td> <img src={country.flag} alt='flag' width='40px' /> </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default WithHooks