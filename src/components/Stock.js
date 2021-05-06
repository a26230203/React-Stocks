import React from 'react'

const Stock = (props) => (
  <div>

    <div className="card">
      <div onClick={props.addPortfolio 
                  ? () => props.addPortfolio(props.stock) 
                  : () => props.sellStock(props.stock)} className="card-body">
                    
        <h5 className="card-title">{
             props.stock.name
        }</h5>
        <p className="card-text">{
            //ticker: stock price
            `${props.stock.ticker}: ${props.stock.price}` 
          }</p>
      </div>
    </div>


  </div>
);
export default Stock
