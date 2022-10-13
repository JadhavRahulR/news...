import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';


const News = (props) => {

  const [data, setdata] = useState([]);

  
  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((res) => setdata(res.data.articles))
      .catch((e)=>console.log(e));
  }, [])

  return (
    <>
      <h1 className='text-center' style={{ margin: '35px 0px', marginTop: '90px' }}>Top {props.category} News Headlines</h1>
      <div className="container">
        <div className="row g-3">
          {data.map((element,i) => {
            return (

              <div className="col-12 col-md-6 col-lg-4" key={i}>
                <NewsItem title={element.title ? element.title : ''} description={element.description ? element.description : ''}
                  newsurl={element.url} imageurl={element.urlToImage} key={element.url}/>
              </div>

            )
          })}
        </div>
      </div>

    </>
  )
}
export default News;