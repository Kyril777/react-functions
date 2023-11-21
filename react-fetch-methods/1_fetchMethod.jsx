/* Use fetch() method to request to server and load information. Method returns a promise. Request can only return data in JSON format or XML. */
function App() {
    useEffect(() => {
        fetch('https://apisource.com')
        .then(response => response.json())
        .then(json => console.log(json))
    }, []);

    return (
        <div>Fetched JSON data</div>
    );
}