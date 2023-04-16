'use client'
import Image from "next/image"

const Avatar = ()=>{
    return(
        <Image src={'/images/placeholder.jpg'} className="rounded-full" alt="avatar" height={30} width={30}  />
    )
}

export default Avatar