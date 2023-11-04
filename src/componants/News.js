import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem';
import Loader from './Loader';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"; 

//  Here are the steps to make this app with class based component to function based or Vice Versa
// 1. Turn "export class News extends Component" to a News function.
// 2. Remove render{ }.
// 3. Move static(defaultProps , propTypes) from start to the last with interchange of News.(defaultProps , propTypes)
// 4. Use useEffect instead of componentDidMount. 
// 5. Change all methods into const function.
// 6. Use useState instead of constructor.
// 7. Change this.setState into setState and  this.props into props.
// 8. change catch into function.catch(()=>{})
// 9. Change for example  this.state.page into page


const News = (props) => {
  



  
  const [articals, setarticals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState(null);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  
  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
   

  const  updateNews= async ()=> {
   try{ props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(50)
    // this.setState({ articals: parsedData.articals })
    // console.log(parsedData);
    setarticals(parsedData.articles);
    setLoading(false);
    settotalResults(parsedData.totalResults);
    props.setProgress(100)
  }catch (error) {
    seterror('Error fetching data');
    setLoading(false);
  }
}

  useEffect(() => {
     document.title = `${Capitalize(props.category)} - NewsDog`;
    updateNews();  
  }, [])
  
  // componentDidMount() {
  //   try {
  //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=603acd6c263943c6a7c2e8e53d6f8908&page=1&pageSize=${this.props.pageSize}`;
  //     this.setState({ loading: true });
  //     let data = await fetch(url);
  //     let parsedData = await data.json();
  //     // this.setState({ articals: parsedData.articals })
  //     console.log(parsedData);

  //     this.setState({
  //       articals: parsedData.articles,
  //       loading: false,
  //       totalResults: parsedData.totalResults
  //     });
  //   } catch (error) {
  //     this.setState({ error: 'Error fetching data', loading: false });

  //     /* To use updateNews Function */
      // this.updateNews();
  //   }
  // }




  // handlePrebtn = async () => {
  // console.log("Pre")
  // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=603acd6c263943c6a7c2e8e53d6f8908&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  // this.setState({ loading: true });
  // let data = await fetch(url);
  // let parsedData = await data.json();
  // this.setState({ articals: parsedData.articals })

  // this.setState({ articals: parsedData.articles, loading: false });

  // this.setState({
  //   page: this.state.page - 1,
  // })

  /* To use updateNews Function */
  // this.setState({ page: this.state.page - 1})
  // this.updateNews()

  // }






  // handleNextbtn = async () => {
  // console.log("Next")
  // if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

  // }
  // else {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=603acd6c263943c6a7c2e8e53d6f8908&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({ articals: parsedData.articals })

  //   this.setState({ articals: parsedData.articles, loading: false });

  //   this.setState({
  //     page: this.state.page + 1,
  //   })
  // }

  /* To use updateNews Function */

  // this.setState({ page: this.state.page + 1})
  // this.updateNews()
  // }
  /* To Make Next & Previous Btn App */
  // render() {
  //   return (
  //     <div className='container my-3'>
  //       <h1 className='text-center' style={{margin:' 25px 0px'}}>NewsDog&#128054; - Top {this.Capitalize(this.props.category)} Headlines</h1>
  //       {this.state.loading && <Loader />}
  //       <div className='row'>
  //         {!this.state.loading && this.state.articals.map((element) => {
  //           return <div className='col-md-4' key={element.url}>
  //             <Newsitem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url}author={element.author} date={element.publishedAt} source={element.source.name}></Newsitem>
  //           </div>
  //         })}
  //       </div>

  //       <div className="container my-5 d-flex justify-content-between">
  //         <button type="button" className="btn btn-dark" disabled={this.state.page <= 1} onClick={this.handlePrebtn}>&larr; Previous</button>
  //         <button type="button" className="btn btn-dark" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} onClick={this.handleNextbtn}>Next &rarr;</button>
  //       </div>

  //     </div>
  //   )
  // }

  const fetchMoreData = async () => {
    try {
      setpage(page+1);
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;

      let data = await fetch(url);
      let parsedData = await data.json();
      // this.setState({ articals: this.state.articals.concat(parsedData.articles) })
      console.log(parsedData);
      setarticals(articals.concat(parsedData.articles));
      settotalResults(parsedData.totalResults);
      
    } catch (error) {
      seterror('Error fetching data');
    }
  }

 
    return (
      <>
        <h1 className='text-center' style={{ margin: ' 25px 0px' }}>NewsDog&#128054; - Top {Capitalize(props.category)} Headlines</h1>
        {loading && <Loader />}
        <InfiniteScroll
          dataLength={articals.length}
          next={fetchMoreData}
          hasMore={articals.length !== totalResults}
          loader={<Loader />}
        >
          <div className="container">
            <div className='row'>
              {articals.map((element) => {
                //  const uniqueKey = `${element.url}_${index}`;
                return <div className='col-md-4' key={element.url}>
                  <Newsitem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}></Newsitem>
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>



      </>
    )
  
}

News.defaultProps = {
  country: 'in',
  pageSize: 12,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News