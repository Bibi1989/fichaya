import React from 'react'
import Person from './Person'
import styled from 'styled-components'

import {
    Table,
    TableHeader,
    TableBody,
    TableData,
    TableRow,
    Td,
} from './Table'

const Customer = () => {
    return (
        <Container>
            <Person />

            <div className="table">
                <NavTable>
                    <ul>
                        <li className="active">CLEANING HISTORY</li>
                        <li>PAYMENT HISTORY</li>
                        <li>CONVERSATIONS</li>
                    </ul>
                </NavTable>
                <div className="blank"></div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableData>LOCATION</TableData>
                            <TableData>TYPE</TableData>
                            <TableData>DATE</TableData>
                            <TableData>ASSOCIATE</TableData>
                            <TableData>SERVICE RATING</TableData>
                        </TableRow>

                    </TableHeader>

                    <TableBody>
                        <tr>
                            <Td>Alfreds Futterkiste</Td>
                            <Td>Maria Anders</Td>
                            <Td>Germany</Td>
                            <Td>Germany</Td>
                            <Td>{[1,2,3,4,5].map(star => (
                                <img src="./images/starYellow.svg" />
                            ))}</Td>
                        </tr>
                        <tr>
                            <Td>Berglunds snabbköp</Td>
                            <Td>Christina Berglund</Td>
                            <Td>Sweden</Td>
                            <Td>Sweden</Td>
                            <Td>{[1,2,3,4,5].map(star => (
                                <img src="./images/starYellow.svg" />
                            ))}</Td>
                        </tr>
                        <tr>
                            <Td>Centro comercial Moctezuma</Td>
                            <Td>Francisco Chang</Td>
                            <Td>Mexico</Td>
                            <Td>Mexico</Td>
                            <Td>{[1,2,3,4,5].map(star => (
                                <img src="./images/starYellow.svg" />
                            ))}</Td>
                        </tr>
                        <tr>
                            <Td>Ernst Handel</Td>
                            <Td>Roland Mendel</Td>
                            <Td>Austria</Td>
                            <Td>Austria</Td>
                            <Td>{[1,2,3,4,5].map(star => (
                                <img src="./images/starYellow.svg" />
                            ))}</Td>
                        </tr>
                        <tr>
                            <Td>Island Trading</Td>
                            <Td>Helen Bennett</Td>
                            <Td>UK</Td>
                            <Td>UK</Td>
                            <Td>{[1,2,3,4,5].map(star => (
                                <img src="./images/starYellow.svg" />
                            ))}</Td>
                        </tr>
                        <tr>
                            <Td>Königlich Essen</Td>
                            <Td>Philip Cramer</Td>
                            <Td>Germany</Td>
                            <Td>Germany</Td>
                            <Td>{[1,2,3,4,5].map(star => (
                                <img src="./images/starYellow.svg" />
                            ))}</Td>
                        </tr>
                        <tr>
                            <Td>Laughing Bacchus Winecellars</Td>
                            <Td>Yoshi Tannamuri</Td>
                            <Td>Canada</Td>
                            <Td>Canada</Td>
                            <Td>{[1,2,3,4,5].map(star => (
                                <img src="./images/starYellow.svg" />
                            ))}</Td>
                        </tr>
                        <tr>
                            <Td>Magazzini Alimentari Riuniti</Td>
                            <Td>Giovanni Rovelli</Td>
                            <Td>Italy</Td>
                            <Td>Italy</Td>
                            <Td>{[1,2,3,4,5].map(star => (
                                <img src="./images/starYellow.svg" />
                            ))}</Td>
                        </tr>
                    </TableBody>
                </Table>
                <div className="blank1"></div>
            </div>
        </Container>
    )
}

export default Customer

export const Container = styled.div`
    display: grid;
    grid-template-columns: 27% 72%;
    grid-gap: 1%;
    box-sizing: border-box;
    padding: 5% 10%;

    .blank{
        background: #ffffff;
        height: 60px;
        width: 100%;
        border-top: 1px solid #EDEDED;
        border-right: 1px solid #EDEDED;
        border-left: 1px solid #EDEDED;
        border-bottom: 0;
        border-radius: 0.25em 0.25em 0 0;
    }

    .blank1 {
        background: #ffffff;
        height: 40px;
        width: 100%;
        border-top: 0;
        border-right: 1px solid #EDEDED;
        border-left: 1px solid #EDEDED;
        border-bottom: 1px solid #EDEDED;
        border-radius: 0 0 0.25em 0.25em;
    }
`

export const NavTable = styled.div`
    width: 100%;
    height: 3.1em;
    background-color: #ffffff;
    border: 1px solid #EDEDED;

    ul{
        list-style: none;
        display: flex;

        li{
            padding: 1.3em 0;
            margin: 0 1.5em;
            font-size: 0.8em;
            font-family: Mukta;
            font-style: normal;
            font-weight: normal;
            letter-spacing: 0.04em;

        }
        .active{
            border-bottom: 2px solid #01037C;
            color: #01037C;
        }
    }
`
