import React from 'react'
import { Chrono } from 'react-chrono';
import '../App.css';

function Timepage() {


    const items = [
          {
    title: "January",
    cardTitle: "First month of the year",
    cardSubtitle: "Subtitle for January",
    cardDetailedText: "Some details about January",
  },
        { title: 'Timeline title 2', cardTitle: 'Card Title 2' },
          {
    title: "January",
    cardTitle: "First month of the year",
    cardSubtitle: "Subtitle for January",
    cardDetailedText: "Some details about January",
  },
        { title: 'Timeline title 2', cardTitle: 'Card Title 2' },
       
    ];

    return (
        <div style={{ width: '100%',padding:"10%" }} >
            <Chrono items={items} mode="HORIZONTAL"  itemWidth={400} disableNavOnKey disableToolbar  cardHeight={300} cardWidth={300} timelinePointDimension={30} showAllCardsHorizontal theme={{
                primary: "grey",
                secondary: "grey",
                cardBgColor: "yellow",
                cardForeColor: "red",
                titleColor: "black",
                titleColorActive: "black",
                iconBackgroundColor:"white",
                cardBorderColor:"red",
                cardTitleColor:"orange"            
            }} >
                <div className="chrono-icons">
                    <img
                        src="https://img.icons8.com/ios-filled/100/000000/twitter.png"
                        alt="twitter"
                        style={{ marginTop: "20px" ,backgroundColor:"white" }}
                    />
                    <img
                        src="https://img.icons8.com/ios-filled/100/000000/about.png"
                        alt="twitter"
                    />
                    <img
                        src="https://img.icons8.com/ios-filled/100/000000/contacts.png"
                        alt="twitter"
                    />
                    <img
                        src="https://img.icons8.com/ios-filled/100/000000/briefcase.png"
                        alt="twitter"
                    />
                    <img
                        src="https://img.icons8.com/ios-filled/100/000000/idea.png"
                        alt="twitter"
                    />
                    <img
                        src="https://img.icons8.com/ios-filled/100/000000/sun.png"
                        alt="twitter"
                    />
                    <img
                        src="https://img.icons8.com/ios-filled/100/000000/info.png"
                        alt="twitter"
                    />
                </div>
            </Chrono>
        </div>
    )
}

export default Timepage