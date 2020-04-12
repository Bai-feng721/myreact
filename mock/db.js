var Mock = require('mockjs');
let mr = Mock.Random;
let mapData=(n)=>{
    var data =[];
    for(var i=1;i<=n;i++){
        data.push({
            id:1,
            title:"@ctitle(8,12)",
            des:"@csentence(10,20)",
            time:"@integer(1553425967486,1553475967486)",
            detail:{
                auth:"@cname()",
                content:"@cparagraph(10,40)",
                auth_icon:mr.image('50x50', mr.color(), mr.cword(1))
            }
        })
    }
    return data
};

module.exports ={
    ...Mock.mock({
        'home':mapData(32),
        'follow':mapData(21),
        'column':mapData(11),
        'banner|3':[
            {
                'id|+1':1,
                title:"@ctitle(4,8)",
                sub_title:"@ctitle(6,12)",
                banner: mr.image('750x501', mr.color(), mr.cword(4,10)),//banner不变
                time: "@integer(1553425967486,1553475967486)",
                detail:{
                    icon:mr.image('20x20', mr.color(), mr.cword(1,2)),//20X20尺寸
                    auth:"@cname()",//百家姓
                    content:"@cparagraph(10,40)"//正文
                }
            }
        ],
    })
};