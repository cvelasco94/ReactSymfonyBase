import React, {useState} from "react";
import Button from "../buttons/Button";
// Import Form Handlers
import useForm from "./useForm";

const Form = () => {  
    const {handleChange, handleSubmit, values, query} = useForm(getGiphys);
    const [queryResults, setQueryResults] = useState([]);

    async function getGiphys() {
        try {
            const urlSearchEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=DMYpn2EZH2X8K7XdX5UHjVMuQnFZEztX&q=${query}&limit=50&offset=0&rating=g&lang=es`;
            const fetchSearchQuery = await fetch(
                urlSearchEndpoint
            );
            const searchQueryJsonResponse = await fetchSearchQuery.json();
            setQueryResults(
                searchQueryJsonResponse.data.map(item => {
                    return item.images.preview.mp4;
                })
            );
        } catch (error) {
            alert('An error has ocurred! Try again!')
        }
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Giphy Type: </label>
                    <input type="text" name="giphyType" onChange={handleChange} value={values}/>
                </div>
                <div className="botones-avaibook">
                    <Button buttonType="submit" buttonId="btnGetGiphys" buttonClass="btn btn-primary" buttonName="Search for giphys"/>
                </div>
            </form>
            <div className="giphyResultsList">
                <div className="container">
                    <div className="row">
                        {queryResults && queryResults.map(item => (<div className="col-sm-3 my-3" key={item} ><video autoPlay loop key={item} src={item} width="250px" height="250px"/></div>))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;