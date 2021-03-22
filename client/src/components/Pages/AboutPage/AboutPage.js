import React from 'react'

const GithubLink = () => {
    return (
        <>
            <a style={{ color: 'yellow', textDecoration: 'none' }}
                href="https://github.com/ariel-weiss/recipe-app">
                github page &nbsp;
                <img style={{verticalAlign: 'middle'}} width="30" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/64px-Octicons-mark-github.svg.png"/>
            </a>
        </>
    )
}


const AboutPage = () => {
    return (
        <div>
            <h1 style={{ color: 'white' }}>About</h1>
            <h2 style={{ color: 'lightblue' , textShadow: '1px 2px rgba(0,0,0, 1)'}}>In this app you can search for awesome recipes by your favorite ingredients, and save them for later use.</h2>
            <h2 style={{ color: 'lightblue', textShadow: '1px 2px rgba(0,0,0, 1)' }}>Check out the <GithubLink/> </h2>
        </div>
    )
}

export default AboutPage
