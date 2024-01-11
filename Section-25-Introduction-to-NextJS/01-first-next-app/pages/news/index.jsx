import Link from "next/link";
import "../../app/globals.css";

export default function NewsPage(){
    return(
        <>
        <h1>News Page</h1>
        <ul>
            <li> <Link href={"/news/nextJS-is-great"}>NextJS is Great</Link></li>
            <li>Something else</li>
        </ul>
        </>
    )
}