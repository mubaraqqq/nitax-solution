import { Grid } from '@mui/material';
import './App.css';
import Tables from './components/Tables'

function App() {

  return (
    <div className="App">
      <Grid container>
        <Grid item xs={3} sx={{ backgroundColor: '#1c2497', color: 'white'}}>Sidebar</Grid>
        <Grid item xs={9}>
          <Tables />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
