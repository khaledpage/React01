import React, { Component } from "react";
let id=0;
class History extends Component{

   mathe= function (x,y,o) {
        return eval(`${x}${o}${y}`)
    }
    render() {
        return(
            <div className="conatiner" style={{color: this.props.color}}>
                <h1>{this.props.id++}</h1>
                <h1>{this.props.oper}</h1>
                <h1>{this.this.mathe}</h1>
                <h1>{this.props.color}</h1>
               

            </div>
        )
      }

}
const values = [
    {id: 0, oper:"+", color:"red"},
    {id: 0, oper:"+", color:"red"},
]
const newArray = values.map(e => <History id={e.id} oper={e.oper} color={e.color} />)