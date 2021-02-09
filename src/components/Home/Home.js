import './Home.css'
import Product from './Product/Product'
import React from 'react'
import Slides from './Slides/Slides'



function Home  ()  {    


    return (
        <div className='home'>
            <div className='slider'>
            <Slides/>
            </div>
               
                <div className="home__container">
                
                <div className='home__row'>
                    <Product 
                    id='45' 
                    title='juegos del hambre'
                     price={11}
                     img={'https://libros-prohibidos.com/wp-content/uploads/2015/01/los-juegos-del-hambre.jpg'}
                     />
                   
                    <Product
                      id='12'
                      title='kenwood kmix stand mixer for baking, stylish kitchen mixer k beater'
                      price={239}
                      img={'https://th.bing.com/th/id/OIF.GBI6gsXd5FWOUjOqZxfHYw?w=168&h=180&c=7&o=5&dpr=1.25&pid=1.7'}

                     />

                </div>
                <div className='home__row'>
                <Product
                    id='45'
                    title='new apple ipad pro silver 4 generation'
                    price={588}
                    img={'https://th.bing.com/th/id/OIP.Mic6Vfs_Dm8O2vKdMq_72QHaEo?w=278&h=180&c=7&o=5&dpr=1.25&pid=1.7'}
                    />
                    <Product
                    id='21'
                    title='amazon speacher smart alexa'
                    price={98}
                    img={'https://i.ytimg.com/vi/kuqaSRd16Nw/maxresdefault.jpg'}/>
                    <Product
                    id='15'
                    title='Samsung Pay on Galaxy Watch requires network connection through LTE or Wi-Fi or via Bluetooth pairing with compatible smartphone'
                    price={123}
                    img={'https://th.bing.com/th?q=Samsung+Fitness+Watch&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.25&pid=InlineBlock&mkt=en-WW&adlt=strict&t=1&mw=247'}/>
                </div>
                <div className='home__row'>
                <Product
                id='7878'
                title='Experience a New Level of Cultivating. Samsung LEDs revolutionize agriculture with full spectrum horticulture lighting that enriches both crop quality and output.               '
                price={4562}
                img={'https://th.bing.com/th/id/OIP._1o45iTbYgQ3NJELuCU3ggHaHa?w=174&h=180&c=7&o=5&dpr=1.25&pid=1.7'}/>
                </div>  
                </div>
        </div>
    )
}

export default Home
