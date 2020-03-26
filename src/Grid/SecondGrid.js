import React from 'react';
import MaterialTable from 'material-table';
import {Route, BrowserRouter as Router, Switch,NavLink} from 'react-router-dom';
import axios from 'axios';


export default function SecondGrid({match}){
    const [entries, setEntries] = React.useState({
        data: [
            {
                _id:"",
                UserStory: "",
                Description: "",
                Technology: "",
                Storypoints: "",
                Status:"",
                QADefects:"",
                ProdDefectsCount:"",
                Workedby:"",
                PeerReviewDone:"",
                PeerReviewDoneby:""
            }
        ]
    });

  const [state] = React.useState({
        reviewstatus: [],
        columns :  [
            { title: 'User Story', field: 'UserStory'},
            {cellStyle: {width: 100,minWidth: 100},headerStyle:{width: 150,minWidth: 200},
                         title: 'Description', field: 'Description'},
            { title: 'Technology', field: 'Technology'},
            { title: 'Story Points', field: 'Storypoints'},
            { title: 'Status', field: 'Status'},
            { title: '#QADefects', field: 'QADefects'},
            { title: '#ProdDefects', field: 'ProdDefectsCount'},
            { title: 'Assigned To', field: 'Workedby'},
            { title: 'Peer Review Status', field: 'PeerReviewDone'},
            { title: 'Peer Review Done By', field: 'PeerReviewDoneby'}
          ]
  })

    React.useEffect(() => {
            axios.get(`http://localhost:5000/api/getAppSummary?app=${match.params.app}`)
                 .then(response => {
                     console.log(response);
            let data = [];
            response.data.forEach(element => {
                data.push({
                _id: element._id,
                UserStory: element.UserStory,
                Description: element.Description,
                Technology: element.Technology,
                Storypoints: element.Storypoints,
                Status: element.Status,
                QADefects: element.QADefects,
                ProdDefectsCount: element.ProdDefectsCount,
                Workedby: element.Workedby,
                PeerReviewDone: element.PeerReviewDone,
                PeerReviewDoneby: element.PeerReviewDoneby
            });
         });
        setEntries({ data: data });
        console.log(data);
    })
    .catch(function(error) {
            console.log(error);
        });
    }, []);
        
      return (
            <div style = {{width : "100%",paddingTop : "10px",fontFamily : "Trebuchet MS"}}>
                <MaterialTable
                    title={<b style = {{fontSize : "16px"}}>{match.params.app}</b>}
                    columns={state.columns}
                    data={entries.data}
                //     data={query => new Promise((resolve, reject) => {
                //         fetch(`http://localhost:5000/api/getAppSummary?app=${match.params.app}`)
                //           .then(response => response.json())
                //           .then(result => {
                //             resolve({
                //               data: result
                //             })
                //         })
                //     })
                // }            
                    options={{ paging: false , sorting : false, headerStyle : {backgroundColor : "rgb(47, 155, 255)",color :"white", fontFamily : "Trebuchet MS"} }}
                    editable ={{ onRowUpdate: (newData, oldData) =>
                        new Promise(resolve => {
                            setTimeout(() => {
                            resolve();
                            const data = [...entries.data];
                                        data[data.indexOf(oldData)] = newData;
                                        axios.post(`http://localhost:5000/createDeliveryStatus?app=${match.params.app}`,newData,{
                                                params: {
                                                    _id: entries.data[0]._id
                                                }
                                            })
                                            .then(res => console.log(res.data));
                                            console.log(data)
                                             setEntries({ ...entries, data});
                                        // return { ...prevState, data };
                                    },600);
                                    })
                                }}
                  />
              
        </div>
      );
  }
  
  
