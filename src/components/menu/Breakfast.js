import React from 'react';
<<<<<<< HEAD
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const foods = (props) => {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs>
          <Button variant="contained" color="#ffffff" onClick={props.click}>{props.name}</Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default foods;
=======
import { BtnOptions } from './Lunch';
// import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
import { coffee, sandwiches } from '../../data/menu.json';


  const coffe = menu.coffe
  const sandwish = menu.sandwish
  //f(x) que captura el nombre de la opción seleccionada

  export default class Breakfast extends React.Component{ 
    constructor() {
      super();
      this.state = {
        cofe: menu.cofe,
        sandwish: menu.sandwish,
      }
    }
    render() {
    const coffeOptions = coffe.map((item) => {
      return (
        <Grid item xs>
         <Button variant="contained" color="#ffffff" key={item.name} onClick={this.props.addOrder.bind(this, item)} value={item.name}>
          {item.name}
          </Button>
          </Grid>
        
      )
    })
    const sandwishOptions = sandwish.map((item, i) => {
      return (
        <Grid item xs>
      <Button variant="contained" color="#ffffff" key={item.name} onClick={this.props.addOrder.bind(this, item)} value={item.name}>
          {item.name}
          </Button>
          </Grid>
      )
    })
    return ( 
      <div>
        <div>
        <h5>cafe</h5>
        <Grid container spacing={1}>{coffeOptions}</Grid>
        </div>
        <div>
        <h5>sandwish</h5>
        <Grid container spacing={1}>{sandwishOptions}</Grid> 
        </div>
        </div>
    )
  }
}

>>>>>>> f9647e976d0eed63c80feadeedcf109e573679d1
