
import React from 'react'
import { ContactUs } from '../ContactUs/ContactUs'
import './style-index.css'
export const Index = () => {
  return (
    <div>
    <header>
        <nav>
            <img src="../../../src/assets/log-blanco.svg" id="img-logo" alt="" />
            <div class="bar-nav">
                <input type="text" className="input-nav" placeholder="Buscar..." />
                <img id='search-icon' src='../../../src/assets/search.svg' />
            </div>
            <div class="content-nav">
            <a href="#">Inicio </a>
            <a href="#">Acerca de </a>
            <a href="#">Categorias </a>
            <a href="#" id="log">Ingresa Aquí <hr></hr></a>
            <a href="#" id="register">Registrate </a>

        </div>
            
        </nav>
        <section className="textos-header">
            <h1>YourEvent</h1>
            <h2>Eventos en el Quindío <br></br> A solo un click</h2>
        </section>
        <div className="wave" style={{height: "150px", overflow: "hidden"}}>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none"
                style={{
                height: "100%",
                width: "100%"
                }}>
                <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                    style={{stroke: "none", fill: "#fff"}}></path>
            </svg></div>
    </header>
    <main>
        <section className="contenedor sobre-nosotros">
            <h2 className="titulo">Nuestro Producto</h2>
            <div className="contenedor-sobre-nosotros">
                <img src="../../../src/assets/ilustracion4.svg" alt="" className="imagen-about-us"/>
                <div className="contenido-textos">
                    <h3><span>1</span>Los mejores productos</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veniam eius aspernatur ad
                        consequuntur aperiam minima sed dicta odit numquam sapiente quam eum, architecto animi pariatur,
                        velit doloribus laboriosam ut.</p>
                        <h3><span>2</span>Los mejores productos</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veniam eius aspernatur ad
                            consequuntur aperiam minima sed dicta odit numquam sapiente quam eum, architecto animi pariatur,
                            velit doloribus laboriosam ut.</p>
                            <h3><span>3</span>Los mejores productos</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veniam eius aspernatur ad
                                consequuntur aperiam minima sed dicta odit numquam sapiente quam eum, architecto animi pariatur,
                                velit doloribus laboriosam ut.</p>
                    <h3><span>4</span>Los mejores productos</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veniam eius aspernatur ad
                        consequuntur aperiam minima sed dicta odit numquam sapiente quam eum, architecto animi pariatur,
                        velit doloribus laboriosam ut.</p>
                </div>
            </div>
        </section>
       
    </main>
    <section className='contact-us'>
            <ContactUs/>
    </section>

    <footer>
        <div className="contenedor-footer">
            <div className="content-foo">
                <h4>Phone</h4>
                <p>8296312</p>
            </div>
            <div className="content-foo">
                <h4>Email</h4>
                <p>8296312</p>
            </div>
            <div className="content-foo">
                <h4>Location</h4>
                <p>8296312</p>
            </div>
        </div>
        <h2 className="titulo-final">&copy; YourEvent | YourEvent</h2>
    </footer>

    </div>
  )
}



