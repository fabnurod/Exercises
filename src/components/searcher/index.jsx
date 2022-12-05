import React,{useState} from "react";
import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Searcher =(prop)=>{
    const { setInputUser}=prop;
    const[valueInput, setValueInput]= useState('');
    const onSearchValueChange=(event)=>{
        const inputValue=event.target.value;
        setValueInput(inputValue);
    }
    
    const handleSubmit=()=>{
        setInputUser(valueInput);
    } 

    return(
    <Stack sx ={{ display:'flex', flexDirection:'row', marginTop:'30px', width:'80%'}}>
        <TextField 
            id="outlined-basic" 
            label="GitHub User" 
            variant="outlined" 
            placeholder="Octocat" 
            size="small"
            value={valueInput}
            onChange={onSearchValueChange}
            sx={{
                width:'90%'
            }}
        /> 
        <IconButton onClick={handleSubmit} sx={{left:'-45px', size:'small'}}>
            <SearchIcon/>
        </IconButton>
    </Stack>
    )
}

export default Searcher