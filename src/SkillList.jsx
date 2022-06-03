import React from 'react';
import SkillListItem from './SkillListItem';
import './SkillList.css'

function SkillList({skills}){
    return(
        <ul className='SkillList'>
            {skills.map((s, idx) => (
                <SkillListItem skill={s} index={idx}/>
            ))}
        </ul>
    )
}

export default SkillList;