import Link from "next/link";
const RestaurantHeader=()=>{
    return(
        <div>
           <div className="logo">
            <Image  style={{width:100}}src="https://stock.adobe.com/search?k=food+delivery" />
           </div>
           <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
           </ul>
            <ul>
            <li>
                <Link href="/">Login/SignUp</Link>
            </li>
           </ul>
            <ul>
            <li>
                <Link href="/">Profile</Link>
            </li>
           </ul>
      </div>
    )
        
} 
export default RestaurantHeader;