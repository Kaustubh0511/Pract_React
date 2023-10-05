function Card(props){
    return(
        <div class="bg-[#1AACAC] rounded-lg shadow-lg p-4 m-4 w-64 h-64">
            <h4 class="text-xl text-white">{props.title}</h4>
            <p class="text-white">{props.description}</p>
            <button class="text-white" onClick={props.changeTitle}>Change Title</button>
        </div>
    )
}

Card.defaultProps={
    title:"This is default value",
    description:"This is some random description",
    changeTitle:() => { }
}


export default Card;