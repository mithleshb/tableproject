import { TableHead, TableBody, Table, TableRow, TableContainer, TableCell, Paper, Tab, TextField } from "@mui/material";
import { Grid } from "@mui/material";
import Info from './information';
import { useState } from "react";


const TableComp = () => {
    const[data,setData]=useState({})
    console.log("info is "+ Info);
    const Onchangehandler=(event)=>{
        console.log(event.target.value);
    }
    return (
        <>
            <TableContainer component={Paper} elevation={5} style={{ width: "90%", margin: 'auto', border: '0px solid black' }}>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell style={{
                                fontWeight: 'bold', backgroundColor: 'whitesmoke', width: "300px"
                            }}> MONTH 1 </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {Info.map((data) => {
                            // console.log("data is "+ data.name);
                            return (
                                <TableRow key={data.ind} >
                                    
                                    <TableCell  style={{ fontWeight: 'bold', backgroundColor:'whitesmoke'}}> {data.name} </TableCell>
                                       <div style={{display:"flex", width:'100%'}}>
                                        <Grid >
                                            <TextField type='text' onChange={Onchangehandler} fullWidth />
                                        </Grid>
                                        <Grid >
                                            <TextField type='text'onChange={Onchangehandler} fullWidth />
                                        </Grid>
                                        <Grid >
                                            <TextField type='text' onChange={Onchangehandler} fullWidth />
                                        </Grid>
                                        <Grid >
                                            <TextField type='text' onChange={Onchangehandler} fullWidth />
                                        </Grid>
                                        <Grid >
                                            <TextField type='text' onChange={Onchangehandler} fullWidth />
                                        </Grid>
                                        <Grid >
                                            <TextField type='text' onChange={Onchangehandler} fullWidth />
                                        </Grid>
                                        </div>
                                        {/* <Grid item lg={2} sm={9} md={9} xs={12}>
                                            <TextField type='text' fullWidth />
                                        </Grid>
                                        <Grid item lg={2} sm={9} md={9} xs={12}>
                                            <TextField type='text' fullWidth />
                                        </Grid> */}
                                        
                                   
                                </TableRow>
                            );

                        })}
                        {/* <TableRow>
                            <TableCell style={{ fontWeight: 'bold', backgroundColor:'whitesmoke' }}> Head 1 </TableCell>
                            <TableCell> data 1 </TableCell>
                            <TableCell> data 2 </TableCell>
                            <TableCell> data 3 </TableCell>
                            <TableCell> data 4 </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ fontWeight: 'bold' }}> Head 1 </TableCell>
                            <TableCell> data 1 </TableCell>
                            <TableCell> data 2 </TableCell>
                            <TableCell> data 3 </TableCell>
                            <TableCell> data 4 </TableCell>
                        </TableRow> */}

                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
export default TableComp;