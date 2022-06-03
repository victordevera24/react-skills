import React, {useState} from 'react';
import './NewSkillForm.css'

function NewSkillForm({addSkill}){
    const [newSkill, setNewSkill] = useState({
        name:'', level: 1
    })

    function handleChange(evt){
        const newFormData = {...newSkill, [evt.target.name]: evt.target.value};
        setNewSkill(newFormData)
    }

    function handleAddSkill(event){
        event.preventDefault();
        addSkill(newSkill);
        console.log(newSkill)
        setNewSkill({name:'', level: 1});
    }

    return (
        <form className="NewSkillForm" onSubmit={handleAddSkill}>
            <label>Skill</label>
            <input 
                name="name"
                value={newSkill.name}
                onChange={handleChange}
            />
            <label>Level</label>
            <select name="level"
                    onChange={handleChange}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button type="submit">ADD SKILL</button>
        </form>
    )
}

export default NewSkillForm;