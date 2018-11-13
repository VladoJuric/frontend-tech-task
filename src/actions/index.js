import axios from "axios";

export function loadColor(){
    return(dispatch) => {
        return axios.get("http://www.colr.org/json/color/random").then((response)=>{
            let color = [];    
        
            color[0] = "black"
            color[1] = "#" + response.data.new_color;
            color[2] = "#" + response.data.colors[0].tags[0].name;

            console.log(color[0] + " - " + color[1] + " - " + color[3])

            dispatch(changeColor(color))
        })
    }
}

export function changeColor(color){
    let rand = Math.floor(Math.random() * 3)
    console.log(rand)
    return{
        type:"CHANGE_COLOR",
        color:color[rand]
    }
}