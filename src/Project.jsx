
import React from "react";
import '../src/project.css'

function Project() {



  return (
    <>
      <div id="project">
        <div class="container card bg-transparent mt-1 p-5  " style={{ border: "1px solid #8b3287", boxShadow: "rgba(148, 54, 132, 0.75) 12px 8px 12px" }}>
          <h1 class="sub-title text-center myname" >Projects</h1>
          <hr />


          <section id="portfolio" class="portfolio">
            <div class="container">
              <div class="row portfolio-container">
                
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div class="card  portfolio-wrap">

                    <img src="https://assets.materialup.com/uploads/f04e67e3-ccce-49b8-80ca-b3531ebe3736/preview.png" class="img-fluid" alt="" />
                    <div className='card-title text-center pt-2'><h4>MERN Pizza App</h4></div>
                    <p className="text-center p-1"> React Js/Node Js/Express Js/MongoDB</p>
                    <div class="portfolio-info">

                      <div class="portfolio-links ">
                        <a href="https://www.w3schools.com/bootstrap4/img_avatar3.png" data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="F-code">
                          <i class="fa fa-plus"></i>
                        </a>
                        <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox me-4" title="Deploy link">
                          <i class="fa fa-link"></i>
                        </a>
                        <a href="https://www.w3schools.com/bootstrap4/img_avatar3.png" data-gallery="portfolioGallery" class="portfolio-lightbox me-4" title="B-code">
                          <i class="fa fa-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
               
               
              </div>

            </div>
          </section>
        </div>

      </div>
    </>
  )
}

export default Project

