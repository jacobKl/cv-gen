import React, { useState, useContext } from 'react'
import { CvData } from "../../context/CvDataProvider";
import { StyledImageUploader } from './ImageUploader.styled.js'
import { SET_FILE_PATH } from '../../actions'


function ImageUploader() {

    const { state, dispatch } = useContext( CvData )

    const [ isFileOver, setIsFileOver ] = useState(false);

    const handleFileDrop = (e) => {
        e.preventDefault();
        setIsFileOver(false);
        const avatar = e.dataTransfer.files[0];
        const data = new FormData();
        data.append("avatar", avatar);
        fetch("http://localhost:5000/upload", {
            method: "POST",
            body: data
        })
        .then(res => res.json())
        .then(res => {
            dispatch({type: SET_FILE_PATH, payload: res.name})
        })
    }

    const handleFileOver = (e) => {
        e.preventDefault();
        setIsFileOver(true);
    }

    const handleDragLeave = (e) => {
        setIsFileOver(false)
    }

    return (
        <StyledImageUploader onDrop={handleFileDrop} onDragOver={handleFileOver} onDragLeave={handleDragLeave} fileOver={isFileOver}>
            <i class="fas fa-file-upload"></i>
            {state.personal.imagePath ? <p>Zuploadowano zdjęcie {state.personal.imagePath}</p> : <p>Przeciagnij tutaj plik.</p>}            
        </StyledImageUploader>
    )
}

export default ImageUploader
