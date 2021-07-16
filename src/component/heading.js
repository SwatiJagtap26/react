import './../styles/heading.css'

function Heading(){
    let style={
         headingStyles :{
            color : "red",
            backgroundColor : "green"
           },
            paraStyle :{
               color :"pink",
               backgroundColor :"black",
               fontSize : "15px"
           }
    }
    let isuserRegister = false
    let headingClass;
    if(isuserRegister){
        headingClass= "main-heading"
        
    }else{
        headingClass= "main-heading-2"
    }

    
    return(
        <>
        <h1 className= {headingClass}> Welcome to React</h1>
        <p className="para-style"> React is very interesting and You Love it</p>
        <button>click me</button>
        
        <div>
        <h2> hope you are understanding react</h2>
        </div>
        </>
    )

}

export default Heading;