import React from "react";
import { Link } from "react-router-dom";
// components
import "./Navigation.css";
// Material ui
import Button from "@material-ui/core/Button";

const Navigation = (props) => {
    return (
        <div className="navigation-container">
            <div className="navigation">
                <Link style={{ textDecoration: "none" }} to="/">
                    <Button color="primary" aria-label="outlined primary ">
                        Countries
                    </Button>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/material-ui">
                    <Button color="primary" aria-label="outlined primary ">
                        MaterialUi
                    </Button>
                </Link>
                <Link
                    style={{ textDecoration: "none" }}
                    to="/countries-with-filter"
                >
                    <Button color="primary" aria-label="outlined primary ">
                        Countries With filter
                    </Button>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/with-hooks">
                    <Button color="primary" aria-label="outlined primary ">
                        With Hooks
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Navigation;
