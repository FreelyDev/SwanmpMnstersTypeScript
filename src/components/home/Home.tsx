import "./home.scss"
import logo from '../../assets/bg.jpg';
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive'

export default function Home() {
    const [posY, setPosY] = useState<number>(400)
    const [scrollY, setScrollY] = useState<number>(0)
    window.onscroll = ()=>{
        setScrollY(window.pageYOffset);
        return ()=> (window.onscroll = null);
    };
    window.onload = ()=>{
        console.log(window.innerHeight)
    }
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 972px)' })
    useEffect(() => {
    if (isTabletOrMobile){
        setPosY(200)
    }else{
        setPosY(400)
    }
    });
    return (
        <div className="home">
            <img className="bg" src={logo} alt="" />
            <div className="logo">
                <a href="swampmonsters"  className="logoTitle">
                        <h3 >SwampMonsters</h3>
                </a>
            </div>
            <button className="walletButton" style = {{opacity : 1 - (.5*scrollY/500), top : (posY - 200 *(scrollY/500))}}>CONNECT WALLET</button>
        </div>
    )
}
