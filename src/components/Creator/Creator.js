import React, { useContext } from 'react'
import { CvData } from '../../context/CvDataProvider';
import { CreatorPart } from './CreatorStyled';
import PersonalSection from '../PersonalSection/PersonalSection';
import EducationSection from '../EducationSection/EducationSection';
import { Route, useHistory } from 'react-router-dom';
import { LOCAL_STORAGE_BACKUP} from '../../actions/index';


function Creator() {

    let history = useHistory()

    const { dispatch } = useContext( CvData )

    const nextStep = (stepId) => {
        dispatch({ type: LOCAL_STORAGE_BACKUP });
        history.push(`/${stepId}`)
    }


    return (
        <CreatorPart>
                <Route exact path="/"  render={() => (<PersonalSection next={nextStep} />)}/>
                <Route exact path="/1"  component={EducationSection}/>
        </CreatorPart>
    )
}

export default Creator
