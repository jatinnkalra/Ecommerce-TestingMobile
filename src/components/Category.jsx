import styled from 'styled-components'

function Category(props) {
    return (
        <CONTAINER>
            <img src={props.src} alt="" width="100%" />
            <h3>{props.name}</h3>
        </CONTAINER>
    )
}

const CONTAINER = styled.div`
flex-direction:column;
display:flex;
align-items:center;
background-color:rgba(247, 242, 242, 1);
border-radius:10px;
overflow:hidden;

h3{
font-size:1rem;
padding:5px;
color:rgba(99, 97, 97, 1);
}

img{
height:140px;
}


`

export default Category