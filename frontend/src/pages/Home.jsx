import React from 'react'
import { Helmet } from 'react-helmet-async';
import './Home.scss'
function Home() {
    return (
        <>
            <Helmet>
                <title>Hello World</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>


            <section className="overlay__blog">
                <div className="overlay__text">
                    <p className="blog__head">Special Dish</p>
                    <p className="blog__text">By Chef Francis Smith</p>
                </div>
            </section>

            <section className='welcome'>
                <div className='welcomegeneral'>
                    <div className='welcometext'>
                        <div><i class="fa-brands fa-stack-overflow"></i></div>
                        <div>
                            <div></div>
                            <p>Welcome</p>
                            <div></div>
                        </div>
                    </div>
                    <div className='cards'>
                        <div className='card'>
                            <h3>2002</h3>
                            <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                        </div>
                        <div className='card'>
                            <h3>2010 </h3>
                            <p>Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium.</p>
                        </div>
                        <div className='card'>
                            <h3>2018</h3>
                            <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                        </div>
                    </div>
                    <div className='iconsign'>
                        <i class="fa-solid fa-signature"></i>
                    </div>
                </div>
            </section>



            <section className='testimonials'>
                <div className='testimonialstext'>
                    
<div><i style={{color:"white"}} class="fa-solid fa-ice-cream"></i></div>

                    <div>
                        <div></div>
                        <h2 className='headtest'>Testimonials</h2>
                        <div></div>
                    </div>
                   <div>
                   <p className='texttest'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolore aspernatur voluptas, nihil nisi saepe laboriosam natus et dolorum dolorem, nobis vero optio quaerat illum accusantium, quis laborum a? Laudantium iusto facere eaque odio consectetur necessitatibus consequuntur, tenetur error eligendi? A, eos suscipit quam ipsa expedita, deserunt sunt iure ipsum cum id dolores? Laudantium illum dicta quas doloremque ipsam aspernatur maiores nostrum inventore earum. Eaque in dolorum, officia velit neque nihil ut libero voluptatem iusto reiciendis ipsam repudiandae, aut dicta magni! Necessitatibus quod distinctio officia voluptatibus eum! Nesciunt quia et itaque neque, magni cumque iure! Doloremque dignissimos accusamus iure ut!
                    </p>
                   </div>
                    <div>
                        <p style={{color:"white"}}>Ted Chapman,Client</p>
                    </div>
                </div>
            </section>


            <section className='welcome'>
                <div className='welcomegeneral'>
                    <div className='welcometext'>
                        <div><i class="fa-brands fa-stack-overflow"></i></div>
                        <div>
                            <div></div>
                            <p>Our Services</p>
                            <div></div>
                        </div>
                    </div>
                    <div className='cardsourservices'>
                        <div className='ourservices'>
                            <h3>2002</h3>
                            <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                        </div>
                        <div className='ourservices'>
                            <h3>2010 </h3>
                            <p>Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium.</p>
                        </div>
                        <div className='ourservices'>
                            <h3>2018</h3>
                            <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                        </div>
                        <div className='ourservices'>
                            <h3>2018</h3>
                            <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                        </div>
                    </div>
                    <div className='iconsign'>
                        <i class="fa-solid fa-signature"></i>
                    </div>
                </div>
            </section>


<section className='ourmenusection'>

<div className='generalmenu'>
    <div></div>
<h2>Our Menu</h2>
<div></div>

<div className='opinion'>
    <li>Breakfast</li>
    <li>Brunch</li>
    <li>Lunch</li>
    <li>Dinner</li>
</div>

<div className='menuprice'>
    <div>
    <div>
<h3>Scrambled Eggs with ham</h3>
<p>with wild mushrooms and asparagus   ................................ $9.00</p>
    </div>
<h3>Scrambled Eggs with ham</h3>
<p>with wild mushrooms and asparagus   ................................ $9.00</p>
    
    <div>
<h3>Scrambled Eggs with ham</h3>
<p>with wild mushrooms and asparagus   ................................ $9.00</p>
    </div>
    <div>
<h3>Scrambled Eggs with ham</h3>
<p>with wild mushrooms and asparagus   ................................ $9.00</p>
    </div>
    </div>
    
    <div>

    <div>
<h3>Scrambled Eggs with ham</h3>
<p>with wild mushrooms and asparagus   ................................ $9.00</p>
    </div>
<h3>Scrambled Eggs with ham</h3>
<p>with wild mushrooms and asparagus   ................................ $9.00</p>
    
    <div>
<h3>Scrambled Eggs with ham</h3>
<p>with wild mushrooms and asparagus   ................................ $9.00</p>
    </div>
    <div>
<h3>Scrambled Eggs with ham</h3>
<p>with wild mushrooms and asparagus   ................................ $9.00</p>
    </div>
    </div>
</div>

</div>



</section>
        </>





    )
}

export default Home