import React, { useState, useEffect } from 'react';
import '../sass/Project.scss';



const Project = (props) => {
    const [ isEditing, setIsEditing ] = useState(false);
    const [ data, setData ] = useState({});
    useEffect(()=>{
        fetch('/api/projects')
        .then(res => res.json())
        .then(data => setData(data[0]))
        .catch(err => console.log("Error:", err));
    }, [])

    const handleEditButton = () => {
        setIsEditing(!isEditing);
    }

    const handleInputChange = (name, value) => {
        setData({
            ...data,
            [name] : value
        })
    }
    const createdDate = data.createdDate ? data.createdDate.split('T')[0] : '';
    const completedDate = data.completedDate ? data.completedDate.split('T')[0] : 'In Development';
    if (isEditing) {

        return (
            <div className="project">
                <div className="project-header">
                    <h1 className="project__title">Project Info Page</h1>
                    <p onClick={handleEditButton} className="btn btn--edit">Save Changes</p>
                </div>
                <div className="project-entry">
                    <label htmlFor="name" className="project-entry__label">Project Name:</label>
                    <input name="name" type="text" className="project-entry__input"
                    value={data.name ? data.name : ''} 
                    onChange={(e)=>handleInputChange("name", e.target.value)}></input>
                </div>
                <div className="project-entry">
                    <label htmlFor="description" className="project-entry__label">Description:</label>
                    <textarea name="description" type="text" className="project-entry__input-text" rows="5" cols="40"
                        onChange={(e)=>handleInputChange("description", e.target.value)}>
                            {data.description ?  data.description : ''}
                        </textarea>
                </div> 
                <div className="project-entry">
                    <label htmlFor="githubIdentifier" className="project-entry__label">Github Identifier:</label>
                    <input name="githubIdentifier" type="text" className="project-entry__input"
                        value={data.githubIdentifier ?  data.githubIdentifier : ''}
                        onChange={(e)=>handleInputChange("githubIdentifier", e.target.value)}></input>
                </div> 
                <div className="project-entry">
                    <p class="project-entry__label">Status:</p>
                    <p class="project-entry__data">Active</p>
                </div> 
                <div className="project-entry">
                    <label htmlFor="location" className="project-entry__label">Location(s):</label>
                    <input name="location" type="text" className="project-entry__data"
                    value={data.location ? data.location : ''} 
                    onChange={(e)=>handleInputChange("location", e.target.value)}></input>
                </div>
                <div className="project-entry">
                    <label htmlFor="createdDate" className="project-entry__label">Created:</label>
                    <input name="createdDate" type="date" className="project-entry__data"
                    value={createdDate} 
                    onChange={(e)=>handleInputChange("createdDate", e.target.value)}></input>
                </div>
                <div className="project-entry">
                    <label htmlFor="completedDate" className="project-entry__label">Created:</label>
                    <input name="completedDate" type="date" className="project-entry__data"
                    value={completedDate} 
                    onChange={(e)=>handleInputChange("completedDate", e.target.value)}></input>
                </div>
                <div className="project-entry">
                    <label htmlFor="githubUrl" className="project-entry__label">Github URL:</label>
                    <input name="githubUrl" type="text" className="project-entry__data"
                    value={data.githubUrl ?  data.githubUrl : ''}
                    onChange={(e)=>handleInputChange("githubUrl", e.target.value)}></input>
                </div> 
                <div className="project-entry">
                    <label htmlFor="slackUrl" className="project-entry__label">Slack URL:</label>
                    <input name="slackUrl" type="text" className="project-entry__data"
                    value={data.slackUrl ?  data.slackUrl : ''}
                    onChange={(e)=>handleInputChange("slackUrl", e.target.value)}></input>
                </div> 
                <div className="project-entry">
                    <label htmlFor="googleDriveUrl" className="project-entry__label">Google Drive URL:</label>
                    <input name="googleDriveUrl" type="text" className="project-entry__data"
                    value={data.googleDriveUrl ?  data.googleDriveUrl : ''}
                    onChange={(e)=>handleInputChange("googleDriveUrl", e.target.value)}></input>
                </div> 
                <div className="project-entry">
                    <label htmlFor="videoConferenceLink" className="project-entry__label">Zoom Link:</label>
                    <input name="videoConferenceLink" type="text" className="project-entry__data"
                    value={data.videoConferenceLink ?  data.videoConferenceLink: ''}
                    onChange={(e)=>handleInputChange("videoConferenceLink", e.target.value)}></input>
                </div> 
                <div className="project-entry">
                    <label htmlFor="description" className="project-entry__label">Recruiting Categories:</label>
                    <textarea name="description" type="text" className="project-entry__input-text" rows="5" cols="40"
                        onChange={(e)=>handleInputChange("lookingDescription", e.target.value)}>
                            {data.lookingDescription ?  data.lookingDescription : ''}
                        </textarea>
                </div> 
                <div className="project-entry">
                    <p class="project-entry__label">Partners:</p>
                    <p class="project-entry__data">partners</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="project">
                <div className="project-header">
                    <h1 className="project__title">Project Info Page</h1>
                    <p onClick={handleEditButton} className="btn btn--edit">Edit Project</p>
                </div>
                <div className="project-entry">
                    <p class="project-entry__label">Name:</p>
                    <p class="project-entry__data">{data.name ?  data.name : ''}</p>
                </div> 
                <div className="project-entry">
                    <p class="project-entry__label">Description:</p>
                    <p class="project-entry__data">{data.description ?  data.description : ''}</p>
                </div> 
                <div className="project-entry">
                    <p class="project-entry__label">Github Identifier:</p>
                    <p class="project-entry__data">{data.githubIdentifier ?  data.githubIdentifier : ''}</p>
                </div> 
                <div className="project-entry">
                    <p class="project-entry__label">Status:</p>
                    <p class="project-entry__data">{data.projectStatus ?  data.projectStatus : ''}</p>
                </div> 
                <div className="project-entry">
                    <p class="project-entry__label">Location(s):</p>
                    <p class="project-entry__data">{data.location ?  data.location : ''}</p>
                </div> 
                <div className="project-entry">
                    <p class="project-entry__label">Created:</p>
                    <p class="project-entry__data">{createdDate}</p>
                </div> 
                <div className="project-entry">
                    <p class="project-entry__label">Completed:</p>
                    <p class="project-entry__data">{data.completedDate ?  data.completedDate : 'In Development'}</p>
                </div> 
                <div className="project-entry">
                    <p class="project-entry__label">Github URL:</p>
                    <p class="project-entry__data">{data.githubUrl ?  <a href={data.githubUrl} target="_blank">Github</a> : ''}</p>
                </div> 
                <div className="project-entry">
                    <p class="project-entry__label">Slack URL:</p>
                    <p class="project-entry__data">{data.slackUrl ?  <a href={data.slackUrl} target="_blank">Slack</a> : ''}</p>
                </div> 
                <div className="project-entry">
                    <p class="project-entry__label">google drive URL:</p>
                    <p class="project-entry__data">{data.googleDriveUrl ?  <a href={data.googleDriveUrl} target="_blank">Google Drive</a> : ''}</p>
                </div> 
                <div className="project-entry">
                    <p class="project-entry__label">VideoConference:</p>
                    <p class="project-entry__data">{data.videoConferenceLink ?  <a href={data.videoConferenceLink} target="_blank">github</a> : ''}</p>
                </div> 
                <div className="project-entry">
                    <p class="project-entry__label">recruiting categories:</p>
                    <p class="project-entry__data"><p class="project-entry__data">{data.lookingDescription ? data.lookingDescription : ''}</p></p>
                </div>
                <div className="project-entry">
                    <p class="project-entry__label">Partners:</p>
                    <p class="project-entry__data">{data.partners ? data.partners.join(', ') : ''}</p>
                </div>
            </div>
        )
    }
}

//Project ID, Name, Description, githubIdentifier, 
//Project Stus, Location(s), Created Date, Completed Date, 
//Github URL, Slack URL, googleDriveURL, Videoconference Link
//lookingDescription, recruitingCategories, partners

export default Project;