import React, { Component } from 'react'
export default class Bookname extends Component {
    constructor(props){
        super(props)
        this.state = {
            bookname : ["book1", "book2", "book3", "book4"],
            newBook : "",   
        }
    }
    updateValue = (event) =>{
        this.setState({ newBook: event.target.value})
    }
    newAddBook =()=>{
        this.setState({ bookname: [...this.state.bookname, this.state.newBook]})
    }  
    BookList = () => 
       this.state.bookname.map((item) => (          
               <li>{item}</li>          
           ))
    render() {
        return (
            <div>   
                <div>
                    <h1>BookList</h1>
                    {/* <ol>{this.state.bookname.map((items)=>(<li>{items}</li>))}</ol> */}
                    <ol> {this.BookList()} </ol>  
                </div>
                        <input type="text" value={this.state.newBook} onChange={this.updateValue}></input> 
                        <br></br>
                        <button onClick={this.newAddBook}>Add</button>
                </div>
        )
    }
}
