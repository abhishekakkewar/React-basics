import React, { Component } from 'react'

class Dropdown extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             contries:[
                {name: "India" , states:["Maharashtra", "Chattisgadd", "MP", "UP", "Gujrat", "Rajsthan"]},
                {name: "Nepal" , states:["N1", "N2", "N3", "N4", "N5", "N6"]},
                {name: "Bhutan" , states:["B1", "B2", "B3", "B4", "B5", "B6"]},
             ],
             states:[],
             selectedCountry : '',
            
        };
        
    }

    selectContry(e){
        this.setState({selectedCountry: e.target.value});
        this.setState({states: this.state.contries.find(x => e.name === e.target.value).states})
    }

    // componentDidMount(){
    //     this.setState({
    //         countries : [
    //             {name: "India" , states:["Maharashtra", "Chattisgadd", "MP", "UP", "Gujrat", "Rajsthan"]},
    //             {name: "Nepal" , states:["N1", "N2", "N3", "N4", "N5", "N6"]},
    //             {name: "Bhutan" , states:["B1", "B2", "B3", "B4", "B5", "B6"]},
    //         ]
    //     });
    // }

  
    
    render() {
        return (
            <div className="container">
                <div classname= "row">
                    <h2>ReactJs dependent Dropdown - country, state and city</h2>
                
                    <select value={this.state.selectedCountry} onChange={()=>this.selectCountry}>
                        <option>--select--</option>
                        {this.state.contries.map(x=>{
                            return <option>{x.name}</option>
                        })}
                    </select>
                    <select>
                        <option >---------</option>
                        {
                            this.state.states.map(x=>{
                                return <option>{x}</option>
                            })
                        }
                    </select>
                
                
                
                </div>
            </div>
        )
    }
}

export default Dropdown


