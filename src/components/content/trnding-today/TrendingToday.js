import React from 'react';

import './TrendingToday.css'

import trendingItems from '../../data/trending-items/trending-items.json'

const TrendingToday = () => {
    return <div className='trending-today-section'>
        <span className='title'>TrendingToday</span>
        <div className='items'>
            {trendingItems.map((item, index)=>  
            <div key={Math.random()} className='trending-item' style={{backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 35%, transparent), url(${item.image_src})`}}>
                
                <div className='context'>
                <span className='title'>{item.title}</span> <br />
                <span className='description'>{item.description}</span>
                <div className='subreddit'>               
                    <img src={item.subreddit.image_src}/>
                    <span>{item.subreddit.name}</span>
                    </div>
                </div>
                
            </div>)
            }
        </div>
    </div>
}

export default TrendingToday;