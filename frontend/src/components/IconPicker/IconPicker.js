import React, { useContext } from 'react'
import IconButton from '../IconPickerOption/IconPickerOption';
import { CvData } from '../../context/CvDataProvider';
import { SET_ICON } from '../../actions/index';

import { IconPickerWrapper } from './IconPicker.styled';

function IconPicker({set, id}) {
    const { state, dispatch } = useContext(CvData)

    const { icons, dispatchTo } = set;

    const handleIconClick = (index) => {
        dispatch({type: SET_ICON, payload: [index, dispatchTo], id: id})
    }
    return (
        <IconPickerWrapper activeIconIndex={state.[dispatchTo][id].icon}>
            {icons.map((icon, i) => (<IconButton icon={icon} click={handleIconClick} key={i} index={i}/>))}
        </IconPickerWrapper>
    )
}

export default IconPicker
