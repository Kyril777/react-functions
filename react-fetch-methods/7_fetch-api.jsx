// Add a state to put the data in once it's fetched. 
// Add a useEffect function to use the fetch API.

const URL = 'https//spwapi.dev/api/people/1';

export default function App() {
    const [results, setResults] = useState([]);
    const controller = new AbortController();
    
    useEffect(() => {
        async function retrieveData() {
            const response = await fetch(URL);
            const data = await response.json();
            setResults(data);
        }

        retrieveData();

        console.log(results);

        return () => {
            controller.abort();
        }
    }, [])

    return (
        <h1>Hola mundo!</h1>
    )
}