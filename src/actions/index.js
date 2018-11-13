import axios from "axios";

export function loadColor(){
    return(dispatch) => {
        return axios.get("http://www.colr.org/json/color/random").then((response)=>{
            let color = [];    

            color[0] = "#" + response.data.new_color;
            color[1] = response.data.colors[0].tags[0].name;
            color[2] = "#000000"

            let result = mixColor(color);
            console.log(result)

            dispatch(changeColor(result))
        })
    }
}

function mixColor(color){
    let result;
    let rand = Math.floor(Math.random() * 2)
    console.log(rand)
    console.log(color[rand] + " - " + color[2])

    result = "#" + color[rand].substring(1,2)
                 + color[2].substring(2,3)
                 + color[rand].substring(3,4)
                 + color[2].substring(4,5)
                 + color[rand].substring(5,6)
                 + color[2].substring(6,7)
    return{
        result
    }
}
export function changeColor(color){
    return{
        type:"CHANGE_COLOR",
        color:color
    }
}