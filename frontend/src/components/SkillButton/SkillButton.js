import React from 'react'
import { StyledSkillButton } from './SkillButton.styled';

function SkillButton({skill, click}) {
    

    return (
        <StyledSkillButton onClick={() => click(skill)}>
            <i class="fas fa-plus"></i>
            <p>{skill}</p>
        </StyledSkillButton>
    )
}

export default SkillButton
