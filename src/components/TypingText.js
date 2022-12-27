import React, { useState, useEffect } from 'react';

const name = "Hi, I'm Fabrizio"
const description = "I'm a developer"

export const TypingText = () => {
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
    }, [typedName])

    useEffect(() => {
        if(typedName.length === name.length) {
            setTimeout(() => {
                setTypedDesc(description.slice(0, typedDesc.length + 1))
            }, 100)
        }
    }, [typedDesc, typedName])

    return (
        <>
            <h1 className={className}>{typedName}</h1>
            <h1 className={classDesc}>{typedDesc}</h1>
        </>
    )
}