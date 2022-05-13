// React
import React from "react";
import {Link} from 'react-router-dom';
// Material Ui
import Grid from '@material-ui/core/Grid';

export default function Items({products}) {

  return (
    <Grid container direction="row" justifyContent="space-evenly" alignItems="center" id="item-container">
      {products.map((product)=>{
        const {id,category,title,image,price}=product
        return(
          <Grid item={true} lg={4} md={4} sm={6} xs={12} className="gridItems" key={id}>
            <div className="cardItems" >
              <div>
                <Link to={`/tienda/${category}/${id}`}><img src={image} alt="prod" className="cardImage"></img></Link>
              </div>
              <div>
                <h2><Link className="cardTitle" to={`/tienda/${category}/${id}`}>{title}</Link></h2>
                <h3 className="cardDescription">Precio: {price}</h3>
                <button className="cardButton"><Link to={`/tienda/${category}/${id}`}>Comprar</Link></button>
              </div>
            </div>
          </Grid>
        )
      })}
    </Grid>
  )
}
