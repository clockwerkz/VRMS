import React, { useState, useEffect } from 'react';
import '../sass/Project.scss';

//LFM - A way to tag roles that a current project is looking to fill? Tags?
//Project ID, Name, Description, githubIdentifier, 
//Project Stus, Location(s), Created Date, Completed Date, 
//Github URL, Slack URL, googleDriveURL, Videoconference Link
//lookingDescription, recruitingCategories, partners

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
    if (isEditing) {

        return (
            <div className="project">
                <div className="project-header">
                    <h1 className="project__title">Project Info Page</h1>
                    <p onClick={handleEditButton} className="btn btn--edit">Save Changes</p>
                </div>
                <div className="project-entry">
                    <label htmlFor="projectName" className="project-entry__label">Project Name:</label>
                    <input name="projectName" type="text" value={data.name ? data.name : ''} onChange={(e)=>handleInputChange("name", e.target.value)} className="project-name__data"></input>
                </div>
                <div className="project-entry">
                    <p class="project-entry__label">Description:</p>
                    <p class="project-entry__data">I'm baby vaporware hammock meh church-key kombucha typewriter. Asymmetrical gastropub gentrify pug vegan la croix man braid cray kinfolk hashtag hot chicken. </p>
                </div> 
                <div className="project-entry">
                <label htmlFor="projectName" className="project-entry__label">Github Identifier:</label>
                    <input name="projectName" type="text" value="githubidentifier" className="project-name__data"></input>
                </div> 
                <div className="project-entry">
                    <p class="project-entry__label">Status:</p>
                    <p class="project-entry__data">Active</p>
                </div> 
                <div className="project-entry">
                    <p class="project-entry__label">Location(s):</p>
                    <p class="project-entry__data">Los Angles, CA</p>
                </div> 
                <div className="project-entry">
                    <p class="project-entry__label">Created:</p>
                    <p class="project-entry__data">March 2020</p>
                </div> 
                <div className="project-entry">
                    <p class="project-entry__label">Completed:</p>
                    <p class="project-entry__data">In-Prog</p>
                </div> 
                <div className="project-entry">
                    <p class="project-entry__label">Github URL:</p>
                    <p class="project-entry__data">Github</p>
                </div> 
                <div className="project-entry">
                    <p class="project-entry__label">Slack URL:</p>
                    <p class="project-entry__data">Slack</p>
                </div> 
                <div className="project-entry">
                    <p class="project-entry__label">google drive URL:</p>
                    <p class="project-entry__data">Google Drive</p>
                </div> 
                <div className="project-entry">
                    <p class="project-entry__label">VideoConference:</p>
                    <p class="project-entry__data">video conference link</p>
                </div> 
                <div className="project-entry">
                    <p class="project-entry__label">lookingDescription:</p>
                    <p class="project-entry__data">I'm baby kale chips etsy sustainable pok pok. Franzen waistcoat jean shorts, craft beer biodiesel messenger bag.</p>
                </div> 
                <div className="project-entry">
                    <p class="project-entry__label">recruiting categories:</p>
                    <p class="project-entry__data">Front End, Back End, Full Stack, React</p>
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
                    <p class="project-entry__data">{data.createdDate ?  data.createdDate : ''}</p>
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