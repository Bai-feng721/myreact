import React,{Component}from 'react';
import '../assets/css/detail.css';
import zan from '../assets/img/zan.png';
import xing from '../assets/img/xing.png';
import fx from '../assets/img/fx.png';
import UcNav from "../components/uc-nav";


export default  class Detail extends React.Component{
    // state={};
    // static getDerivedStateFromProps(nextProps,nextState){
    //     console.log(qs.parse(nextProps.location.search,{ignoreQueryPrefix: true}))
    //     return null;
    // }
    render() {
        let {location,match} = this.props;
        return(
           <div>
             <UcNav/>
             <div className="content">
                <div className="header clear">
                  <h2><img src="/images/head.png" alt=""/></h2>
                  <p>作者名字</p>
                </div>
               <div className="cont">
                 <h3>弘扬宪法精神推动宪法实施</h3>
                <div className="time"><p>2019 <span><img src="{zan}" alt=""/></span></p></div>

                <div className="text-box">推进职业教育现代化座谈会12月2日在京召开</div>
              </div>
             </div>
             <div className="foot-btn">
               <ul>
                 <li className="say"><a>
                   <i><img src={require('../assets/img/say.png')} alt=""/></i><span>0</span>
                 </a></li>
                 <li
                   className="zan"
                 ><a >
                   <i style={{background:"url(/images/zan123.png) no-repeat 0 0", "backgroundSize":"100%"}}></i><span>0</span>
                 </a></li>
                 <li className="xing"><a >
                   <i><img src={xing} alt=""/></i>
                 </a></li>
                 <li className="fx"><a>
                   <i><img src={fx} alt=""/></i>
                 </a></li>
               </ul>
             </div>
           </div>

        )
    }
}
