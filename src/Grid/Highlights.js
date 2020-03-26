import React from 'react';
import axios from 'axios'


const textAreaStyles = {
    width: 800,
    margin: 5,
    height: 100
  };

const headerAreaStyles = {
    height:"20px",
    fontFamily : "Trebuchet MS",
    backgroundColor : "rgb(47, 155, 255)",
    width: "110px",
    color :"white",
    paddingLeft :"8px"
}

export default class Highlights extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            risksInput:'',
            appreciationInput:'',
            highlightsList: [],
            risksList:[],
            appreciationList:[]
    };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeRisks = this.handleChangeRisks.bind(this);
        this.handleChangeAppreciation = this.handleChangeAppreciation.bind(this);
      }

      handleSubmit(e) {
        e.preventDefault()
        
        const payload ={
            highlightsList: this.state.userInput,
            risksList: this.state.risksInput,
            appreciationList: this.state.appreciationInput
        };
        console.log(payload);

        axios.post('http://localhost:5000/createHighlights', {payload})
                    .then((res) => {
                        window.alert("Data inserted successfully")
                        console.log(res.data)
                    }).catch((error) => {
                        console.log(error)
                });

        this.setState({
             highlightsList: '', 
             risksList: '' ,
             appreciationList:''
                })
      }
      handleChange(e) {
        this.setState({
          userInput: e.target.value
        });
      }
    
      handleChangeRisks(e){
          this.setState({
            risksInput: e.target.value
          })
      }
      
      handleChangeAppreciation(e){
        this.setState({
            appreciationInput: e.target.value
        })
     }

    //  handleIncludeHighlights = async () => {  
    //     const {highlightsList,risksList,appreciationList} = this.state  
    //     const payload = {highlightsList,risksList,appreciationList}

    //     await insertHighlights(payload).then(res => {
    //         window.alert(`Data inserted successfully`)
    //         this.setState({
    //             highlightsList: '',
    //             risksList: '',
    //             appreciationList: '',
    //         })
    //     })
    // }

    render(){
     return(
        <form onSubmit={this.handleSubmit}>
                <b style={headerAreaStyles}>Key highlights: </b>
                    <div style={{paddingTop : "5px"}}>
                        <textarea
                                onChange={this.handleChange}
                                value={this.state.userInput}
                                style={textAreaStyles}
                                placeholder="Please input keyhighlights." /><br />
                    </div>                         
                <br />          
                <b style={headerAreaStyles}>Risks/Blockages: </b>
                    <div style={{paddingTop : "5px"}}>
                        <textarea
                                onChange={this.handleChangeRisks}
                                value={this.state.risksInput}
                                style={textAreaStyles}
                                placeholder="Please input risks/blockages." /><br />
                    </div>                                   
                <br /> 
                <b style={headerAreaStyles}>Appreciation</b>
                    <div style={{paddingTop : "5px"}}>
                        <textarea
                                onChange={this.handleChangeAppreciation}
                                value={this.state.appreciationInput}
                                style={textAreaStyles}
                                placeholder="Please input your feedback." /><br />
                    </div>   
                <br /> 
                  <button type="submit">Save</button>
            </form>
    );
}
}