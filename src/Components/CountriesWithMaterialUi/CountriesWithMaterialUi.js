import React from "react";
// components
import "./CountriesWithMaterialUi.css";
// material-ui
import CircularProgress from "@material-ui/core/CircularProgress";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class TableUi extends React.Component {
    constructor() {
        super();
        this.state = {
            countries: [],
            loading: false,
            error: "",
        };
    }

    componentDidMount() {
        this.setState({
            loading: true,
        });
        fetch("https://restcountries.eu/rest/v2/all")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    loading: false,
                    countries: json,
                });
            })
            .catch((error) => {
                this.setState({
                    loading: false,
                    error: error.errorMessage,
                });
            });
    }

    render() {
        const { countries, loading } = this.state;
        if (loading) {
            return (
                <div className="loading">
                    <CircularProgress disableShrink />
                </div>
            );
        }
        return (
            <div className="table-container-ui">
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Country</TableCell>
                                <TableCell align="right">capital</TableCell>
                                <TableCell align="right">population</TableCell>
                                <TableCell align="right">area</TableCell>
                                <TableCell align="right">flag</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {countries.map((country) => (
                                <TableRow key={country.name}>
                                    <TableCell component="th" scope="row">
                                        {country.name}
                                    </TableCell>
                                    <TableCell align="right">
                                        {country.capital}
                                    </TableCell>
                                    <TableCell align="right">
                                        {country.population}
                                    </TableCell>
                                    <TableCell align="right">
                                        {country.area}
                                    </TableCell>
                                    <TableCell align="right">
                                        {" "}
                                        <img
                                            src={country.flag}
                                            alt="flag"
                                            width="30px"
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default TableUi;
