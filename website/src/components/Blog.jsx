import React, { PureComponent } from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './Blog.css'  
import Portadas from '../portadacomponent/Portadas';
import { Link } from 'react-router-dom';
export class Noticias extends PureComponent {

    constructor(props) {
        super(props)
    
        this.state = {
            offset: 0,
            tableData: [],
            orgtableData: [],
            perPage: 9,
            currentPage: 0
        }
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData()
        });

    };

    loadMoreData() {
		const data = this.state.orgtableData;
		
		const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
		this.setState({
			pageCount: Math.ceil(data.length / this.state.perPage),
			tableData:slice
		})
	
    }

    componentDidMount(){
        this.getData();
        document.title = `Blog Principal | DevMayden`;
    }

    getData() {
        axios
            .get(`https://devmaydenheroku.herokuapp.com/blogs`)
            .then(res => {

                var reverse = res.data;
                var data = reverse.reverse()
				
                var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                    orgtableData :res.data,
                    tableData:slice
                })
            });
    }

    render() {
        return (
            <>
              <Portadas title="Entradas Principales"/>
              <hr/>
    <div class="container" style={{marginTop:'20px'}}>
      <div class="row">
        {
          this.state.tableData.map(tdata => (

        <div class="col-md-4" style={{marginBottom:'20px'}} key={tdata.id}>
          <Link to={`/blog/${tdata.id}`}>
          <div style={{background: '#ffffff',borderRadius: '5px',boxShadow:'0px 0px 14px 0px rgb(109,118,128)'}}>
            <div style={{height: '221px'}}><img class="img-fluid d-xl-flex justify-content-xl-center align-items-xl-center" src={`https://devmaydenheroku.herokuapp.com${tdata.portadablog.url}`} style={{width:'100%', height:'230px'}} alt="xd" /></div>
              <div>
                <h3 class="d-xl-flex m-auto justify-content-xl-center" style={{paddingTop:'38px', width:'287px', textAlign:'left', paddingLeft:'0', color:'#1888ff'}}>{tdata.tituloblog}</h3>
                <div>
                  <p class="mx-auto" style={{fontSize:'0.86em', width:'330px', paddingTop:'9px'}}></p>
                </div>
                <p class="mx-auto" style={{fontSize: '0.75em',width: '332px', paddingBottom: '17px',color:'#1888ff'}}>Fecha de Publicaión: {tdata.fechablog}</p>
            </div>
          </div></Link>
        </div>                       
        ))
      }          
      </div>
    </div>
                 <ReactPaginate
                    previousLabel={"Anterior"}
                    nextLabel={"Siguiente"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>

            </>
        )
    }
}

export default Noticias