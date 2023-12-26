import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsloading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
      setTimeout(()=>{
        fetch(url)

          .then(res => {
            if (!res.ok){
              throw Error("Could not fetch the data for that resourse")
            }
            // console.log(res)
            return res.json()
          })

          .then(data => 
            {
              setError(null)
              setData(data)
              setIsloading(false)})

          .catch((err) => {
            setError(err.message)
            setIsloading(false)
          })
          }, 1000)
    },[url])
    return {data, error, isLoading}
}
export default useFetch