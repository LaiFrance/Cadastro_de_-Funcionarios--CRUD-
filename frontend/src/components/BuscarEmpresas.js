import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function BuscarEmpresas() {
  const [empresas, setEmpresas] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');

  React.useEffect(() => {
    if (inputValue === '') {
      setEmpresas([]);
      return;
    }

    buscarEmpresas(inputValue).then(setEmpresas);
  }, [inputValue]);

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={empresas.map((option) => option.nome)}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => <TextField {...params} label="nome" />}
      />
    </Stack>
  );
}

async function buscarEmpresas(query) {
 
    const response = await fetch(`http://localhost:8800/empresas?nome=${query}`);
    const data = await response.json();
    
    return data;
    }

