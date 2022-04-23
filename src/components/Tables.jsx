import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, TableFooter } from '@mui/material';
import axios from 'axios';

const Tables = () => {
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    const [data4, setData4] = useState([]);
    const [data5, setData5] = useState([]);
    const [data6, setData6] = useState([]);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        axios
            .get('https://swapi.dev/api/planets/?page=1')
            .then((res) => {
                setData1(res.data.results);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        axios
            .get('https://swapi.dev/api/planets/?page=2')
            .then((res) => {
                setData2(res.data.results);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        axios
            .get('https://swapi.dev/api/planets/?page=3')
            .then((res) => {
                setData3(res.data.results);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        axios
            .get('https://swapi.dev/api/planets/?page=4')
            .then((res) => {
                setData4(res.data.results);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        axios
            .get('https://swapi.dev/api/planets/?page=5')
            .then((res) => {
                setData5(res.data.results);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        axios
            .get('https://swapi.dev/api/planets/?page=6')
            .then((res) => {
                setData6(res.data.results);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const data = [...data1, ...data2, ...data3, ...data4, ...data5, ...data6];

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    console.log(page)

  return (
    <>
        <h3>Current page: {page + 1}</h3>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Climate</TableCell>
                        <TableCell>Diameter</TableCell>
                        <TableCell>Population</TableCell>
                        <TableCell>Rotation Period</TableCell>
                        <TableCell>Terrain</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { 
                        (rowsPerPage > 0
                        ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : data)
                        .map((entry, index) => (
                            <TableRow key={index}>
                                <TableCell>{entry.name}</TableCell> 
                                <TableCell>{entry.climate}</TableCell>
                                <TableCell>{entry.diameter}</TableCell>
                                <TableCell>{entry.population}</TableCell>
                                <TableCell>{entry['rotation_period']}</TableCell>
                                <TableCell>{entry.terrain}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>    
                <TableFooter>
                        <TableRow>         
                            <TablePagination 
                                    count={data.length}
                                    rowsPerPageOptions={[9, 10]}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handlePageChange}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    </>
  )
}

export default Tables