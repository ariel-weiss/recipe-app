import React, { useState } from 'react';
import { Button, Card, InputAdornment, TextField } from '@material-ui/core';

import useStyles from './styles';

const SearchRecipe = ({setQuery}) => {
    const classes = useStyles();
    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    };
    
    return (
        <div>
            <form className={classes.searchForm} onSubmit={handleSubmit}>
                <Card className={classes.searchDiv}>
                    <TextField className={classes.searchBar} variant="outlined" type='text' value={search} onChange={(e) => setSearch(e.target.value)}
                    size="small"
                        InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          Search Food:
                        </InputAdornment>
                      ),
                    }}/>
                <Button className={classes.searchButton} variant="contained" color="primary" type='submit'>Search</Button>
                </Card>
            </form>
        </div>
    )
}

export default SearchRecipe;
