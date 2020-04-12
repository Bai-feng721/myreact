import React from 'react';
import UcSwiper from "../components/uc-swiper";
import Cell from "../components/cell";
import {UcButton} from "../components/uc-button";
export default  class Home extends React.Component{
  state={
      banner:[],
      home:[]
    };

   componentDidMount() {
     React.axios.all([
       React.axios({url:'/api/goods/home',params:{_page:1,_limit:10}}),
       React.axios({url:'/api/goods/banner',params:{_page:1,_limit:3}}),
     ]).then(React.axios.spread((banner,home)=>{
       banner.data.data.map(item=>item.banner=this.baseUrl+'/'+item.banner);
       this.setState({
         banner:banner.data.data,
         home:home.data.data
       })
     }));

   }


  render() {

        return(
            <div className="Home">
               <UcSwiper
                  data={[
                    {_id:'1',title:'ttt',sub_title:'ttt111',banner:'/images/img_1.jpg'},
                    {_id:'2',banner:'/images/img_2.jpg'},
                    {_id:'3',banner:'/images/img_3.jpg',title:'ttt',sub_title:'ttt111'}
                  ]}
                  to={{pathname:'/detail',apiname:'banner'}}
               />
               <Cell
                index={0}
                data={{_id:"1",title:'asdfsdf',des:'是打发打发的'}}
                to={{pathname:'/detail',apiname:'home'}}
               >
                 <UcButton style={{float:'right'}} size="mini" clickHandler={this.show}>+</UcButton>
               </Cell>
              <Cell
                data={{_id:'1',title:'dddd',des:'房贷首付'}}>
                <button style={{float:'right'}}>按钮</button>
              </Cell>
            </div>
        )

    }
}
