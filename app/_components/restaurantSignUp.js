const RestaurantSignUp=()=>{
    return(
        <>
        {/* <h1>SignUp component</h1> */}
          <h3>SignUp</h3>
        <div>
          <div className="input-wrapper">
          <input type="text" placeholder="Enter Email id" className="input-field"/>
          </div>
          <div className="input-wrapper">
          <input type="password" placeholder="Enter Password"  className="input-field"/>
          </div >
          <div className="input-wrapper"> 
          <input type="password" placeholder="Confirm Password"  className="input-field"/>
          </div>
          <div className="input-wrapper">
          <input type="password" placeholder="Enter restaurant name"  className="input-field"/>
          </div >
          <div className="input-wrapper">
          <input type="password" placeholder="Enter city"  className="input-field"/>
          </div >
          <div className="input-wrapper">
          <input type="password" placeholder="Enter full address"  className="input-field"/>
          </div >
          <div className="input-wrapper">
          <input type="password" placeholder="Enter Contact No"  className="input-field"/>
          </div >
          
          <div className="input-wrapper"> 
          <button className="button">SignUp</button>
          </div>
        </div>
        </>
    )
}
export default RestaurantSignUp;