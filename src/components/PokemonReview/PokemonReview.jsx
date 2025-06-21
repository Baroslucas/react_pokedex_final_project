import like from '../../assets/img/like.svg'
import { Review } from '../Review/Review'

export function PokemonReview() {
    return (
        <div>
            <div>
                <button>
                    <img 
                        src={like} 
                        alt="like button"
                        className='' 
                    />
                </button>
                <p>2</p>
            </div>
            <div>
                <h3>Review</h3>
                <input 
                    type="text"
                    placeholder='Add a review ...'
                />
                <Review />
            </div>
        </div>
    )
}