import React, { useState, useEffect } from 'react'
import axios from 'axios'

function HomeScreen() {
    const [status, setStatus] = useState('Checking connection...')

    useEffect(() => {
        async function checkAPI() {
            try {
                const { data } = await axios.get('/api/test/')
                setStatus(data.message)
            } catch (error) {
                setStatus('Failed to connect to backend.')
            }
        }
        checkAPI()
    }, [])

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Quiz Boilerplate Template</h1>
            <h3>Backend Status: <span style={{ color: status.includes('success') ? 'green' : 'red' }}>{status}</span></h3>
        </div>
    )
}

export default HomeScreen