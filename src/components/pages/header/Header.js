
import './Header.css';

export default function Header() {
    return(
       <header>
       <nav id="navbar">
            <NavTabs to="/" >About Me</NavTabs>
            <NavTabs to="/contactMe" >Contact Me</NavTabs>
            <NavTabs to="/resume" >Resume</NavTabs>
            <NavTabs to="/projects" >Projects</NavTabs>
        </nav>
        </header>
    )
}
