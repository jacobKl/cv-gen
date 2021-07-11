import React, {useContext} from 'react'
import { PreviewWrapper } from './Preview.styled';
import { CvData } from '../../context/CvDataProvider';


function Preview() {

    const { state } = useContext(CvData)
    return (
        <PreviewWrapper>
            <img style={{width: 200 + "px", height: 200 + "px", borderRadius: 50 + "%", objectFit: 'cover'}} src={`http://localhost:5000/uploads/${state.personal.imagePath}`} />
            <h3>{state.personal.name}</h3>
            <h3>{state.personal.surname}</h3>
            <h3>{state.personal.address}</h3>
            <h3>{state.personal.email}</h3>
            <h3>{state.personal.postcode}</h3>
            <h3>{state.personal.phone}</h3>
            <h3>{state.personal.resume}</h3>

            {state.education.map((item, i) => (<div key={i}>{item.name}</div>))}
        </PreviewWrapper>
    )
}

export default Preview
