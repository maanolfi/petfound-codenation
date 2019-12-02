import React from 'react'

const Banner = () => {
  return (
    <section className="section banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <h2 className="cd-headline clip is-full-width mb-4 ">
              Pet Found <br />
              <span className="cd-words-wrapper text-color">
                <b className="is-visible">Adote um amigo. </b>
                <b>Encontre seu amigo.</b>

              </span>
            </h2>
            <p>Pet Found ajuda a reunir animais de estimação que estão perdidos e achados,
             como cachorros, gatos e pássaros, com suas famílias. Através dos posts feito aqui
             suas possibilidades podem aumentar, outras pessoas podem ajudar.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
