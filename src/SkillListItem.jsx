import React from 'react';
import './SkillListItem.css'

function SkillListItem({skill, index}){
    return(
        <li className='SkillListItem'>{skill.name}<span className='level'>LEVEL {skill.level}</span></li>
    )
}

export default SkillListItem