import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Customer from './components/Customer';


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
    return (
      <div gray-background> 
        {
          customers.map(e => {
            return(
              <Customer
                key={e.id}
                id = {e.id}
                image = {e.image}
                name = {e.name}
                birthday={e.birthday}
                gendner={e.gender}
                job={e.job}
              />
            );
          })
        }
        
      </div>
    );
  }
}

export default App;
