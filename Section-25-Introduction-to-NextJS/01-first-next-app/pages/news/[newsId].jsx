import {useRouter} from 'next/router';

export default function DetailPage(){
    const router=useRouter();

    
    return(
        <h2>{router.query.newsId}</h2>
    )
}