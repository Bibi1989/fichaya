import React from 'react'
import styled from 'styled-components'

const Tables = () => {
    return (
        <div>
            {/* <Table id="customers">
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Berglunds snabbköp</td>
                    <td>Christina Berglund</td>
                    <td>Sweden</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
                <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                </tr>
                <tr>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                    <td>UK</td>
                </tr>
                <tr>
                    <td>Königlich Essen</td>
                    <td>Philip Cramer</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Laughing Bacchus Winecellars</td>
                    <td>Yoshi Tannamuri</td>
                    <td>Canada</td>
                </tr>
                <tr>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>Giovanni Rovelli</td>
                    <td>Italy</td>
                </tr>
                <tr>
                    <td>North/South</td>
                    <td>Simon Crowther</td>
                    <td>UK</td>
                </tr>
            </Table> */}

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableData>Company</TableData>
                        <TableData>Contact</TableData>
                        <TableData>Country</TableData>
                    </TableRow>

                </TableHeader>

                <TableBody>
                    <tr>
                        <Td>Alfreds Futterkiste</Td>
                        <Td>Maria Anders</Td>
                        <Td>Germany</Td>
                    </tr>
                    <tr>
                        <Td>Berglunds snabbköp</Td>
                        <Td>Christina Berglund</Td>
                        <Td>Sweden</Td>
                    </tr>
                    <tr>
                        <Td>Centro comercial Moctezuma</Td>
                        <Td>Francisco Chang</Td>
                        <Td>Mexico</Td>
                    </tr>
                    <tr>
                        <Td>Ernst Handel</Td>
                        <Td>Roland Mendel</Td>
                        <Td>Austria</Td>
                    </tr>
                    <tr>
                        <Td>Island Trading</Td>
                        <Td>Helen Bennett</Td>
                        <Td>UK</Td>
                    </tr>
                    <tr>
                        <Td>Königlich Essen</Td>
                        <Td>Philip Cramer</Td>
                        <Td>Germany</Td>
                    </tr>
                    <tr>
                        <Td>Laughing Bacchus Winecellars</Td>
                        <Td>Yoshi Tannamuri</Td>
                        <Td>Canada</Td>
                    </tr>
                    <tr>
                        <Td>Magazzini Alimentari Riuniti</Td>
                        <Td>Giovanni Rovelli</Td>
                        <Td>Italy</Td>
                    </tr>
                </TableBody>
            </Table>

            <SmallButton style={{ display: 'flex', alignItems: 'center', marginBottom: '1em', padding: '0.6875em 1em' }}>
                <span style={{ paddingRight: '1em' }}>UPCOMING</span>
                <svg style={{ paddingLeft: '0.35em' }} width="16" height="16" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.80004 3.98134L8.10004 0.681335L9.04271 1.624L4.80004 5.86667L0.557373 1.624L1.50004 0.681335L4.80004 3.98134Z" fill="white" /></svg>
            </SmallButton>

            <SmallButton style={{ padding: '0.625em' }}>Platform Metrics</SmallButton>
            <SmallButton style={{
                padding: '0.625em',
                backgroundColor: '#f8eccc',
                display: 'flex',
                alignItems: 'center'
            }}>
                <span>Last Week</span>
                <svg style={{ paddingLeft: '0.35em', marginLeft: '0.6em' }} width="14" height="14" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.80004 3.98134L8.10004 0.681335L9.04271 1.624L4.80004 5.86667L0.557373 1.624L1.50004 0.681335L4.80004 3.98134Z" fill="white" /></svg>
            </SmallButton>
        </div>
    )
}

export default Tables

export const Container = styled.div`
    padding: 5px 10%;
    background-color: #f6f6ff;
    min-height: 100%;
`

export const GridDashBoard = styled.div`
    display: grid;
    grid-template-columns: 55% 45%;
    width: 100%;
    padding-top: 15px;
`


export const Cards = styled.div`
    display: flex;
    flex-direction: column;
    height: 63em;
    
    .sub-main-first-child{
        height: 197px;
        padding: 0px 10px 15px 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;

        .cards{
            background: #ffffff;
            box-shadow: 0px 2px 15px #eee;
        }
        
        .cards:first-child{
            margin-left: 0;
        }
    }
    
    .sub-main-second-child{
        height: 48em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-right: 10px;
        
        .chart{
            border: 1px solid #eee;
            padding: 1em 1em 8em 1em;
            background-color: #ffffff;
            height: 21.8125em;
        }
    }
`

export const Metrics = styled.div`
    height: 10vh;
    display: flex;
    align-items: flex-end;
    width: 100%;
`

export const SmallButton = styled.button`
background-color: #01037C;
color: #ffffff;
    border: none;
    border-radius: 0.25em;
    font-size: 0.875em;
    line-height: 1.4375em;
    `
    
    export const Table = styled.table`
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    border: 1px solid #EDEDED;
    border-radius: 0.25em;
`

export const TableHeader = styled.thead`
    background-color: #f8eccc;
`

export const TableBody = styled.tbody`
tr:nth-child(even) {
        background-color: #f6f6ff;
    }
    tr:nth-child(odd) {
        background-color: #ffffff;
    }
`

export const Td = styled.td`
    height: 3.75em;
    min-height: 3.75em;
    padding-left: 1.25em;
    color: #606077;
`

export const TableData = styled.td`
    border: none;
    padding: 10px 20px;
`

export const TableRow = styled.tr`
    border: none;
    padding: 10px 20px;
`

export const DashBoardRequest = styled.div`
    display: flex;
    justify-content: space-between;
    height: 6em;
    `
    
export const DashBoardRequestFirstSection = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding-bottom: 1.2em;
`

export const DashBoardRequestSecondSection = styled.div`

`

export const ChartButtonDashboard = styled.div`
display: flex;
`

export const CartRequest = styled.div`
    display: flex;
    background: #606077;
    border-radius: 0.5em;
    padding: 0.7em;
`

export const CartButton = styled.div`
    width: 3.05em;
    height: 3.05em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #39395B;
    border-radius: 0.5em;
`

export const CartPrice = styled.div`
    color: #ffffff;
    padding-left: 0.7em;
`

export const RequestPlanDashBoard = styled.div`
    display: flex;

    .regular, .deep, .fumigation{
        position: relative;
        margin: 0 1.5em;
        font-size: 14px;
    }

    .regular::before{
        content: "";
        position: absolute;
        top: 50%;
        left: -25%;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #01037c;
    }
    
    .deep::before{
        content: "";
        position: absolute;
        top: 50%;
        left: -65%;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #00DE73;
    }

    .fumigation::before{
        content: "";
        position: absolute;
        top: 50%;
        left: -25%;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #F8ECCC;
    }
`