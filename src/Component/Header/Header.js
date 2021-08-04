import { createTheme, FormControl, InputLabel, MenuItem, Select, TextField, ThemeProvider } from '@material-ui/core'
import React from 'react'
import './Header.css'
import data from '../../data/data'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const Header = ({category,setCategory,word,setWord,lightTheme}) => {
  
    const classes = useStyles();
    const darkTheme = createTheme({
        palette: {
            primary:{
                main:lightTheme?'#000':'#fff'
            },
          type:lightTheme?'light':  'dark',
        },
      });

const handelChange=(language)=>{
 setCategory(language);
 setWord("");
}

    return (
        <div className='header'>
            <h1 className='heading'>{word?word:'Word Hunt'}</h1>
            <div className='input'>
            <ThemeProvider theme={darkTheme}>
            <TextField id="standard-basic" className='search' label="Search a word" value={word} onChange={(e)=>setWord(e.target.value)} />
            <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
         value={category}  
         onChange={(e)=>handelChange(e.target.value)}
         id='category'
        >
     
{
    data.map((option)=>{
        return   <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
    })
}
        </Select>
      </FormControl>
            </ThemeProvider>
            
            </div>
        </div>
    )
}

export default Header