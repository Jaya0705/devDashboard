import { PieChart } from 'react-chartkick';
import 'chart.js';
import React from 'react'; 

// const [state, setState] = React.useState({
//     columns: [
//       { title: '#UserStories', field: 'userStories', editable: 'never'},
//       { title: 'Description', field: 'description', editable: 'never' },
//       { title: 'Technology', field: 'technology', editable: 'never'  },
//       { title: '#StoryPoints', field: 'storyPoints', type: 'numeric', editable: 'never'  },
//       { title: 'Status', field: 'status', editable: 'never' },
//       { title: 'QA Defects', field: 'defectsQA'},
//       { title: '#ProdDefects', field: 'prodDefects',editable: 'never'},
//       { title: 'Worked by', field: 'workedBy', editable: 'never'},
//       { title: 'Peer Review Status', field: 'peerReviewStatus', editable: 'never'},
//       { title: 'Peer Review Done by', field: 'peerReviewDoneBy', editable: 'never'}
//     ],
//     reviewstatus : [],
//     data: [
//         { 
//             userStories : 'User Story# IP-6168',
//             description: 'Change in ISAM sync schedule', 
//             technology : 'Unix shell scripting',
//             storyPoints : 7,
//             status :"Build",
//             defectsQA : 0,
//             prodDefects : 0,
//             workedBy :"Guru",
//             peerReviewStatus : "Y",
//             peerReviewDoneBy :"Thiru"
//         },
//         { 
//             userStories : 'User Story#RM-SS5342',
//             description: 'Develop a new screen on the Receiving app to receive dex', 
//             technology : 'React/Native',
//             storyPoints : 12,
//             status :"Analysis",
//             defectsQA : "NA",
//             prodDefects : 'NA',
//             workedBy :"Manoj",
//             peerReviewStatus : "N",
//             peerReviewDoneBy :""
//         }
//     ],
//   });


export default class Pie extends React.Component{
    state = {
        count: []
    }


    componentDidMount() {
        this.fetchUserstories();
    }

   fetchUserstories() {
       fetch(`http://localhost:5000/api/getCount`)
         .then(response => response.json())
         .then(data =>
           this.setState({
             count: data
           })
         )
        // this.piechartArray();
    }

    // piechartArray() {
    //     for (let i = 0; i < this.state.userstories.length; i++) {
    //         var userStories = [];
    //         userStories.push([this.state.userstories[i].App , this.state.userstories[i].UserStory])
    //     }
    // }
    

    render(){
        console.log(this.state.count);
        return(
            <div style={{display : "flex", flexDirection:"row",margin: "0px 0px 0px -120px"}}>
                <div>
                    <PieChart id="userstory-chart" width="500px" height="250px" colors={["#F08080", "#00FFFF","#DA70D6","#FFC0CB","#FFF0F5","#87CEFA","#800080"]}  data ={this.state.count.map(pie=>([pie._id,pie.Userstory]))} />
                    &nbsp;
                    <div style={{textAlign :"center"}}>
                        <b>User Stories</b>
                    </div>      
                </div>
                <div>
                <PieChart id="storypoints-chart" width="500px" height="250px" colors={["#F08080", "#00FFFF","#DA70D6","#FFC0CB","#FFF0F5","#87CEFA","#800080"]}  data ={this.state.count.map(pie=>([pie._id,pie.Storypoint]))} />
                    {/* <PieChart colors={["#F08080", "#00FFFF","#DA70D6","#FFC0CB","#FFF0F5","#87CEFA","#800080"]} data={[["Digitization", 12], ["BSA", 20], ["Fresh 2PI",2], ["GWFM",47],["SIT",16],["GSS",33],["Donation Tracking",22]]} />    */}
                    &nbsp;
                    <div style={{textAlign :"center"}}>
                        <b>Story Points</b>
                    </div>  
                </div>
                <div>
                <PieChart id="proddefects-chart" width="500px" height="250px" colors={["#F08080", "#00FFFF","#DA70D6","#FFC0CB","#FFF0F5","#87CEFA","#800080"]}  data ={this.state.count.map(pie=>([pie._id,pie.Proddefects]))} />
                    {/* <PieChart colors={["#F08080", "#00FFFF","#DA70D6","#FFC0CB","#FFF0F5","#87CEFA","#800080"]} data={[["Digitization", 10], ["BSA", 47], ["Fresh 2PI",32], ["GWFM",20],["SIT",9],["GSS",17],["Donation Tracking",11]]} />    */}
                    &nbsp;
                    <div style={{textAlign :"center"}}>
                        <b>Production defects</b>
                    </div>  
                </div>      
            </div> 
                  
        );
    }
}