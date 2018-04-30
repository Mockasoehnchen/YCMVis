
var graphicList = [];
function prepare_comp(){
    graphicList = [];
    var index = 0;
    jQuery.each( compartments,function(name,compartment){
        var w = myChart.convertToPixel({seriesIndex: 0},[compartment.spread[0],0])[0]-myChart.convertToPixel({seriesIndex: 0},[compartment.spread[1],0])[0]+get_symbolSize();
        var h = myChart.convertToPixel({seriesIndex: 0},[0,compartment.spread[2]])[1]-myChart.convertToPixel({seriesIndex: 0},[0,compartment.spread[3]])[1]+get_symbolSize();
        var pos = myChart.convertToPixel({seriesIndex: 0},[compartment.spread[1],compartment.spread[3]]);
        pos[0]-=get_symbolSize()/2;
        pos[1]-=get_symbolSize()/2;
        graphicList.push({
            id: name.concat('_gr'),
            comp_name: name,
            type: 'rect',
            shape: {
                width: w,
                height: h
            },
            z: -100,
            style:{
                fill:'white',
                stroke: 'black'
            },
            position: pos,
            invisible: false,
            draggable: false,
            open: 0,
            onclick: echarts.util.curry(handle_compartment,index)
        });

        //index+=1;
        //palce text in the middle of compartment
        var pos_2 = [pos[0]+w/2,pos[1]+h/2]

        graphicList.push({
            id: name.concat('_grt'),
            type: 'text',
            comp_name: name,
            position:pos_2,
            z: -99,
            style:{
                text: name,
                font: '12px "Fira Sans", sans-serif',
                textAlign: 'center'
            },
            onclick: echarts.util.curry(handle_compartment,index)
        });

        index+=2;


    })
    myChart.setOption({
        graphic: graphicList
    })
}
/*
function update_comp_pos(){ //this function is to slow because of frequent use of setOption
    jQuery.each( compartments,function(name,compartment){
        var w = myChart.convertToPixel({seriesIndex: 0},[compartment.spread[0],0])[0]-myChart.convertToPixel({seriesIndex: 0},[compartment.spread[1],0])[0]+get_symbolSize();
        var h = myChart.convertToPixel({seriesIndex: 0},[0,compartment.spread[2]])[1]-myChart.convertToPixel({seriesIndex: 0},[0,compartment.spread[3]])[1]+get_symbolSize();
        var pos = myChart.convertToPixel({seriesIndex: 0},[compartment.spread[1],compartment.spread[3]]);
        pos[0]-=get_symbolSize()/2;
        pos[1]-=get_symbolSize()/2;

        myChart.setOption({
            graphic: {
                id: name.concat('_gr'),
                position: pos,
                elem.children[0].shape = {
                    width: w,
                    height: h
                };
            }
        })

    })
}*/

function update_comp_pos_2(){
    jQuery.each( graphicList,function(index,elem){
        var compartment = compartments[elem['comp_name']];
        var w = myChart.convertToPixel({seriesIndex: 0},[compartment.spread[0],0])[0]-myChart.convertToPixel({seriesIndex: 0},[compartment.spread[1],0])[0]+get_symbolSize();
        var h = myChart.convertToPixel({seriesIndex: 0},[0,compartment.spread[2]])[1]-myChart.convertToPixel({seriesIndex: 0},[0,compartment.spread[3]])[1]+get_symbolSize();
        var pos = myChart.convertToPixel({seriesIndex: 0},[compartment.spread[1],compartment.spread[3]]);
        pos[0]-=get_symbolSize()/2;
        pos[1]-=get_symbolSize()/2;
        if (elem.id.endsWith('t')){
            pos[0]+=w/2
            pos[1]+=h/2
        }

        elem.position= pos;
        elem.shape = {
            width: w,
            height: h
        };

    })
    myChart.setOption({
        graphic: graphicList
    })
}

function handle_compartment(index){

    if (graphicList[index].open == 0) {
        closeCompartment(index);

    }
    else {
        openCompartment(index);

    }

}

function openCompartment(index) {
    graphicList[index]['z']=-100;
    graphicList[index]['open']= 0;
    graphicList[index+1]['z']=-99;
    myChart.setOption({
        graphic: graphicList
    });


}

function closeCompartment(index) {
    graphicList[index]['z']=100;
    graphicList[index]['open']= 1;
    graphicList[index+1]['z']=101;
    myChart.setOption({
        graphic: graphicList
    });
}