import { EDIT_PERSONAL, ADD_EDUCATION, LOCAL_STORAGE_BACKUP, EDIT_EDUCATION, SET_FILE_PATH, SET_ICON, SET_STEP, ADD_SKILL, EDIT_SKILL_NAME } from '../actions/index';

const eduPart = { name: "", from: "", to: "", position: "" };
const skillPart = { name: "", steps: 0, description: "" }

const CvDataReducer = (state, action) => {
    const { field, payload, id } = action;
    switch(action.type){
        case EDIT_PERSONAL:
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
        case SET_FILE_PATH:
            return {
                ...state,
                personal: {
                    ...state.personal,
                    imagePath: payload
                }
            }
        case SET_ICON:
            const [ iconId, dispatchTo ] = payload;
            return {
                ...state,
                [dispatchTo]: state.[dispatchTo].map(
                    (item, i) => i === id ? {...item, icon: iconId} : item
                )
            }
        case SET_STEP:
            const [ step, dispatchToStep ] = payload;
            return {
                ...state,
                [dispatchToStep]: state.[dispatchToStep].map(
                    (item, i) => i === id ? {...item, steps: step} : item
                )
            }
        case ADD_SKILL:
            const newSkillPart = { ...skillPart };
            newSkillPart.name = payload;
            return {
                ...state,
                skills: [
                    ...state.skills,
                    newSkillPart
                ]
            }
        case EDIT_SKILL_NAME:
            return {
                ...state,
                skills: state.skills.map(
                    (item, i) => i === id ? {...item, name: payload} : item
                )
            }     
        default:
            return state
    }
}

export default CvDataReducer