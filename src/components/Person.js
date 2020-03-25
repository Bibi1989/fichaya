import React from 'react'
import styled from 'styled-components'

const Person = () => {
    return (
        <Container>
            <Profile>
                <span className="hash_number">#1228</span>
                <div className="profile">
                    <img src="./images/associate-2.png" alt="profile picture" />
                    <div className="sub_profile">
                        <h4>Peter Abu-Ekpeshie</h4>
                        <p><span>Balance:</span> <span>NGN 4,500</span></p>
                    </div>
                </div>
            </Profile>

            <Detail>
                <div>
                    <p>Name</p>
                    <p>Peter Abu-Ekpeshie</p>
                </div>
                <div>
                    <p>phone number</p>
                    <p>08140564969</p>
                </div>
                <div>
                    <p>email address</p>
                    <p>peterogh94@gmail.com</p>
                </div>
                <div>
                    <p>apartment address</p>
                    <p>51, IWAYA ROAD, ONIKE, YABA</p>
                </div>
                <div>
                    <p>subscription plan</p>
                    <p>TWO-BED, REGULAR</p>
                </div>
            </Detail>

            <Foot>
                <div className="footer">
                    <div className="footer_date">
                        <p>next cleaning</p>
                        <p>MON, JAN 13 @8:00A.M</p>
                    </div>
                    <button className="change">CHANGE</button>
                </div>

                <BigButton>
                    <span>Manage customer</span>
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.99999 5.17205L11.95 0.222046L13.364 1.63605L6.99999 8.00005L0.635986 1.63605L2.04999 0.222046L6.99999 5.17205Z" fill="#EDEDED" />
                    </svg>
                </BigButton>
            </Foot>
        </Container>
    )
}

export default Person

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: #ffffff;
    border: 1px solid #ededed;
    border-radius: 0.25em;
`

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.8em 1em 3em 1em;
    border-bottom: 1px solid #ededed;

    .hash_number{
        font-family: Mukta;
        font-style: normal;
        font-weight: normal;
        font-size: 0.8em;
        line-height: 30px;
        color: #606077;
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: flex-end;
        width: 4em;
        height: 2em;
        background: #F8ECCC;
        border-radius: 0.25em;
    }

    .profile {
        display: flex;
        align-items: center;

        img {
            width: 5em;
            height: 5em;
            display: block;
            border: 6px solid #E7E7FC;
            border-radius: 50%;
        }

        .sub_profile {
            padding-left: 0.5em;

            h4 {
                font-family: Mukta;
                font-style: normal;
                font-weight: 900;
                font-size: 1em;
                line-height: 30px;
                color: #01037C;
            }

            p {
                span:first-child{
                    font-family: Mukta;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 1em;
                    line-height: 30px;
                    color: #606077;
                }

                span:last-child{
                    font-family: Mukta;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 1em;
                    line-height: 30px;
                    color: #01037C;
                }
            }
        }
    }
`

export const Detail = styled.div`
    padding: 1em;

    div{
        margin: 1.4em 0;

        p:first-child{
            font-family: Mukta;
            font-style: normal;
            font-weight: 500;
            font-size: 0.6em;
            line-height: 109.7%;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #606077;
            padding-bottom: 0.5em;
        }

        p:last-child{
            font-family: Mukta;
            font-style: normal;
            font-weight: 500;
            font-size: 1em;
            line-height: 109.7%;
            letter-spacing: 0.1em;
            color: #373737;
        }
    }
`

export const Foot = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3em 1em 1em 1em;
    border-top: 1px solid #ededed;
    

    .footer{
        display: flex;
        justify-content: space-between;
        margin-bottom: 1em;

        p:first-child{
            font-family: Mukta;
            font-style: normal;
            font-weight: 500;
            font-size: 0.7em;
            line-height: 109.7%;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            padding-bottom: 0.5em;
        }

        p:last-child{
            font-family: Mukta;
            font-style: normal;
            font-weight: normal;
            font-size: 1em;
            line-height: 109.7%;
            letter-spacing: 0.04em;
            color: #01037C;
            text-transform: uppercase;
        }

        .change {
            background: #01037C;
            border-radius: 0.25em;
            padding: 0em 1em;
            height: 2.4em;
            font-size: 0.6em;
            border: none;
            color: #ffffff;
        }
    }
`

export const BigButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3.125em;
    color: #ffffff;
    padding: 0 1em;
    background: #01037C;
    border-radius: 0.25em;
    border: none;
`
