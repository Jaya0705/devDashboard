const appState = {
    appKeys: ["---","Digitization", "Fresh2PI", "GWFM", "GSS", "SIT", "Donation Tracking", "BSA"],
    app : [      
            {
                id: 'Digitization',
                keyHighlights : [],
                risks :[],
                incidents: {
                            team : '',
                            queueName: '',
                            backlogTicketCount: '',
                            ageGTThirty : '',
                            ageBetween : '',
                            ageLTTwelve : '',
                            inflow: '',
                            externalTickets : '',
                            significantWork: ''
                            }
                },
            {
                id : 'Fresh2PI',
                keyHighlights : [],
                risks :[],
                incidents: {
                            team : '',
                            queueName: '',
                            backlogTicketCount: '',
                            ageGTThirty : '',
                            ageBetween : '',
                            ageLTTwelve : '',
                            inflow: '',
                            externalTickets : '',
                            significantWork: ''
                            }
            },
            
            {
                id : 'GWFM',
                keyHighlights : [],
                risks :[],
                incidents: {
                            team : '',
                            queueName: '',
                            backlogTicketCount: '',
                            ageGTThirty : '',
                            ageBetween : '',
                            ageLTTwelve : '',
                            inflow: '',
                            externalTickets : '',
                            significantWork: ''
                            }
            },

            {
                id : 'GSS',
                keyHighlights : [],
                risks :[],
                incidents: {
                            team : '',
                            queueName: '',
                            backlogTicketCount: '',
                            ageGTThirty : '',
                            ageBetween : '',
                            ageLTTwelve : '',
                            inflow: '',
                            externalTickets : '',
                            significantWork: ''
                            }
            }, 

            {
                id : 'SIT',
                keyHighlights : [],
                risks :[],
                incidents: {
                            team : '',
                            queueName: '',
                            backlogTicketCount: '',
                            ageGTThirty : '',
                            ageBetween : '',
                            ageLTTwelve : '',
                            inflow: '',
                            externalTickets : '',
                            significantWork: ''
                            }
            },

            {
                id : 'Donation Tracking', 
                keyHighlights : [],
                risks :[],
                incidents: {
                            team : '',
                            queueName: '',
                            backlogTicketCount: '',
                            ageGTThirty : '',
                            ageBetween : '',
                            ageLTTwelve : '',
                            inflow: '',
                            externalTickets : '',
                            significantWork: ''
                            }
            },

            {
                id : 'BSA',
                keyHighlights : [],
                risks :[],
                incidents: {
                            team : '',
                            queueName: '',
                            backlogTicketCount: '',
                            ageGTThirty : '',
                            ageBetween : '',
                            ageLTTwelve : '',
                            inflow: '',
                            externalTickets : '',
                            significantWork: ''
                            }
            }

        ]
}

const rootReducer = (state = appState, action) => {
    switch (action.type) {
        case 'GET_INFO': {
               return {
                   ...state,
                   appKeys: state.appKeys 
               }                              
        }

        case 'PUT_DATA': {
            const appValueFromComponent = action.payload.appName
            return {
                ...state,
                app: [
                   ...state.app.map(item => {
                        if(item.id === appValueFromComponent) {
                            return {
                                ...item,
                                keyHighlights : item.keyHighlights.concat(action.payload.keyToRedux),
                                risks : item.risks.concat(action.payload.riskToRedux),
                                team: item.incidents.team.concat(action.payload.teamToRedux),
                                queueName : item.incidents.queueName.concat(action.payload.queueNameToRedux),
                                backlogTicketCount : item.incidents.backlogTicketCount.concat(action.payload.backlogToRedux),
                                ageGTThirty : item.incidents.ageGTThirty.concat(action.payload.ageThirtyToRedux),
                                ageBetween : item.incidents.ageBetween.concat(action.payload.ageBetweenToRedux),
                                ageLTTwelve : item.incidents.ageLTTwelve.concat(action.payload.ageTwelveToRedux),
                                inflow: item.incidents.inflow.concat(action.payload.inflowToRedux),
                                externalTickets : item.incidents.externalTickets.concat(action.payload.externalTicketsToRedux),
                                significantWork : item.incidents.significantWork.concat(action.payload.significantWorkToRedux)
                            }
                        } 
                   return item;
                 })
                ]        
            }
        }

        default : return state;
    } 
}

export default rootReducer;