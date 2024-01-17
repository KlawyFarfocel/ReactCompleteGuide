import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error=useRouteError();
    return(
        <h1>{error?.message?error.message:"Error 404: Page not found :("}</h1>
    )
}