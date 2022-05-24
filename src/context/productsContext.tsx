import axios from "axios"
import { createContext, useState } from "react"
import { useSearchParams } from "react-router-dom"

export const ProductsContext = createContext<any>(undefined)
const { Provider } = ProductsContext

const ProductsProvider = ({children}: any) => {

    const API_URL: string = "http://localhost:3001/";
    const API_ENDPOINT: string = "api/items/";

    const [term, setTerm] = useState<string | null>("");
    const [searchParams] = useSearchParams()

    const getProductsList = async (term: string) => {
        const endpoint = API_URL + API_ENDPOINT + 'search'
        try {
            const response = await axios.get(endpoint, {
                params: {
                    q: term
                }
            })
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    const setSearchTerm = (newTerm: string) => {
        setTerm(newTerm)
        return term;
    }

    const getSearchTerm = () => {
        const param = searchParams.get('q');
        if (param !== "" && param) {
            setTerm(searchParams.get('q'))
        }
        return term;
    }

    const getProductDetails = async(id:string) => {
        const endpoint = API_URL + API_ENDPOINT + id
        try {
            const response = await axios.get(endpoint)
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    const productMethods = {
        getProductsList,
        getProductDetails,
        setSearchTerm,
        getSearchTerm
    }


    return (
        <Provider value={productMethods}>
            {children}
        </Provider>
    )
}

export default ProductsProvider