import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  state = {
    stocks: [],
    filter: 'All',
    sorted: false
    // portfolio: [],
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks') 
      .then(res=> res.json())
      .then(stock => this.setState({
        stocks: stock.map(stock=> {
          return {...stock, onPortfolio:false}
        })
      }))
      // .then(stock => this.setState({
      //   stocks: stock
      // }))
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

  // addPortfolio = (stockObj) => {
  //     this.setState({
  //       portfolio: [...this.state.portfolio, stockObj]
  //     })
  // }



  sellStock = (stockObj) => {

    this.setState({
        stocks: this.state.stocks.map(stock => {
          if(stock === stockObj) {
            return {...stock, onPortfolio:false}
          }else {
            return stock
          }
        })
      })

    // let index = this.state.stocks.findIndex(stock => stock.id === stockObj.id)
    // let resultArry = [...this.state.stocks]
    // resultArry.splice(index, 1)

    // this.setState({
    //       stocks: resultArry
    // })
  }


  sortStock = (e) => {

    this.setState({
      filter:  e
    })


  }

  render() {
      let displayStock = []   

      if (this.state.filter === "All") {

        displayStock = this.state.stocks
  
    } else if(this.state.filter === "Alphabetically") {
        displayStock =  [...this.state.stocks].sort((a, b) => a.name.localeCompare(b.name))
    }else if (this.state.filter === "Price") {
      displayStock = [...this.state.stocks].sort((a, b) => a.price - b.price)
    }else if (this.state.filter === "Tech") {

      displayStock = [...this.state.stocks].filter(stock => stock.type === this.state.filter)

    }else if (this.state.filter === "Sportswear") {

      displayStock = [...this.state.stocks].filter(stock => stock.type === this.state.filter)

    }else if (this.state.filter === "Finance") {

      displayStock = [...this.state.stocks].filter(stock => stock.type === this.state.filter)

    }



    let portfolioStock = this.state.stocks.filter(stock => stock.onPortfolio === true)

    return (
      <div>
        <Header/>
        <MainContainer stock={displayStock} addPortfolio={this.addPortfolio}  
        portfolioStock={/*this.state.portfolio*/  portfolioStock } sortStock={this.sortStock} 
        sorted={this.state.sorted} sellStock={this.sellStock}/>
      </div>
    );
  }
}

export default App;
