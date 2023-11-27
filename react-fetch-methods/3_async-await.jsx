/* Use async-await method tp fetch API data, remove .then() callbacks 
and return resolved data asynchronously.
In the async block, use await() to wait for promise.. */

function App() {
    useEffect(() => {
        (async () => {
            try {
                const result = await axios.get('https://apisource.com');
                console.log(result.data);
            } catch(error) {
                console.log(error)
            }
        })()
    })
    return <div>Fetched data via async-await.</div>
}