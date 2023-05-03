import { useState } from "react"




const Vista = () => {

    const [darkMood, setDarkmood] = useState(false);

    const changeMode = () => {
        setDarkmood(!darkMood);
    }

    const style = darkMood ? "oscuro" : "claro"

    return (
        <div className="">

            <button onClick={changeMode}>Change mode</button>
            <h2>Mood</h2>
            
        </div>
        
    )
}