export default function Menu() {

function handlerclick() {

    }
    return (

        <header>
            <nav>
                <ul>
                    <li>
                        {/* <Icon name={"lupa"} width={36} height={36} ></Icon> */}
                    </li>
                    <li onClick={handlerclick} ><a href="/">INICIO</a></li>
                    <li><a href="/shop">TIENDA</a></li>
                    <li>
                        <img src="/LOGO_KONLOMIO-removebg-preview.png" alt="" />
                    </li>
                    <li><a href="/about-us">SOBRE NOSOTROS</a></li>
                    <li><a href="/contact">CONTACTANOS</a></li>
                    <li>
                        {/* <Icon name={"COMPRA"} width={36} height={36}></Icon> */}
                    </li>
                </ul>
            </nav>
        </header>
    )
}