import React from 'react'
import { Link } from 'react-router-dom'

const Animal = ({ animal }) => {
  const addDefaultImage = (e) => {
    e.target.src = '/images/empty.jpg'
  }

  return (
    <div className="col-lg-4 col-6 mb-4 shuffle-item">
      <div className="position-relative inner-box">
        <div className="image position-relative ">
          <img onError={addDefaultImage} src={animal.image || '/images/empty.jpg'} alt={animal.name} className="img-fluid w-100 d-block" />
          <div className="overlay-box">
            <div className="overlay-inner">
              <Link to={`/posts/${animal.id}`} className="overlay-content">
                <h5 className="mb-0">{animal.category}</h5>
                <p>{animal.city}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Animal
