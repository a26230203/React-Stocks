import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  state = {
    stocks: [],
    Alpcheck: false,
    PCheck: false
  }


  componentDidMount() {
    fetch('http://localhost:3000/stocks') 
      .then(res=> res.json())
        .then(stock => this.setState({
          stocks: stock.map(stock=> {
            return {...stock, onPortfolio:false}
          })
        }))
  }

  addPortfolio = (stockObj) => {
      this.setState({
        stocks: this.state.stocks.map(stock => {
          if(stock === stockObj) {
            return {...stock, onPortfolio:true}
          }else {
            return stock
          }
        })
      })
  }

  sortStock = (e) => {
    if(e.target.value === "Alphabetically") {
        this.setState({
          stocks: [...this.state.stocks].sort((a, b) => a.name.localeCompare(b.name)),
          Alpcheck: true
        })
    }else if (e.target.value === "Price") {
      this.setState({
        stocks: [...this.state.stocks].sort((a, b) => a.price - b.price),
        PCheck: true
      })
    }else if (e.target.value === "Tech") {
      this.setState({
        stocks: [...this.state.stocks].filter(stock => stock.type === e.target.value)
      })
    }else if (e.target.value === "Sportswear") {
      this.setState({
        stocks: [...this.state.stocks].filter(stock => stock.type === e.target.value)
      })
    }else if (e.target.value === "Finance") {
      this.setState({
        stocks: [...this.state.stocks].filter(stock => stock.type === e.target.value)
      })
    }
  }

  render() {
    let portfolioStock = this.state.stocks.filter(stock => stock.onPortfolio === true)

    return (
      <div>
        <Header/>
        <MainContainer stock={this.state.stocks} addPortfolio={this.addPortfolio} 
        portfolioStock={portfolioStock} sortStock={this.sortStock} Alpcheck={this.state.Alpcheck}
        PCheck={this.state.PCheck} />
      </div>
    );
  }
}

export default App;
