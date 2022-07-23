function Rev(props){
    return(
        <div className='item'>
            <h3>
              Name: {props.name}
            </h3>
            <h4>
                rating: {props.rating}
            </h4>
            <p>
              <span className="hi">Remarks</span>: {props.data}
            </p>
          </div>
    )
}
export default function Review(){
    return(
        <form className='buttons'>
      <h2 className='review'>
        Ratings by users:-
      </h2>
        <div className='items'>
        <Rev name="Nikhil Injarpu" rating="4/5" data="This is extraordinary"/>
        <Rev name="Pranay Midathana" rating="3/5" data="Good sprots equipement"/>
        <Rev name="mr Nandigama" rating="4.5/5" data="Too Good a PG"/>
        <Rev name="Mr Paneesh" rating="3.5/5" data="An average facility building"/>
        <Rev name="Divakar sai" rating="4/5" data="This is extraordinary"/>
        <Rev name="Siddharda" rating="4/5" data="This is ordinary"/>
        <Rev name="Nikhil Injarpu" rating="4/5" data="This is extraordinary"/>
        </div>
       
      </form>
    )
}