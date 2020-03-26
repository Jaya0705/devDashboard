const initial ={
    app: [
                {title: "Digitization"},
                {title: "Fresh2PI"},
                {title: "GWFM"},{title: 'GSS'},{title: "SIT"},{title: "Donation Tracking"},{title: "BSA"}
            ]
        }


const AppReducer= (state = initial, action) =>{
    switch(action.type){
        case "DISPLAY_APPLICATION":
            return [...state];

        default: return state
}

}

export default AppReducer;