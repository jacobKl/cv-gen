import { UPDATE_PERSONAL, ADD_EDUCATION, LOCAL_STORAGE_BACKUP, EDIT_EDUCATION } from '../actions/index';

const eduPart = { name: "", from: "", to: "", position: "" }

const CvDataReducer = (state, action) => {
    const { field, payload, id } = action;

    switch(action.type){
        case UPDATE_PERSONAL:
            return {
                ...state,
                personal: {
                    ...state.personal,
                    [field]: payload
                }
            }
        case ADD_EDUCATION:
            return {
                ...state,
                education: [
                    ...state.education,
                    eduPart
                ]
            }
        case LOCAL_STORAGE_BACKUP:
            localStorage.setItem("data",JSON.stringify(state));
            return state;
        case EDIT_EDUCATION:
            return {
                ...state,
                education: state.education.map(
                    (education, i ) => i === id ?  { ...education, [field]: payload } : education
                )
            }
        default:
            return state
    }
}

export default CvDataReducer