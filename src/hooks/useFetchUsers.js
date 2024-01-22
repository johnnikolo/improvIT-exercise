import { useEffect, useState } from "react";
import axios from "axios";

const API_ENDPOINT = "http://jsonplaceholder.typicode.com/users";

const useFetchUsers = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(API_ENDPOINT);
                setData(response);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    return {
        data,
        loading,
    };
};

export default useFetchUsers;
