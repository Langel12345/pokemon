import { FC } from "react"
import Head from "next/head"
import { Navbar } from '../ui/Navbar';
interface Props {
    children:JSX.Element
    title?: string
}

const origin = ( typeof  window === 'undefined') ? '' : window.location.origin
export const Layout: FC<Props> = ({children,title}) => {
    
    return (
        <>
            <Head>
                <title>{ title }</title>
                <meta name="autor" content="LuisDavila"></meta>
                <meta name='descripcion' content={`Informacion sobre el pokemon ${title} `}></meta>
                <meta name="keywords" content={ ` ${title}, pokemon, poquedex ` }></meta>

                <meta property="og:title" content={` Informacion sobre el pokemon ${ title } `} />
                <meta property="og:description" content={` Esta es la pagina sobre ${ title } `} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />

            </Head>
                <Navbar />
            <main style={{
                padding: '0px 20px'
            }}>
                { children }
            </main>
        </>
    )
}
