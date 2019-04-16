import React from "react";

function Welcome(props) {
    return (
        props.visible && (
            <div className="welcome">
                <h1>Welcome to Joe's Google Books API!</h1>
                <h3>Start searching for a book by typing something in the field on top.</h3>
            </div>
        )
    )
}

export default Welcome