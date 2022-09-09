import React from 'react'

const Services = () => {
  return (
    <>
    <div className="service">
                <div className="title">
                    <h2>Our Services</h2>
                </div>

                <div className="box">
                    <div className="card">
                        <i class="fa-solid fa-bars"></i>
                        <h5>Web Development</h5>
                        <div className="pra">
                            <p>Websites should be built with two primary goals:
                                It needs to work acroos all devices. Secondly, it needs to be fast as poosible.
                            </p>
                            <p style={{ textAlign: "center" ,marginTop:"20px" }}>
                                <a className="button" href="#">Read More</a>
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <i class="fa-regular fa-user"></i>
                        <h5>Mobile App Development</h5>
                        <div className="pra">
                            <p>Mobile App should be built with two primary goals:
                                It needs to work across all devices. Secondly, it needs to be fast as poosible.
                            </p>
                            <p style={{ textAlign: "center" ,marginTop:"20px" }}>
                                <a className="button" href="#">Read More</a>
                            </p>
                        </div>
                    </div>

                    <div className="card">



                        <i class="fa-regular fa-bell"></i>
                        <h5>Window App Development</h5>
                        <div className="pra">
                            <p>Window based Application should be built with two primary goals:
                                It needs to work acroos all devices. Secondly, it needs to be fast as poosible.
                            </p>
                            <p style={{ textAlign: "center" ,marginTop:"20px"}}>
                                <a className="button" href="#">Read More</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    
    
    </>
  )
}

export default Services
