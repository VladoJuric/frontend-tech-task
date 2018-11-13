import axios from "axios";

export function loadColor(){
    return(dispatch) => {
        let color = [];
        color[2] = "#000000"
        color[3] = ""
        return axios.get("http://www.colr.org/json/color/random").then((response)=>{
            color[0] = "#" + response.data.new_color;  
            return axios.get("http://www.colr.org/json/color/random").then((response)=>{
                color[1] = "#" + response.data.new_color;

                let rand = Math.floor(Math.random() * 2)

                color[3] = "#" + color[rand].substring(1,2)
                            + color[2].substring(2,3)
                            + color[rand].substring(3,4)
                            + color[2].substring(4,5)
                            + color[rand].substring(5,6)
                            + color[2].substring(6,7)

                dispatch(changeColor(color))

                // dispatch(changeColor(mixColor(color)))
            })
        })
    }
}

// function mixColor(color){
//     let rand = Math.floor(Math.random() * 2)

//     color[3] = "#" + color[rand].substring(1,2)
//                  + color[2].substring(2,3)
//                  + color[rand].substring(3,4)
//                  + color[2].substring(4,5)
//                  + color[rand].substring(5,6)
//                  + color[2].substring(6,7)
//     changeColor(color)
// }

export function changeColor(color){
    return{
        type:"CHANGE_COLOR",
        color:color[3]
    }
}