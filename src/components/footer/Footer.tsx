import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex">
                <div className="flex w-100 pr-5 bg-black text-white">
                    <div className="flex p-2">
                        <a href="https://www.linkedin.com/in/seu_usuario" target="_blank" className="pl-5">
                            <LinkedinLogo size={36} weight='bold'/>
                        </a>
                        <a href="https://www.instagram.com/seu_usuario" target="_blank" className="px-5">
                            <InstagramLogo size={36} weight='bold' />
                        </a>
                        <a href="https://www.facebook.com/seu_usuario" target="_blank" >
                            <FacebookLogo size={36} weight='bold' />
                        </a>
                        <p className='text-xl font-bold px-5'>
                            PraçaFit
                        </p>
                        <p className='text-xl font-bold '>
                            {data}
                        </p>
                    </div>
                </div>
                <div className="bg-[#CEF9A9] w-full"/>
            </div>
        </>
    )
}

export default Footer