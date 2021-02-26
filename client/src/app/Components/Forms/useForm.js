import {useState, useEffect} from "react";

const useForm = (callback) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [query, setQuery] = useState('');
    
    const handleChange = e => {
        const value = e.target.value;
        setSearchQuery(
            value
        );
    };

    const handleSubmit = e => {
        e.preventDefault();
        setQuery(searchQuery);
    };

    useEffect(() => {
        if (query !== '') {
            callback();
        }        
    }, [query]);

    return {
        handleChange,
        handleSubmit,
        searchQuery,
        query
    };
};

export default useForm;