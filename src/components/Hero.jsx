import styled from 'styled-components'
function Hero() {
    return (
        <CONTAINER>
            <IMG src="/Images/Hero.png" alt="Hero Image" />
        </CONTAINER>
    )
}

const CONTAINER = styled.div`
width:100%;
padding:20px 40px;

@media(max-width:655px){
padding:20px;
}

@media(max-width:475px){
padding:10px;
}



`

const IMG = styled.img`
width:100%;
max-height:400px;
border-radius:10px;

`

export default Hero