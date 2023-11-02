import useHttp from "../hooks/useHttp";
import Error from "./Error";
import MealItem from "./MealItem";

const requestConfig={}

export default function Meals(){
    const{isLoading,data:meals,error}=useHttp('http://localhost:3000/meals',requestConfig,[])
    if(isLoading){
        return(
            <p className="center">Fetching meals...</p>
        )
    }
    if(error){
        return <Error message={error} title={"An error occured! Failed to fetch meals"}/>
    }
    return(
        <ul id="meals">
            {meals.map((meal)=>(
                <MealItem  key={meal.id} meal={meal}/>
            ))}
        </ul>
    )
}