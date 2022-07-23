import img from "../th.jpg";
export default function heading(){
    return(
    <div className='welcome'>
        <img className='logo' src={img}/>
        <span className='welcome'>
            WELCOME TO PG INVERNTORY PORTAL!
        </span>
    </div>
    )
}