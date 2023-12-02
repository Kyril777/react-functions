/* Use React's query library.  */
import axios from 'axios'
import { useQuery } from 'react-query'

function App() {
    const { isLoading, error, data } = 
    useQuery('posts', () => axios('https://apisource.com'))
    console.log(data)
    return <div>Fetching data using React's query library.</div>
}