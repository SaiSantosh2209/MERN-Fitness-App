import {Link}  from 'react-router-dom' //importing the link conponents from react router dom 

const Navbar = () =>{
    

    return (
        <header>
            <div className="container">
           <Link to="/">
            <h1>⚡Workout Trainer⚡</h1>
           </Link>
            </div>
        </header>
    )
}

export default Navbar