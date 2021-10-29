import { useState } from 'react';


function AddNew({ getNewVideo }){

    const blankForm = {
        title: "",
        category: "",
        description: "",
        date: "",
        video: ""
    }
    const [formData, setFormData] = useState(blankForm)

    function handleOnChange(e){
        const name = e.target.name;
        let value = e.target.value;

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
        getNewVideo(formData)
        setFormData(blankForm)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Category: 
                {/*default value allows for placeholder while disabled keeps it from being selected*/}
                <select name="category" value={formData.category} onChange={handleOnChange} >
                    <option value="" selected disabled hidden>Select...</option>
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
                Description: 
                <input type="text" name="description" onChange={handleOnChange} value={formData.description}/>
            </label>
            <label>
                URL:  
                <input type="text" name="video" onChange={handleOnChange} value={formData.video}/>
            </label>
            <label>
                Date Added:  
                <input type="text" name="date" onChange={handleOnChange} value={formData.date}/>
            </label>
                <input type="submit" name="Submit" />
        </form>
    )
}

export default AddNew;