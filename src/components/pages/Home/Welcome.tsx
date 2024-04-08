import { Link } from 'react-router-dom';
import { useGetBasketQuery } from '../../../store/api/basket'
import scss from './Welcome.module.scss'
const Welcome = () => {
  const {data, isLoading} =  useGetBasketQuery();
  return (
    <div className={scss.welcome}>
      <div className="container">
        <div className={scss.content}>
          {isLoading ? (
            <h2>IsLoading...</h2>
          ) : (
            data?.result.map((item) => (
              <div key={item._id}>
                <Link to={`/${item._id}`}>
                <img src={item.photo} alt={item.titleProduct} />
                </Link>
                <h2>{item.titleProduct}</h2>
                <p>{item.price}</p>
                <p>{item.date}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Welcome