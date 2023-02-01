import React, { useState, useEffect } from 'react';

export const TypingText = ({ name, description }) => {
    const [typedName, setTypedName] = useState("")
    const [typedDesc, setTypedDesc] = useState("")
    const [className, setClassName] = useState("blinking-cursor")
    const [classDesc, setClassDesc] = useState("")

    useEffect(() => {
        setTimeout(() => {
            setTypedName(name.slice(0, typedName.length + 1))
        }, 100)
        if(typedName.length === name.length) {
            setClassName("")
            setClassDesc("blinking-cursor")
        }
    }, [typedName, name])

    useEffect(() => {
        if(typedName.length === name.length) {
            setTimeout(() => {
                setTypedDesc(description.slice(0, typedDesc.length + 1))
            }, 100)
        }
    }, [typedDesc, typedName, name, description])

    return (
        <div className='text-flex-col'>
            <h1 className={className}>{typedName}</h1>
            <h1 className={classDesc}>{typedDesc}</h1>
        </div>
    )
}