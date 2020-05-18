import React, { useState } from 'react';

//Project ID, Name, Description, githubIdentifier, 
//Project Stus, Location(s), Created Date, Completed Date, 
//Github URL, Slack URL, googleDriveURL, Videoconference Link
//lookingDescription, recruitingCategories, partners
//LFM - A way to tag roles that a current project is looking to fill? Tags?

const Project = (props) => {
    const [ isEditing, setIsEditing ] = useState(false);
    if (isEditing) {
        return (
            <div>
                <h1>Project Info Page</h1>
                <label htmlFor="projectName">Project Name:</label>
                <input name="projectName" type="text" value="Name"></input>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Project Info Page</h1>
                <p>Project Name:</p>
                <p>Project Name</p>
            </div>
        )
    }
}


export default Project;