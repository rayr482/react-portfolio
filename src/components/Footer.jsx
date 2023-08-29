import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { GrStackOverflow } from "react-icons/gr";

export default function Footer() {
    return (
        <footer>
            <p>
                <ul>
                    <a href='https://github.com/rayr482'>
                        <li className='logo'>
                            <AiFillGithub />
                        </li>
                    </a>

                    <a href='#'>
                        <li className='logo'>
                            <AiFillLinkedin />
                        </li>
                    </a>

                    <a href='#'>
                        <li className='logo'>
                            <GrStackOverflow />
                        </li>
                    </a>
                </ul>
            </p>
        </footer>
    );
}