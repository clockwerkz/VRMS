import React, { useState } from 'react';
import '../sass/Project.scss';

//Project ID, Name, Description, githubIdentifier, 
//Project Stus, Location(s), Created Date, Completed Date, 
//Github URL, Slack URL, googleDriveURL, Videoconference Link
//lookingDescription, recruitingCategories, partners
//LFM - A way to tag roles that a current project is looking to fill? Tags?

const Project = (props) => {
    const [ isEditing, setIsEditing ] = useState(false);

    const handleEditButton = () => {
        setIsEditing(!isEditing);
    }
    if (isEditing) {

        return (
            <div>
                <div className="project-header">
                    <h1>Project Info Page</h1>
                    <p onClick={handleEditButton}>Save Changes</p>
                </div>
                <label htmlFor="projectName">Project Name:</label>
                <input name="projectName" type="text" value="Name"></input>
            </div>
        )
    } else {
        return (
            <div>
                <div className="project-header">
                    <h1>Project Info Page</h1>
                    <p onClick={handleEditButton}>Edit Project</p>
                </div>
                <p>Project Name:</p>
                <p>Project Name</p>
            </div>
        )
    }
}


export default Project;