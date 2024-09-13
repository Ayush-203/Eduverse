import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
import { useParams } from "react-router-dom";
import './Play.css';
import { Link } from "react-router-dom";

// AIzaSyAx0sKRfdBHwPdkqaxpDF-RCBc7eYCZBmg

function Play() {
    const { coursename } = useParams();
    const Coursename = coursename.replace(/\s+/g, '_');

    let playlistid = ""
    if (Coursename == "DBMS") {
        playlistid = "PLdo5W4Nhv31b33kF46f9aFjoJPOkdlsRc"
    }
    else if (Coursename == "Computer Networks") {
        playlistid = "PLqleLpAMfxGCUpDRFUnLKeDrgBsPOwTQK"
    }
    else if (Coursename == "Distributed System") {
        playlistid = "PLqleLpAMfxGCUpDRFUnLKeDrgBsPOwTQK"
    }
    else if (Coursename == "Data Mining") {
        playlistid = "PLYwpaL_SFmcChP0xiW3KK9elNuhfCLVVi"
    }


    const [subj, setSubj] = useState([])
    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2C%20snippet&maxResults=100&playlistId=${playlistid}&key=AIzaSyAx0sKRfdBHwPdkqaxpDF-RCBc7eYCZBmg`)
            .then(res => res.json())
            .then(data => {
                const result = data.items.map(item => {
                    return { title: item.snippet.title, vid: item.contentDetails.videoId }
                })
                setSubj(result)
                setVid(result.vid)
                setTitle(result.title)
            })
    }, [])

    // const subj = {
    //     DBMS: [
    //         { title: "1", vid: "o8jEBYOu9dA?si=b9ATGU2_LThO8iG4" },
    //         { title: "2", vid: "FOSqMousEYs?si=-fERDpNwExvkKa-N" },
    //     ],
    //     Computer_Networks: [
    //         { title: "1", vid: "9Bqg-6nzkzw?si=-WPiOQu4nVw66bwG" },
    //     ],
    // };

    const [vid, setVid] = useState("");
    const [title, setTitle] = useState("");
    const [cnt, setCnt] = useState(0)

    const renderVid = () => {
        return (
            <div className="video-container">
                <iframe width="853" height="480" src={`//www.youtube.com/embed/${vid}`} title={title} frameBorder="0" allowFullScreen></iframe>
            </div>
        );
    };

    console.log(coursename);

    return (
        <>
            <div className="play-container-fluid">
                {/* <nav>
                    <Navbar />
                </nav> */}
                <div className="main">
                    <div>
                        <div className="player">
                            {renderVid()}
                        </div>
                        {coursename && <h3>{title}</h3>}

                    </div>
                    <div>
                        <div className="playlist">
                            <ul className="collection">
                                {
                                    subj.map((item, index) => {
                                        return <li key={item.vid} className={cnt === index ? "collection-item my-item" : "collection-item"} onClick={() => {
                                            setVid(item.vid)
                                            setTitle(item.title)
                                            setCnt(index)
                                        }}>{item.title}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Play;