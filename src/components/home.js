import React, { useState, useEffect } from 'react'
import Card from './card';
import './home.css';
import axios from 'axios';

export default function Home(props) {
    const [heading, setHeading] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=79c141ed7b2847cc92b0c8ce6f69c12d")
            .then((res) => {
                setHeading("General");
                setData(res.data.articles);

            })
    }, [])

    const getGeneralData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=79c141ed7b2847cc92b0c8ce6f69c12d")
            .then((res) => {
                setHeading("General");
                setData(res.data.articles);
            })
    }

    const getSportsData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=79c141ed7b2847cc92b0c8ce6f69c12d")
            .then((res) => {
                setHeading("Sports");
                setData(res.data.articles);
            })
    }

    const getScienceData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=79c141ed7b2847cc92b0c8ce6f69c12d")
            .then((res) => {
                setHeading("Science");
                setData(res.data.articles);
            })
    }

    const getEnterData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=79c141ed7b2847cc92b0c8ce6f69c12d")
            .then((res) => {
                setHeading("Entertainment");
                setData(res.data.articles);
            })
    }

    const getTechData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=79c141ed7b2847cc92b0c8ce6f69c12d")
            .then((res) => {
                setHeading("Technology");
                setData(res.data.articles);
            })
    }

    const getBizData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=79c141ed7b2847cc92b0c8ce6f69c12d")
            .then((res) => {
                setHeading("Business");
                setData(res.data.articles);
            })
    }

    const getHealthData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=79c141ed7b2847cc92b0c8ce6f69c12d")
            .then((res) => {
                setHeading("Health");
                setData(res.data.articles);
            })
    }

    const getIndiaData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=79c141ed7b2847cc92b0c8ce6f69c12d")
            .then((res) => {
                setHeading("Indian News");
                setData(res.data.articles);
            })
    }

    const getUsaData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=79c141ed7b2847cc92b0c8ce6f69c12d")
            .then((res) => {
                setHeading("American News");
                setData(res.data.articles);
            })
    }

    const getCanadaData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=ca&apiKey=79c141ed7b2847cc92b0c8ce6f69c12d")
            .then((res) => {
                setHeading("Canadian News");
                setData(res.data.articles);
            })
    }
    let mapuse = data.map((value, index) => {
        return (
            <Card
                key={index}
                image={value.urlToImage}
                title={value.title}
                desc={value.description}
                link={value.url}
            />

        )

    })
    return (
        <div className='home'>
            <div className='home-child-1'>
                <p className='sidebar-heading'>Category</p>
                <button className='sidebar-btn' onClick={getGeneralData}>General</button>
                <button className='sidebar-btn' onClick={getSportsData}>Sports</button>
                <button className='sidebar-btn' onClick={getScienceData}>Science</button>
                <button className='sidebar-btn' onClick={getEnterData}>Entertainment</button>
                <button className='sidebar-btn' onClick={getTechData}>Technology</button>
                <button className='sidebar-btn' onClick={getBizData}>Bussiness</button>
                <button className='sidebar-btn' onClick={getHealthData}>Health</button>
                <div className='sidebar-border'>
                    <p className='sidebar-heading' >Country</p>
                </div>
                <button className='sidebar-btn' onClick={getIndiaData}>India</button>
                <button className='sidebar-btn' onClick={getUsaData}>USA</button>
                <button className='sidebar-btn' onClick={getCanadaData}>Canada</button>
            </div>

            <div className='home-child-2'>
                <div className='home-heading'>
                    {heading}
                </div>
                <div>
                    {mapuse}
                </div>
            </div>
        </div>
    )
}