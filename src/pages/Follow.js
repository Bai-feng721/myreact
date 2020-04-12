import React,{Component} from "react";
import Cell from "../components/cell";

export default class Follow extends  React.Component{
    render() {

        return(
            <div className="pt">
               <Cell index={0} data={{_id:"1",title:'sssss',des:'的v吃饭v发'}}
                to={{pathname:'/detail',apiname:'home'}}>
                 <button style={{float:'right'}}>++</button>

               </Cell>
                <Cell index={1}
                  data={{_id:'1',title:'ddddd',des:'v发v呃呃呃'}}
                  to={{pathname:'.detail',apiname:'home'}}/>
            </div>
        )
    }
}