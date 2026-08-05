import {
useEffect,
useState
} from "react";


import {
getAnalyticsData
}
from "../analytics/analyticsService";



export default function useAnalytics(){


const [data,setData]=useState(null);

const [loading,setLoading]=useState(true);



useEffect(()=>{


async function load(){


const result =
await getAnalyticsData();


setData(result);

setLoading(false);


}


load();


},[]);



return {

data,

loading

};


}