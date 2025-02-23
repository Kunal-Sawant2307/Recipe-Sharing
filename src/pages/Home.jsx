import React from 'react'

const Home = () => {
  return (
    <div>
      <br />
      <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="back2.jpg" class="d-block w-100" alt="..." height={700} width={500}/>
    </div>
    <div class="carousel-item">
      <img src="back3.jpg" class="d-block w-100" alt="..." height={700} width={500}/>
    </div>
    <div class="carousel-item">
      <img src="back1.jpg" class="d-block w-100" alt="..." height={700} width={500}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  <br /><br /><br /><br />
</div>
      <h1 align={'center'}color='Red'>TOP Recipes</h1>
      <br /><br />
      <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="recipe1.jpg" class="card-img-top" alt="..."height={400}width={300}/>
      <div class="card-body">
        <h5 class="card-title">Biryani</h5>
        <p class="card-text">To marinate the chicken for the biryani, combine the vegetable oil, garlic, ginger, chili peppers, mint, cilantro, garam masala, cinnamon and salt in a large bowl and stir together. Add the chicken pieces and toss together making sure the chicken is thoroughly coated in the marinade. Allow the chicken to marinate for at least 1 hour or up to overnight.
In a pot wide enough to hold the chicken in a single layer, add the ghee and onions and saute the onions until they are well caramelized (15-20 minutes). Transfer the caramelized onions to a bowl and set aside.
While the onions caramelize, prepare the rice by washing in a strainer under cold running water until the water runs clear.
To par-boil the rice, add the water, salt, cardamom, cumin and bay leaf to a pot and bring to a boil. Add the rice and boil for 7 minutes. Drain the rice, reserving 1 cup of the liquid.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="recipe.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Paneer Tikka</h5>
        <p class="card-text">Line a fine-mesh strainer with muslin or cheesecloth and set inside a small bowl. Pour in yogurt; let drain for 15 minutes. Discard liquid.
Mix drained yogurt, ginger-garlic paste, lemon juice, turmeric, chile powder, cumin, garam masala, and salt together in bowl. Add paneer, onion, and green bell pepper and mix well. Marinade for 1 hour.
Preheat grill for medium heat and lightly oil the grate.
Skewer marinated paneer, onion, and bell pepper onto metal skewers. Grill until vegetables are soft and cheese is browned, 6 to 8 minutes. Brush with vegetable oil and grill for 1 minute more.
Mix onion rings with green chutney and serve with skewers.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="recipe2.jpg" class="card-img-top" alt="..."height={400}width={400}/>
      <div class="card-body">
        <h5 class="card-title">Butter Chicken</h5>
        <p class="card-text">Gather all ingredients. Preheat the oven to 375 degrees F (190 degrees C).Melt 2 tablespoons butter in a skillet over medium heat. Stir in onion and garlic, and cook slowly until the onion caramelizes to a dark brown, about 15 minutes.
        Meanwhile, combine cream, tomato sauce, remaining butter, salt, cayenne pepper, and garam masala in a saucepan over medium-high heat; bring to a simmer.
        Reduce heat to medium-low, cover, and simmer, stirring occasionally, for 30 minutes. Stir in caramelized onions.While the sauce is simmering, toss chicken with vegetable oil until coated. Season with tandoori masala and spread out onto a baking sheet.
        Bake chicken in the preheated oven until no longer pink in the center, about 12 minutes.Add cooked chicken to the sauce and simmer for 5 minutes before serving.


        </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="recipe3.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Puran Poli</h5>
        <p class="card-text">Rinse 1 cup of chana dal very well in water. I didn’t soak the chana dal, but you can soak the chana dal for 30 minutes to one hour and then drain the water.
        In a 3 litre stovetop pressure cooker, cook the chana dal with 3 cups of water for 6 to 7 whistles on medium heat. The dal need should not be mushy or pasty but cooked tender and softened.
        Allow the pressure to release naturally in the cooker, then strain the cooked dal. Keep the dal in the strainer for several minutes so that all the stock is drained. The cooked lentils have to be drained very well.
        Add the cooked chana dal and 1 cup of powdered or grated jaggery. Stir and let the puran mixture cook on a low heat till the mixture becomes dry, stirring at intervals.
        </p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home