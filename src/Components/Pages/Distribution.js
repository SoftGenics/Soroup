import React from 'react'
import './style.css'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
function Distribution() {
  return (
    <div>
<div className='container-fluid bg-container ' >
<section className='spices-masala' style={{marginTop:'13rem', marginBottom:'10rem'}}>
    <br></br>
<h1 >OUR PRODUCTS</h1>
<h2>MIDEAST PRODUCTS</h2>

	<div className="container">
		<div className="row justify-content-center">
			<div className="col-12 col-lg-4">
				<div className="card my-5">
					<img src="images/spicecard.png" className="card-img-top" alt="..." />
					<h5 className="card-title text-light">
						BLENDED SPICES
					</h5>
					<Link to="/Blended-Spices" className="btn btn-light">VIEW</Link>
				</div>
			</div>
			<div className="col-12 col-lg-4">
				<div className="card my-5">
					<img src="images/spices-whole.webp" className="card-img-top" alt="..." />
					<h5 className="card-title text-light">
						SPICES WHOLE
					</h5>
					<Link to="/spices-whole"className="btn btn-light">VIEW</Link>
				</div>
			</div>
			<div className="row justify-content-center">
			<div className="col-12 col-lg-4">
				<div className="card my-5">
					<img src="images/groceries.jpg" alt="..." />
					<h5 className="card-title text-light">
                    GROCERIES
					</h5>
					<Link to="/Groceries" className="btn btn-light">VIEW</Link>
				</div>
				</div>
				<div className="col-12 col-lg-4">
				<div className="card my-5">
					<img src="images/rice.webp" alt="..." />
					<h5 className="card-title text-light">
                    RICE
					</h5>
					<Link to="/Rice" className="btn btn-light">VIEW</Link>
				</div>
				</div>
			</div>
		</div>
	</div>
</section>
</div>
<Footer />
    </div>
  )
}

export default Distribution