import React from "react";

function App() {
    return (
        <div>
            <h1 className="heading">Modern Best Posts</h1>
            <div className="card">
                <div className="top">
                    <h2>The Social Network</h2>
                    <img
                        className="image__class"
                        src="https://images.unsplash.com/photo-1720983590448-28b749bd403d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="image"
                    />
                </div>
                <div className="bottom">
                    <p>90% ❤️</p>
                    <p>October 1, 2010</p>
                </div>
            </div>
        </div>
    );
}

export default App;
