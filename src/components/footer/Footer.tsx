import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

function Footer() {
    let data = new Date().getFullYear();

    return (
        <div className="w-full bg-black text-white py-4 flex justify-center">
            <div className="flex items-center space-x-5">
                <a href="https://www.linkedin.com/in/seu_usuario" target="_blank">
                    <LinkedinLogo size={36} weight='bold' />
                </a>
                <a href="https://www.instagram.com/seu_usuario" target="_blank">
                    <InstagramLogo size={36} weight='bold' />
                </a>
                <a href="https://www.facebook.com/seu_usuario" target="_blank">
                    <FacebookLogo size={36} weight='bold' />
                </a>
                <p className="text-xl font-bold">
                    PraçaFit | {data}
                </p>
            </div>
        </div>
    );
}

export default Footer;
