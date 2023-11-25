/* Use axios library to send asynchronous HTTP request to REST 
APIs to CRUD operations. */

function App() {

    useEffect(() => {
        axios.get('https://apisource.com')
            .then((response) => console.log(response.data));
    }, []);

    return (
        <div>
            Multiple fetch data methods.
        </div>
    );
}