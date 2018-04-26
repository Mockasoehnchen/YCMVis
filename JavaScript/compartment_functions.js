
var graphicList = [];
function prepare_comp(){
    graphicList = [];
    jQuery.each( compartments,function(name,compartment){
        var w = myChart.convertToPixel({seriesIndex: 0},[compartment.spread[0],0])[0]-myChart.convertToPixel({seriesIndex: 0},[compartment.spread[1],0])[0]+get_symbolSize();
        var h = myChart.convertToPixel({seriesIndex: 0},[0,compartment.spread[2]])[1]-myChart.convertToPixel({seriesIndex: 0},[0,compartment.spread[3]])[1]+get_symbolSize();
        var pos = myChart.convertToPixel({seriesIndex: 0},[compartment.spread[1],compartment.spread[3]]);
        pos[0]-=get_symbolSize()/2;
        pos[1]-=get_symbolSize()/2;
        graphicList.push({
            id: name.concat('_gr'),
            type: 'rect',
            position: pos,
            shape: {
                width: w,
                height: h
            },
            style:{
                fill:'white',
                stroke: 'black'
            },
            invisible: false,
            draggable: false,
            z:-100,
            open: 0,
            onclick: echarts.util.curry(handle_compartment,name.concat('_gr')),
        })



    })
    myChart.setOption({
        graphic: graphicList
    })
}
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
                shape: {
                    width: w,
                    height: h
                }
            }
        })

    })
}

function update_comp_pos_2(){
    jQuery.each( graphicList,function(index,elem){
        var compartment = compartments[elem['id'].slice(0,elem['id'].length-3)];
        var w = myChart.convertToPixel({seriesIndex: 0},[compartment.spread[0],0])[0]-myChart.convertToPixel({seriesIndex: 0},[compartment.spread[1],0])[0]+get_symbolSize();
        var h = myChart.convertToPixel({seriesIndex: 0},[0,compartment.spread[2]])[1]-myChart.convertToPixel({seriesIndex: 0},[0,compartment.spread[3]])[1]+get_symbolSize();
        var pos = myChart.convertToPixel({seriesIndex: 0},[compartment.spread[1],compartment.spread[3]]);
        pos[0]-=get_symbolSize()/2;
        pos[1]-=get_symbolSize()/2;

        elem.position= pos;
        elem.shape = {
            width: w,
            height: h
        }

    })
    myChart.setOption({
        graphic: graphicList
    })
}

function handle_compartment(name){
    if (this.open == 0) {
        closeCompartment(name);
    }
    else {
        openCompartment(name);
    }

}

function openCompartment(name) {
    //TODO: much
    myChart.setOption({
        graphic: {
            id: name,
            z: -100,
            open: 0
        }
    })


}

function closeCompartment(name) {
    //TODO
    myChart.setOption({
        graphic: {
            id: name,
            z: 100,
            open: 1
        }
    })
}