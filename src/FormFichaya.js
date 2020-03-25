import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-rows: 10% 90%;
    height: 100vh;
    overflow-x: hidden;
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;

    @media(max-width: 1050px) {
        padding: 0 5%;
    }

    @media(max-width: 800px) {
        padding: 0 5%;
    }
`

const Buttun = styled.button`
    background: #2e2e99;
    border: none;
    border-radius: 2px;
    color: #eee;
    padding: 10px 15px;
    margin-left: 10px;

    i{
        padding-right: 10px;
    }
`

const Body = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    padding: 0 10%;

    @media(max-width: 1050px) {
        padding: 0 5%;
    }

    @media(max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 0 5% 1% 5%;
    }
`

const Form = styled.form`
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 0 0 20px 0;

    h3{
        margin-bottom: 30px;
    }

    .doorman{
        p{
            padding-bottom: 10px;
        }
        margin-top: 40px;
    }

    .coup{
        p{
            padding-bottom: 10px;
        }
        margin-top: 40px;
    }
`

const FormGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;

    @media(max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 0 1%;
    }

    .input{
        display: flex;
        flex-direction: column;
        margin-top: 35px;

        label{
            padding-bottom: 5px;
            font-size: 14px;
        }

        input{
            padding: 20px;
            background: #f1f1f1;
            border: 0.3px solid #999;
            border-radius: 5px;
        }
    }
    
    .input1{
        display: flex;
        flex-direction: column;
        margin-top: 35px;

        label{
            padding-bottom: 5px;
            font-size: 14px;
        }

        input{
            padding: 20px;
            background: #f1f1f1;
            border: 1px solid #ffa60069;
            border-radius: 5px;
        }
    }
`

const ButtonGroup = styled.div`
    display: flex;
    width: 100%;

    button{
        display: block;
        width: 100%;
        margin-right: 10px;
        padding: 10px 0;
        border: none;
        border-radius: 3px;
        font-size: 13px;
    }

    button:first-child{
        background: #2e2e99;
        color: #eee;
    }

    button:nth-child(2), button:nth-child(3) {
        border: 1px solid #2e2e99;
        color: #2e2e99;
        
    }
`

const Coupon = styled.div`
    button{
        display: flex;
        justify-content: space-between;
        padding: 15px;
        width: 100%;
        border: none;
        background: #f1f1f1;

        i{
            width: 20px;
            height: 20px;
            font-size: 10px;
            border-radius: 50%;
            background: #00de73;
            color: #eee;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

`

const List = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 3%;

    div{
        padding-top: 40px;
        background: #e5e5e5;
        border-radius: 4px;
            h5{
                padding: 25px;
                background: #ffa60069;
            }

        ul{
            list-style: none;
            padding: 0 15px;

            li{
                padding: 24.5px 0;
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid #999999a9 ;

                span{
                    font-size: 13px;
                }

                h6{
                    color: #2e2e99;
                }
            }

            li:last-child{
                padding: 25px 0;
                p:first-child{
                    display: flex;
                    flex-direction: column;
                }
                p:last-child{
                    font-weight: 600;
                    color: #2e2e99;
                }
            }
        }
    }
`

const Button = styled.button`
    display: block;
    width: 100%;
    padding: 15px 0;
    background: orange;
    color: #eee;
    border: none;
    margin-top: 10px;
    border-radius: 3px;
`

const FormFichaya = () => {
    return (
        <Container>
            <NavHeader />
            <BodySection />
        </Container>
    )
}

export default FormFichaya

const NavHeader = () => (
    <Nav>
        <div></div>
        <div>
            <Buttun>
                <i className="fas fa-calendar-alt"></i>
                <span>NGN 5,463.29</span>
            </Buttun>
            <Buttun>
                <i className="fas fa-user"></i>
                <i className="fas fa-chevron-down"></i>
            </Buttun>
        </div>
    </Nav>
)

const BodySection = () => (
    <Body>
        <Form>
            <h3 style={{color: '#2e2e99'}}>COMPLETE YOUR BOOKING</h3>
            <FormGroup>
                <div className="input">
                    <label>First Name</label>
                    <input type="text" />
                </div>
                <div className="input">
                    <label>Last Name</label>
                    <input type="text" />
                </div>
                <div className="input">
                    <label>Email Address</label>
                    <input type="text" />
                </div>
                <div className="input">
                    <label>Phone Number</label>
                    <input type="text" />
                </div>
                <div className="input1">
                    <label>Enter your house address</label>
                    <input type="text" />
                </div>
                <div className="input1">
                    <label>Nearest Bus stop</label>
                    <input type="text" className="active" />
                </div>
            </FormGroup>

            <div className="doorman">
                <p>How do we get in?</p>
                <ButtonGroup>
                    <button>DOORMAN</button>
                    <button>HIDDEN KEY</button>
                    <button>SOMEONE'S HOME</button>
                </ButtonGroup>
            </div>

            <div className="coup">
                <p>Enter Coupon Code</p>
                <Coupon>
                    <button><span>BWCDFGHRETCNM</span> <i className="fas fa-check"></i></button>
                </Coupon>
            </div>
        </Form>
        <List>
            <div>
                <h5>SUMMARY</h5>
                <ul>
                    <li><span>SERVICE TYPE</span> <h6>3 bedroom duplex, regular cleaning</h6></li>
                    <li><span>CLEANING FREQUENCY</span> <h6>3 bedroom duplex, regular cleaning</h6></li>
                    <li><span>LOCATION</span> <h6>3 bedroom duplex, regular cleaning</h6></li>
                    <li><span>entry type</span> <h6>3 bedroom duplex, regular cleaning</h6></li>
                    <li><span>next cleaning date & time</span> <h6>3 bedroom duplex, regular cleaning</h6></li>
                    <li><span>extra cleaning requests</span> <h6>3 bedroom duplex, regular cleaning</h6></li>
                    <li className="total">
                        <p><span>TOTAL COST</span><span><input type="checkbox" /> Fund from wallet</span></p>
                        <p>NGN 18,500</p>
                    </li>
                </ul>
            </div>

            <>
                <Button>
                    PAY NOW
                </Button>
            </>
        </List>
    </Body>
)
