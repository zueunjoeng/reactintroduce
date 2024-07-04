import logo from '../img/logo.svg'
import hdscss from '../scss/hd.module.scss'

function Hd() {
    return (
        <header className={hdscss.hd_font}>
            <div className="d-flex align-items-center m-0 me-5 ms-5">
                <h1 className='pt-1'><a href=""><img src="/img/logo.png" alt="" /></a></h1>
                {/* <h1><a href=""><img src={logo} alt="" /></a></h1> */}  
                <p className='m-0 ms-2 fw300'>가능성에 <span className='fw900'>무한함</span>을</p>
                <ul className="navbar d-flex p-0 pt-1 mb-0 me-0 ms-auto fw300 align-items-center">
                    <li className="me-3">
                        <a href="">ABOUT ME</a>
                        <ul className="dropdown-menu">
                        <li><a href="">Subitem 1</a></li>
                        <li><a href="">Subitem 2</a></li>
                        </ul>
                    </li>
                    <li className="me-3">
                        <a href="">PROJECT</a>
                        <ul className="dropdown-menu">
                        <li><a href="">Subitem 1</a></li>
                        <li><a href="">Subitem 2</a></li>
                        <li><a href="">Subitem 3</a></li>
                        </ul>
                    </li>
                    <li className="me-3">
                        <a href="">TEAMPROJECT</a>
                        <ul className="dropdown-menu">
                        <li><a href="">Subitem 1</a></li>
                        <li><a href="">Subitem 2</a></li>
                        </ul>
                    </li>
                    <li className="me-3">
                        <a href="">COMMUNITY</a>
                        <ul className="dropdown-menu">
                        <li><a href="">Subitem 1</a></li>
                        <li><a href="">Subitem 2</a></li>
                        <li><a href="">Subitem 3</a></li>
                        </ul>
                    </li>
                    <li className="me-3">
                        <a href="" className='hd_contact'>CONTACT</a>
                    </li>
                    </ul>
            </div>
          
            
            
        </header>
    )
}

export default Hd