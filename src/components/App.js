import React from "react";
import Card from "./Card";
function App() {
    return (
        <div>
            <h1 className="heading">Modern Best Posts</h1>


            <Card name="The Social Network"
                  imgURL="https://images.unsplash.com/photo-1720983590448-28b749bd403d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  liked="90% ❤️"
                  year="October 1, 2010"

            />
        </div>
    );
}

export default App;
