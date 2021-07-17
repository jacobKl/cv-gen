import eduIcons from '../assets/eduIcons.json';
import skillIcons from '../assets/skillsIcons.json';

export function getEduIcon(iconId){
    return eduIcons.icons[iconId];
}

export function getSkillIcon(iconId){
    return skillIcons.icons[iconId];
}