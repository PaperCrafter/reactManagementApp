import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TabelCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import {withStyles} from '@material-ui/core/styles';

const styles = theme=>({
  root:{
    width:'100%',
    marginTop:theme.spacing.unit*3,
    overflowX:"auto"
  },
  table:{
    minwidth:1080
  },
  progress:{
    margin:theme.spacing.unit*2
  }
})

class App extends Component {
  state = {
    customers:"",
    completed:0
  }

  componentDidMount(){
    this.timer = setInterval(this.progress, 20);
    
    this.callApi()
    .then(res=>this.setState({customers:res}))
    .catch(err => console.log(err));
    
  }

  callApi = async() =>{
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = ()=>{ 
      const {completed} = this.state;
      this.setState({completed:completed>=100?0: completed+1});
  }

  render() {
    const {classes} = this.props;
    return (
      <Paper className={classes.root}> 
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TabelCell> 번호 </TabelCell>
            <TabelCell> 이미지 </TabelCell>
            <TabelCell> 이름 </TabelCell>
            <TabelCell> 생년월일 </TabelCell>
            <TabelCell> 성별 </TabelCell>
            <TabelCell> 직업 </TabelCell>
          </TableRow>
        </TableHead>

        <TableBody>
        {
          this.state.customers ? this.state.customers.map(e => {
            return(
              <Customer
                key={e.id}
                id = {e.id}
                image = {e.image}
                name = {e.name}
                birthday={e.birthday}
                gender={e.gender}
                job={e.job}
              />
            );
          }) : <TableRow>
                  <TabelCell colspan = "6" align = "center">
                    <CircularProgress className={classes.progress} variant="determinate" value ={this.state.completed}/>
                  </TabelCell>
                </TableRow>
        }
        </TableBody>
        </Table>
        
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
