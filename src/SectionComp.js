import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';  
//Using props get data from notes and desconstruct it
function SectionComp(props) {
    let {notes}=props;

  //handle event function  
    function Handleevent(id) {
    let Button = document.getElementById(`${id}`)

        if (Button.innerHTML == 'Add to cart') {

            Button.innerHTML = "Remove item"
            Button.style.backgroundColor = "#f00"
            Button.style.fontWeight = 'bold'
            //addcart get in nav bar component
            let Addcart = document.getElementById(`addcart`);
            //number type conversion 
            let AddcartValue = Number(Addcart.innerHTML);
            //then AddcartValue inbetween 0 to 6 means increment +1 and assign into Addcart.innerHtml
            if (AddcartValue >= 0 && AddcartValue <= 6) {
                Addcart.innerHTML = AddcartValue + 1
            }

        } else if (Button.innerHTML === "Remove item") {
            Button.innerHTML = "Add to cart"
            Button.removeAttribute('style')
                 //addcart get in nav bar component
            let Addcart = document.getElementById(`addcart`);
            let AddcartValue = Number(Addcart.innerHTML);
            //then AddcartValue inbetween 0 to 6 means increment +1 and assign into Addcart.innerHtml
            if (AddcartValue >= 0 && AddcartValue <= 6) {
                Addcart.innerHTML = AddcartValue - 1
            }
        }
}


// UI , Notes directly destructure, Checking if name is fancy product or not. if it is fancy product means load page otherwise update in cart using handleevent
function ProductName({ notes }) {
        if (notes.name !== 'Fancy Product'  ) {
            return (
                <div className="col mb-5">
                    <div className="card h-100">

                        <div className="badge bg-dark text-white position-absolute" >Sale</div>

                        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                        <div className="card-body p-4">
                            <div className="text-center">

{/* Getting name from notes */}

                                <h3 className="fw-bolder">{notes.name}</h3>

{/* Getting star from notes */}
                                <div className="d-flex justify-content-center small text-warning mb-2">
                                    <div>{notes.star}</div>
                                    <div>{notes.star}</div>
                                    <div>{notes.star}</div>
                                    <div>{notes.star}</div>
                                    <div>{notes.star}</div>
                                </div>
{/* Getting price from notes */}
                                <span className="text-muted text-decoration-line-through">{notes.price1}</span>
                                {notes.price2}
                            </div>
                        </div>
                     
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent" >
                               {/* id={notes.id}, it means that you want to dynamically set the id attribute of an HTML element using the value of notes.id */}
                        {/* () => HandleEvent(notes.id). This arrow function is defined inline and serves as the event handler for the onClick event. */}

{/* When the element is clicked, the arrow function will be executed, and it will call the HandleEvent function with notes.id as an argument. The notes.id likely refers to the unique identifier of a specific note. */}
                            <div className="text-center"><button className="btn btn-outline-dark mt-auto" href="#cart" id={notes.id} onClick={() => Handleevent(notes.id)}>{notes.linkname}</button></div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="col mb-5">
                    <div className="card h-100">

                        <div className="badge bg-dark text-white position-absolute" >Sale</div>

                        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                        <div className="card-body p-4">
                            <div className="text-center">


                                <h3 className="fw-bolder">{notes.name}</h3>
                                {notes.price1}
                                {notes.price2}
                            </div>
                        </div>
{/* anchor and href used to load what page we want(view option) */}
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" id={notes.id} href="#addcart">{notes.linkname}</a></div>
                        </div>
                    </div>
                </div>
            )
        }



    }

  return (
    <section className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

{/* map used to traverse notes  */}
            {notes.map((note, index) =>
                <ProductName key={note.id} notes={note} />

            )}

        </div>
    </div>
</section>
  )
}

export default SectionComp



