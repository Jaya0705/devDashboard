import React from 'react';
import MaterialTable from 'material-table';
import {Route, BrowserRouter as Router, Switch,NavLink} from 'react-router-dom';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Application', field: 'appName', editable: 'never' },
      { title: '#UserStories', field: 'userStories', type: 'numeric', editable: 'never'  },
      { title: '#StoryPoints', field: 'storyPoints', type: 'numeric', editable: 'never'  },
      { title: '#ProdDefects', field: 'prodDefectCounts', type: 'numeric', editable: 'never' },
      { title: 'R/A/G', field: 'rag', editable: 'never'},
      { title: 'POC', field: 'poc', editable: 'never' },
      { headerStyle:{width: 150,minWidth: 200},title: 'Key Highlights', field: 'keyHighlights'},
      { headerStyle:{width: 150,minWidth: 150},title: 'Risks / Blockages', field: 'risks'},
      { title: 'Appreciation', field: 'appreciation'},
    ],
    data: [
        { 
            appName: 'Digitization', 
            userStories : 5,
            storyPoints : 10,
            prodDefectCounts : 100,
            appreciation : "Good Job!",
            rag : 'R',
            poc : 'xyz',
            keyHighlights : "Key Highlights for Digitization",
            risks : "Risks for digitization",
        },
        { 
            appName: 'SIT', 
            userStories : 10,
            storyPoints : 50,
            prodDefectCounts : 100,
            appreciation : "Good Job!",
            rag : 'A',
            poc : 'abc',
            keyHighlights : "Key Highlights for SIT",
            risks : "Risks for SIT"
        }
    ],
  });

  return (
      <div style = {{paddingTop : "25px", paddingRight : "150px", fontFamily : "Trebuchet MS",marginRight : "33px"}}>
        <MaterialTable
            title={<b style = {{fontSize : "16px"}}>Application Details</b>}
            columns={state.columns}
            data={state.data}
            options={{ paging: false , sorting : false, headerStyle : {backgroundColor : "rgb(47, 155, 255)",color :"white", fontFamily : "Trebuchet MS"} }}
            style = {{width : "100%", left : "90px"}}
            //editable={{
                      // onRowAdd: newData =>
                      //       new Promise(resolve => {
                      //           setTimeout(() => {
                      //           resolve();
                      //           setState(prevState => {
                      //               const data = [...prevState.data];
                      //               data.push(newData);
                      //               return { ...prevState, data };
                      //           });
                      //     }, 600);
                      // }),
                      // onRowUpdate: (newData, oldData) =>
                      //     new Promise(resolve => {
                      //       setTimeout(() => {
                      //         resolve();
                      //         if (oldData) {
                      //           setState(prevState => {
                      //             const data = [...prevState.data];
                      //             data[data.indexOf(oldData)] = newData;
                      //             return { ...prevState, data };
                      //           });
                      //         }
                      //       }, 600);
                      // }),
                      // onRowDelete: oldData =>
                      //   new Promise(resolve => {
                      //     setTimeout(() => {
                      //       resolve();
                      //       setState(prevState => {
                      //         const data = [...prevState.data];
                      //         data.splice(data.indexOf(oldData), 1);
                      //         return { ...prevState, data };
                      //       });
                      //     }, 600);
                      //   }),
                  //}}
            />
    </div>
  );
}