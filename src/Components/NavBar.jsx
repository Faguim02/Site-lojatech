import styled from 'styled-components'
import '../App.css'
import img from '../assets/icons/search.svg'

const NavBar = ({setSearch, seach}) => {

    const NavBar = styled.nav`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        background-color: #B8C0FF;
        padding: 10px;
    `
    const NameFistLogo = styled.span`
        color: #FF9878;
        font-weight: bold;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #000;
        font-family: sans-serif;
        font-size: 24pt;
    `
    const NameLastLogo = styled.span`
        color: #ffffff;
        font-weight: bold;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #000;
        font-family: sans-serif;
        font-size: 24pt;
`
    const SearchBox = styled.div`
        cursor: pointer;
        height: 40px;
        border-radius: 40px;
        padding: 10px;
        background-color: white;
        box-shadow: 0 0 10px #00000055;
    `
    const SearchBtn = styled.a`
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    `
    const SearchText = styled.input`
        border: none;
        background: none;
        outline: none;
        float: left;
        padding: 0;
        color: black;
        font-size: 16px;
        transition: 0.4s;
        line-height: 40px;
        width: 0px;
    `
    return (
        <NavBar className='Navgation'>
            <div></div>
            <div className='Logo'>
                <NameFistLogo>
                Tech
                </NameFistLogo>
                <NameLastLogo>
                Store
                </NameLastLogo>
            </div>
            <div>
                <SearchBox className='search-box'>
                    <SearchText placeholder='Pesquisar' className='navbar-search-text'
                     onChange={(e)=>setSearch(e.target.value)}
                     value={seach}
                    />
                    <SearchBtn className='navbar-search-btn'>
                        <img src={img} alt="search" width={25}/>
                    </SearchBtn>
                    
                </SearchBox>
            </div>
        </NavBar>
    )
}

export default NavBar