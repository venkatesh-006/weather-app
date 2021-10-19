import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';
import "./Input.css";

const Inputer = ({input,setInput,findweather}) => {
    const handleChange=(event)=>{
        setInput(event.target.value)
    }
    const handleClick=(event)=>{
        event.preventDefault();
        findweather()
    }

    return (
        <div className="InputBox">
            <div className="InputBox__field">
                <h1>Google Weather App</h1>
                <p>powered by</p>
                <img src="logo.99.jfif" alt="logo"></img>
                <form>
                <Input placeholder="Enter the city name" onChange={handleChange} ></Input>
                <br />
                <Button variant="contained" color="primary"type="submit" onClick={handleClick}>
                    search
                </Button>
                </form>

                
            </div>
            
        </div>
    )
}

export default Inputer;
