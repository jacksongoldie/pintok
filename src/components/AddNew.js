import { useState } from 'react';


function AddNew({ getNewVideo }){

    const blankForm = {
        title: "",
        category: "",
        comments: [],
        likes: 0,
        time: "",
        video: ""
    }
    const [formData, setFormData] = useState(blankForm)

    function handleOnChange(e){
        const name = e.target.name;
        let value = e.target.value
        if(name !== 'comments'){
            setFormData({
            ...formData,
            [name]: value,
        })}
        else{
            setFormData({
                ...formData,
                [name]: [value]
            })
        };
    }

    function handleSubmit(e){
        e.preventDefault()

        fetch(`https://6390cef665ff4183111f9f23.mockapi.io/mock/videos`,{
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
        <div className='bg-blue-300 py-6 flex items-center justify-center'>
            <form className='bg-white shadow-2xl rounded-lg p-14 pt-6 pb-8 m-4 md:items-center' onSubmit={handleSubmit}>
                    <label className='py-4 outline-none placeholder-gray-500 font-bold focus:border-blue-700'>
                    Category: 
                    <select className='w-full px-4 py-2 shadow border-b-2 rounded border-blue-500 text-md text-gray-700 placeholder-gray-500 leading-tight focus:border-blue-700' name="category" value={formData.category} onChange={handleOnChange} >
                        {/*default value allows for placeholder while disabled keeps it from being selected*/}
                        <option value="" defaultValue disabled hidden>Select...</option>
                        <option value="low-impact">Low Impact</option>
                        <option value="meditation">Meditation</option>
                        <option value="pilates">Pilates</option>
                        <option value="yoga">Yoga</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <label className='outline-none placeholder-gray-500 font-bold focus:border-blue-700'>
                    Title:  
                    <input className='w-full px-4 py-2 shadow border-b-2 rounded border-blue-500 text-md text-gray-700 placeholder-gray-500 leading-tight focus:border-blue-700' type="text" name="title" onChange={handleOnChange} value={formData.title}/>
                </label>
                <br />
                <label className='py-4 outline-none placeholder-gray-500 font-bold focus:border-blue-700'>
                    Comments: 
                    <input className='w-full px-4 py-2 shadow border-b-2 rounded border-blue-500 text-md text-gray-700 placeholder-gray-500 leading-tight focus:border-blue-700' type="text" name="comments" onChange={handleOnChange} value={formData.comments}/>
                </label>
                <br />
                <label className='py-4 outline-none placeholder-gray-500 font-bold focus:border-blue-700'>
                    Length: 
                <select className='w-full px-4 py-2 shadow border-b-2 rounded border-blue-500 text-md text-gray-700 placeholder-gray-500 leading-tight focus:border-blue-700' name="time" value={formData.time} onChange={handleOnChange} >
                        <option value="" defaultValue disabled hidden>Select...</option>
                        <option value="10-15min">10-15 minutes</option>
                        <option value="15-20min">15-20 minutes</option>
                        <option value="20-30min">20-30 minutes</option>
                        <option value="30-60min">30-60 minutes</option>
                        <option value="overhour">1 hour or longer</option>
                    </select>
                </label>
                <label className='py-4 outline-none placeholder-gray-500 font-bold focus:border-blue-700'>
                    URL:  
                    <input className='w-full px-4 py-2 shadow border-b-2 rounded border-blue-500 text-md text-gray-700 placeholder-gray-500 leading-tight focus:border-blue-700' type="text" name="video" onChange={handleOnChange} value={formData.video}/>
                </label>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2' type="submit" name="Submit">Add Video</button>
            </form>
        </div>
    )
}

export default AddNew;