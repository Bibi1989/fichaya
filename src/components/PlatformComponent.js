import React from 'react'
import Chart from './Charted'
import {
    Table,
    TableHeader,
    TableBody,
    TableData,
    TableRow,
    Td,
    SmallButton,
    Metrics,
    Container,
    GridDashBoard,
    Cards,
    DashBoardRequest,
    ChartButtonDashboard,
    RequestPlanDashBoard,
    DashBoardRequestFirstSection,
    DashBoardRequestSecondSection,
    CartRequest,
    CartButton,
    CartPrice
} from './Table'

const PlatformComponent = () => {
    return (
        <Container>
            <Metrics>
                <SmallButton style={{ padding: '0.5em 0.625em', marginRight: '1em' }}>Platform Metrics</SmallButton>
                <SmallButton style={{
                    padding: '0.625em',
                    backgroundColor: '#f8eccc',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#606077'
                }}>
                    <span>Last Week</span>
                    <svg style={{ paddingLeft: '0.35em', marginLeft: '0.6em' }} width="14" height="14" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.80004 3.98134L8.10004 0.681335L9.04271 1.624L4.80004 5.86667L0.557373 1.624L1.50004 0.681335L4.80004 3.98134Z" fill="#606077" /></svg>
                </SmallButton>
            </Metrics>
            <GridDashBoard>
                <Cards>
                    <div className="sub-main-first-child">
                        <div className="cards"></div>
                        <div className="cards"></div>
                        <div className="cards"></div>
                    </div>
                    <div className="sub-main-second-child">
                        <div className="chart">
                            <DashBoardRequest>
                                <DashBoardRequestFirstSection>
                                    <ChartButtonDashboard>
                                        <SmallButton style={{
                                            padding: '0.625em',
                                            backgroundColor: '#01037C',
                                            display: 'flex',
                                            alignItems: 'center',
                                            color: '#ffffff',
                                            marginRight: '1em'
                                        }}>
                                            <span>Cleaning requests</span>
                                            <svg style={{ paddingLeft: '0.35em', marginLeft: '0.6em' }} width="14" height="14" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.80004 3.98134L8.10004 0.681335L9.04271 1.624L4.80004 5.86667L0.557373 1.624L1.50004 0.681335L4.80004 3.98134Z" fill="#ffffff" /></svg>
                                        </SmallButton>
                                        <SmallButton style={{
                                            padding: '0.625em',
                                            backgroundColor: '#f8eccc',
                                            display: 'flex',
                                            alignItems: 'center',
                                            color: '#606077'
                                        }}>
                                            <span>Last Week</span>
                                            <svg style={{ paddingLeft: '0.35em', marginLeft: '0.6em' }} width="14" height="14" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.80004 3.98134L8.10004 0.681335L9.04271 1.624L4.80004 5.86667L0.557373 1.624L1.50004 0.681335L4.80004 3.98134Z" fill="#606077" /></svg>
                                        </SmallButton>
                                    </ChartButtonDashboard>

                                    <RequestPlanDashBoard>
                                        <div className="regular">REGULAR</div>
                                        <div className="deep">DEEP</div>
                                        <div className="fumigation">FUMIGATION</div>
                                    </RequestPlanDashBoard>
                                </DashBoardRequestFirstSection>

                                <DashBoardRequestSecondSection>
                                    <CartRequest>
                                        <CartButton>
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.99996 5.414L0.756958 2.172L2.17196 0.757L5.41396 4H20.656C20.8118 3.99999 20.9655 4.03641 21.1048 4.10637C21.2441 4.17632 21.3651 4.27786 21.4582 4.4029C21.5513 4.52793 21.6138 4.67298 21.6409 4.82649C21.6679 4.97999 21.6587 5.13769 21.614 5.287L19.214 13.287C19.1522 13.4931 19.0257 13.6738 18.8531 13.8022C18.6805 13.9307 18.4711 14 18.256 14H5.99996V16H17V18H4.99996C4.73474 18 4.48039 17.8946 4.29285 17.7071C4.10531 17.5196 3.99996 17.2652 3.99996 17V5.414ZM5.49996 22C5.10213 22 4.7206 21.842 4.4393 21.5607C4.15799 21.2794 3.99996 20.8978 3.99996 20.5C3.99996 20.1022 4.15799 19.7206 4.4393 19.4393C4.7206 19.158 5.10213 19 5.49996 19C5.89778 19 6.27931 19.158 6.56062 19.4393C6.84192 19.7206 6.99996 20.1022 6.99996 20.5C6.99996 20.8978 6.84192 21.2794 6.56062 21.5607C6.27931 21.842 5.89778 22 5.49996 22ZM17.5 22C17.1021 22 16.7206 21.842 16.4393 21.5607C16.158 21.2794 16 20.8978 16 20.5C16 20.1022 16.158 19.7206 16.4393 19.4393C16.7206 19.158 17.1021 19 17.5 19C17.8978 19 18.2793 19.158 18.5606 19.4393C18.8419 19.7206 19 20.1022 19 20.5C19 20.8978 18.8419 21.2794 18.5606 21.5607C18.2793 21.842 17.8978 22 17.5 22Z" fill="white" />
                                            </svg>
                                        </CartButton>

                                        <CartPrice>
                                            <h4>4,000</h4>
                                            <p>REQUESTS</p>
                                        </CartPrice>
                                    </CartRequest>
                                </DashBoardRequestSecondSection>
                            </DashBoardRequest>
                            <Chart color={null} />
                        </div>

                        <div className="chart">
                            <DashBoardRequest>
                                <DashBoardRequestFirstSection>
                                    <ChartButtonDashboard>
                                        <SmallButton style={{
                                            padding: '0.625em',
                                            backgroundColor: '#01037C',
                                            display: 'flex',
                                            alignItems: 'center',
                                            color: '#ffffff',
                                            marginRight: '1em'
                                        }}>
                                            <span>Cleaning requests</span>
                                            <svg style={{ paddingLeft: '0.35em', marginLeft: '0.6em' }} width="14" height="14" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.80004 3.98134L8.10004 0.681335L9.04271 1.624L4.80004 5.86667L0.557373 1.624L1.50004 0.681335L4.80004 3.98134Z" fill="#ffffff" /></svg>
                                        </SmallButton>
                                        <SmallButton style={{
                                            padding: '0.625em',
                                            backgroundColor: '#f8eccc',
                                            display: 'flex',
                                            alignItems: 'center',
                                            color: '#606077'
                                        }}>
                                            <span>Last Week</span>
                                            <svg style={{ paddingLeft: '0.35em', marginLeft: '0.6em' }} width="14" height="14" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.80004 3.98134L8.10004 0.681335L9.04271 1.624L4.80004 5.86667L0.557373 1.624L1.50004 0.681335L4.80004 3.98134Z" fill="#606077" /></svg>
                                        </SmallButton>
                                    </ChartButtonDashboard>

                                    <RequestPlanDashBoard>
                                        <div className="regular">REGULAR</div>
                                        <div className="deep">DEEP</div>
                                        <div className="fumigation">FUMIGATION</div>
                                    </RequestPlanDashBoard>
                                </DashBoardRequestFirstSection>

                                <DashBoardRequestSecondSection>
                                    <CartRequest>
                                        <CartButton>
                                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V6ZM1 0H16V4H0V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM13 11V13H16V11H13Z" fill="white" />
                                            </svg>

                                        </CartButton>

                                        <CartPrice>
                                            <h4>NGN 250,000</h4>
                                            <p>AVG, WEEKLY REVENUE</p>
                                        </CartPrice>
                                    </CartRequest>
                                </DashBoardRequestSecondSection>
                            </DashBoardRequest>
                            <Chart color={"#00DEC3"} />
                        </div>
                    </div>
                </Cards>
                <div className="main-cleaning-second-child">

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
                </div>
            </GridDashBoard>
        </Container>
    )
}

export default PlatformComponent
