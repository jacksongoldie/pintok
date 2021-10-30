import { useState } from 'react';


function AddNew({ getNewVideo }){

    const blankForm = {
        title: "",
        category: "",
        notes: "",
        likes: 0,
        time: "",
        video: ""
    }
    const [formData, setFormData] = useState(blankForm)

    function handleOnChange(e){
        const name = e.target.name;
        let value = e.target.value

        setFormData({
        ...formData,
        [name]: value,
    });
    }

    function handleSubmit(e){
        e.preventDefault()

        fetch(`http://localhost:3004/videos`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(data => getNewVideo(data))
        setFormData(blankForm)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Category: 
                {/*default value allows for placeholder while disabled keeps it from being selected*/}
                <select name="category" value={formData.category} onChange={handleOnChange} >
                    <option value="" defaultValue disabled hidden>Select...</option>
                    <option value="low-impact">Low Impact</option>
                    <option value="meditation">Meditation</option>
                    <option value="pilates">Pilates</option>
                    <option value="yoga">Yoga</option>
                    <option value="other">Other</option>
                </select>
            </label>
            <label>
                Title:  
                <input type="text" name="title" onChange={handleOnChange} value={formData.title}/>
            </label>
            <label>
                Notes: 
                <input type="text" name="notes" onChange={handleOnChange} value={formData.notes}/>
            </label>
            <label>
                Length: 
            <select name="time" value={formData.time} onChange={handleOnChange} >
                    <option value="" defaultValue disabled hidden>Select...</option>
                    <option value="10-15min">10-15 minutes</option>
                    <option value="15-20min">15-20 minutes</option>
                    <option value="20-30min">20-30 minutes</option>
                    <option value="30-60min">30-60 minutes</option>
                    <option value="overhour">1 hour or longer</option>
                </select>
            </label>
            <label>
                URL:  
                <input type="text" name="video" onChange={handleOnChange} value={formData.video}/>
            </label>
                <button type="submit" name="Submit">Add Video</button>
        </form>
    )
}

export default AddNew;