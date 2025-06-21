import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

function Footer() {
    let data = new Date().getFullYear();

    return (
        <>
            <div className="flex">
                <div className="flex w-100 pr-5 bg-black text-white">
                    <div className="flex p-2 items-center gap-x-5 justify-center">
                        <Link to="/sobre#membros">
                            <LinkedinLogo size={36} weight='bold'/>
                        </Link>
                        <Link to="/sobre#membros">
                            <InstagramLogo size={36} weight='bold' />
                        </Link>
                        <a href="https://github.com/Grupo06-Java79/Frontend_fitness" target="_blank" rel="noopener noreferrer">
                            <GithubLogo size={36} weight='bold' />
                        </a>
                        <p className='text-xl font-bold px-5'>
                            PRAÇAFit
                        </p>
                        <p className='text-xl font-bold '>
                            {data}
                        </p>
                    </div>
                </div>
                <div className="bg-[#CEF9A9] w-full"/>
            </div>
        </>
    );
}

export default Footer;
