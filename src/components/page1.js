import React from 'react'
import styled from 'styled-components'

import {
    Table,
    TableHeader,
    TableBody,
    TableData,
    TableRow,
    Td,
} from './Table'

const Page1 = () => {
    return (
        <Container>
            <h3>700 CUSTOMERS</h3>
            <TableSearchCustomer>
                <div></div>
                <div className="search_box">
                    <div className="search_input">
                        <input type="text" placeholder="Search customer" />
                        <svg className="svg" width="19" height="19" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" fill="#606077" />
                        </svg>
                    </div>

                    <span className="search_icon">
                        <svg width="16" height="14" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M8 0H18V2H8V0ZM8 4H14V6H8V4ZM8 10H18V12H8V10ZM8 14H14V16H8V14ZM0 0H6V6H0V0ZM2 2V4H4V2H2ZM0 10H6V16H0V10ZM2 12V14H4V12H2Z" fill="#606077" />
                        </svg>

                    </span>
                </div>
            </TableSearchCustomer>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableData><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" fill="white" stroke="#AAB1C2" />
                        </svg>
                        </TableData>
                        <TableData>NAME</TableData>
                        <TableData>EMAIL ADDRESS</TableData>
                        <TableData>SUSCRIPTION TYPE</TableData>
                        <TableData>ADDRESS</TableData>
                    </TableRow>

                </TableHeader>

                <TableBody>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(s => (<tr>
                        <Td><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" fill="white" stroke="#AAB1C2" />
                        </svg>
                        </Td>
                        <Td>Peter Abu-Ekpeshie</Td>
                        <Td>peterogh94@gmail.com</Td>
                        <Td>2 BEDROOM DUPLEX REGULAR</Td>
                        <Td>51, Iwaya Road Onik...</Td>
                    </tr>))}

                </TableBody>
            </Table>
            <TableSearchCustomer>
                <div></div>
                <div className="search_box">
                    <p className="pagination">
                        <span>1/45</span>
                    </p>

                    <div className="pagination_arrows">
                        <span>
                            <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 6L6 12V0L0 6Z" fill="#01037C" />
                            </svg>
                        </span>

                        <span>
                            <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 6L0 12V0L6 6Z" fill="#01037C" />
                            </svg>
                        </span>
                    </div>
                </div>
            </TableSearchCustomer>
        </Container>
    )
}

export default Page1

export const Container = styled.div`
    padding: 1% 10%;
    background-color: #f6f6ff;

    h3{
        font-family: Mukta;
        font-style: normal;
        font-weight: 500;
        line-height: 2em;
        padding: 1.2em 0;
        letter-spacing: 0.1em;
        color: #01037C;
    }
`

export const TableSearchCustomer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.8em 2em;
    border: 1px solid #EDEDED;
    background-color: #ffffff;
    border-radius: 0.25em 0.25em 0 0;

    .search_box{
        display: flex;
        align-items: center;

        .search_input {
            width: 19.75em;
            height: 2em;
            margin-right: 0.6em;
            position: relative;

            input {
                height: 100%;
                width: 100%;
                background: #EDEDED;
                padding-left: 2.7em;
                opacity: 0.6;
                border: none;
                border-radius: 0.25em;
            }

            .svg{
                position: absolute;
                left: 0.7em;
                top: 50%;
                transform: translateY(-50%);
            }

        }

        .search_icon{
            padding: 0.2em;
            background: #FAFAFA;
            border: 1px solid #EDEDED;
            box-sizing: border-box;
            border-radius: 0.25em;
        }

        .pagination {
            display: flex;
            align-items: center;
            border-right: 1px solid #ededed;
            padding-right: 1em;

            span{
                font-family: Mukta;
                font-style: normal;
                font-weight: bold;
                font-size: 0.9em;
                line-height: 30px;
                text-align: right;
                letter-spacing: 0.04em;
                color: #01037C;
            }

        }

        .pagination_arrows {
            margin-left: 1em;
            display: flex;

            span{
                height: 2.3em;
                width: 2.3em;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #FAFAFA;
                border: 1px solid #ededed;
                border-radius: 50%;
                margin: 0 0.3em;
            }
        }
    }
`