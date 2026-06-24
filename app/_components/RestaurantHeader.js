import Link from "next/link";
// import Image from "next/image";
// import code from "../public/code.jpeg"
const RestaurantHeader=()=>{
    return(
        <div>
           <div className="logo">
            <Image  style={{width:100}}src="code" />
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