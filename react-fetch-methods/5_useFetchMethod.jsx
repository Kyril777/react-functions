// Import useFetch hook; pass URL of API endpoint from fetch API data source.
import useFetch from "../useFetch";

const App = () => {
    const { isLoading, serverError, apiData } = useFetch('https://apisource.com')

    return (
        <div>
            <h2>API Info</h2>
            {isLoading && <span>Loading...</span>}
            {!isLoading && serverError ? (
                <span>Error in fetch data ...</span>
            ) : (
                <span>{JSON.stringify(apiData)}</span>
            )}
        </div>
    )
}