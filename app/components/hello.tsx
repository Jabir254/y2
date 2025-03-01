"use client";

function Hello() {
    console.log('client only')

    return (
        <div>
            <h1 className="text-3xl text-center">Hello from the client</h1>
            <p>Only runs on the client</p>
            </div>
    )
    
}

export default Hello;