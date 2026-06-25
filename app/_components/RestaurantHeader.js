import Link from "next/link";
import Image from "next/image";

const RestaurantHeader=()=>{
    return(
        <div>
           <div className="logo"> 
            <div className="logo">            
         <Image src="/image.jpg"alt="Food Delivery Logo"width={100}height={100}/>
          </div>
           </div>
           <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/">Login/SignUp</Link>
            </li>
            <li>
                <Link href="/">Profile</Link>
            </li>
           </ul>
      </div>
    )
        
} 
export default RestaurantHeader;