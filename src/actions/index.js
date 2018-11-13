import axios from "axios";

export function loadColor(){
    return(dispatch) => {
        return axios.get("http://www.colr.org/json/color/random").then((response)=>{
            let color1 = "#" + response.data.new_color;
            let color2 = "#" + response.data.colors[0].tags[0].name;
            let color;
            console.log(color1 + " - " + color2)
            let rand = Math.random() * 1
            console.log(rand)
            if (rand >= 0.5) {
                color = color1
            } else {
                color = color2
            }

            dispatch(changeColor(color))
        })
    }
}

export function changeColor(color){
    return{
        type:"CHANGE_COLOR",
        color:color
    }
}