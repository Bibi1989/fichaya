import React from 'react'
import styled from 'styled-components'

const Navs = () => {
    return (
        <Nav>
            <div className="image"><img src="./images/logo.png" /></div>
            <Ul>
                <li className="active">CUSTOMERS</li>
                <li>ASSOCIATIVES</li>
                <li>QUOTES</li>
                <li>SHEDULES</li>
                <li>PAYMENTS</li>
                <li>SETTINGS</li>
            </Ul>
            <NavButtons>
                <button style={{position: 'relative'}}>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.4 12H16V13.6H0V12H1.6V6.4C1.6 4.70261 2.27428 3.07475 3.47452 1.87452C4.67475 0.674284 6.30261 0 8 0C9.69739 0 11.3253 0.674284 12.5255 1.87452C13.7257 3.07475 14.4 4.70261 14.4 6.4V12ZM5.6 15.2H10.4V16.8H5.6V15.2Z" fill="white"/>
                    </svg>
                    <svg style={{position: 'absolute', right: '8px'}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="4.79985" cy="4.39998" rx="3.2" ry="3.2" fill="#FF0000" stroke="#2E2E99" stroke-width="2"/>
                    </svg>
                </button>
                <button>
                    <svg width="16" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 22H4V20C4 18.6739 4.52678 17.4021 5.46447 16.4645C6.40215 15.5268 7.67392 15 9 15H15C16.3261 15 17.5979 15.5268 18.5355 16.4645C19.4732 17.4021 20 18.6739 20 20V22ZM12 13C11.2121 13 10.4319 12.8448 9.7039 12.5433C8.97595 12.2417 8.31451 11.7998 7.75736 11.2426C7.20021 10.6855 6.75825 10.0241 6.45672 9.2961C6.15519 8.56815 6 7.78793 6 7C6 6.21207 6.15519 5.43185 6.45672 4.7039C6.75825 3.97595 7.20021 3.31451 7.75736 2.75736C8.31451 2.20021 8.97595 1.75825 9.7039 1.45672C10.4319 1.15519 11.2121 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7C18 8.5913 17.3679 10.1174 16.2426 11.2426C15.1174 12.3679 13.5913 13 12 13Z" fill="white"/>
                    <path d="M12 13C11.2121 13 10.4319 12.8448 9.7039 12.5433C8.97595 12.2417 8.31451 11.7998 7.75736 11.2426C7.20021 10.6855 6.75825 10.0241 6.45672 9.2961C6.15519 8.56815 6 7.78793 6 7C6 6.21207 6.15519 5.43185 6.45672 4.7039C6.75825 3.97595 7.20021 3.31451 7.75736 2.75736C8.31451 2.20021 8.97595 1.75825 9.7039 1.45672C10.4319 1.15519 11.2121 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7C18 8.5913 17.3679 10.1174 16.2426 11.2426C15.1174 12.3679 13.5913 13 12 13Z" fill="#7878FE"/>
                    </svg>

                    <svg style={{paddingLeft: '0.35em'}} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.80004 3.98134L8.10004 0.681335L9.04271 1.624L4.80004 5.86667L0.557373 1.624L1.50004 0.681335L4.80004 3.98134Z" fill="white"/>
                </svg>

                </button>
            </NavButtons>
        </Nav>
    )
}

const Nav = styled.nav`
    max-width: 90em;
    height: 4.3em;
    margin: 0.5em auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .image{
        width: 2.5em;

        img{
            width: 100%;
        }
    }
`

const Ul = styled.ul`
    display: flex;
    list-style: none;

    li{
        padding: 1.8em;
    }
    
    li:hover{
        color: #2e2e99;
        border-bottom: 2px solid #2e2e99;
        transition: border-bottom 0.5s ease-in-out;
    }

    .active{
        color: #2e2e99;
        border-bottom: 2px solid #2e2e99;
    }
`

const NavButtons = styled.div`
    display: flex;
    button{
        background: #2e2e99;
        color: #ffffff;
        border: none;
        border-radius: 0.25em;
        height: 2.5em;
    }

    button:first-child{
        width: 2.5em;
        margin-right: 0.35em;
    }
    button:last-child{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4em;
        padding-right: 0.35em;
        height: 2.5em;
    }
`

export default Navs
