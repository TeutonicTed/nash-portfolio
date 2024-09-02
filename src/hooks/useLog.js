


export default function useLog(){

    function addToConsole(name){
        console.log("Here is the name you gave me: " + name)
    }



    return{
        addToConsole
    }
}