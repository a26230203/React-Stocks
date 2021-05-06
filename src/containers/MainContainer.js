import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar sortStock={this.props.sortStock} check={this.props.check}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stock={this.props.stock} addPortfolio={this.props.addPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolioStock={this.props.portfolioStock} sellStock={this.props.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
