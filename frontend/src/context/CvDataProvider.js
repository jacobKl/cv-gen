import React, { useReducer, useEffect } from 'react'
import CvDataReducer from '../reducers/CvDataReducer';

export const CvData = React.createContext();

let baseData = {
    personal: {
        name: "",
        surname: "",
        address: "",
        email: "",
        postcode: "",
        phone: "",
        resume: "",
        imagePath: "",
    },
    education: [
        {
            name: "",
            from: "",
            to: "",
            position: ""
        }
    ]
}

function CvDataProvider({children}) {


    const [ state, dispatch ] = useReducer( CvDataReducer, JSON.parse(localStorage.getItem('data')) || baseData );

    return (
        <CvData.Provider value={{state,dispatch}}>
            {children}
        </CvData.Provider>
    )
}

export default CvDataProvider
