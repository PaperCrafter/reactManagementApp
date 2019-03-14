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
import {withStyles} from '@material-ui/core/styles';

const styles = theme=>({
  root:{
    width:'100%',
    marginTop:theme.spacing.unit*3,
    overflowX:"auto"
  },
  table:{
    minwidth:1080
  }
})

const customers=[{
  'id':1,
  'image':logo,
  'name':'홍길동',
  'birthday':'961222',
  'gender':'남자',
  'job':'대학생',
},
{
  'id':2,
  'image':logo,
  'name':'paper',
  'birthday':'961222',
  'gender':'남자',
  'job':'대학생',
},
{
  'id':3,
  'image':logo,
  'name':'js',
  'birthday':'961222',
  'gender':'남자',
  'job':'대학생',
}
]


class App extends Component {
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
          customers.map(e => {
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
          })
        }
        </TableBody>
        </Table>
        
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
