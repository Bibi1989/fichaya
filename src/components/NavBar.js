import React from 'react'
import styled from 'styled-components'
import {StickyContainer, Sticky} from 'react-sticky'

const NavBar = ({style}) => {
    return (
        <Nav style={style}>
            <h1>LOGO</h1>
            <ul>
                <li className="active">DASHBOARD</li>
                <li>CUSTOMERS</li>
                <li>ASSOCIATES</li>
                <li>QUOTES</li>
                <li>SHEDULES</li>
                <li>PAYMENTS</li>
                <li>SETTINGS</li>
            </ul>
            <div className="icons">
                <button>alert</button>
                <button>user</button>
            </div>
        </Nav>
    )
}

const Nav = styled.nav`
    background: #ffffff;
    display: none;
    justify-content: space-between;
    align-items: center;
    padding: 0% 10%;
    font-size: 14px;
    width: 100%
    
    h1{
        color: purple;
    }

    ul{
        list-style: none;
        display: flex;

        li{
            padding: 2% 1.5rem;

        }
        .active{
            border-bottom: 2px solid violet;
        }

    }

    .icons{
        justify-self: flex-end;
        button{
            background: purple;
            color: #eee;
            padding: 10px;
            border: none;
            border-radius: 5px;
            margin-right: 10px;
        }
    }
`

export default NavBar
