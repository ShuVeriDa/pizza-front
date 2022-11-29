import {FC, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatchType, useAppSelector} from "../../redux/store";
import {useParams} from "react-router-dom";

import styles from './FullPizza.module.scss'
import {addItem, CartItemType} from "../../redux/cart/cartSlice";
import {Comments} from "../../components/Comments/Comments";
import {FetchOneFoodTC} from "../../redux/food/foodSlice";

const typesName = ['тонкое', "традиционное"]

type FullPizzaPropsType = {}

export const FullPizza: FC<FullPizzaPropsType> = () => {
  const [activeType, setActiveType] = useState<number>(0)
  const [activeSize, setActiveSize] = useState<number>(0)
  const {food} = useAppSelector(state => state.food)
  const dispatch = useDispatch<AppDispatchType>()
  const {id} = useParams()

  // const food = item ? item : drink

  const onClickAdd = () => {
    const itemCart: CartItemType = {
      id: food!.id,
      count: 0,
      type: !food?.liters ? typesName[activeType] : undefined,
      size: food?.sizes ? food.sizes[activeSize] : undefined,
      price: food!.price,
      imageUrl: food!.imageUrl,
      title: food!.title,
      liter: food?.liters ? food.liters : undefined
    }
    dispatch(addItem(itemCart))
  }

  console.log(food)


  useEffect(() => {
      dispatch(FetchOneFoodTC(id!))
  }, [])


  if (!food) {
    return <>Loading...</>
  }

  return (
    <div className='container'>
      <div className={styles.wrapper}>
        <div className={styles.imgBlock}>
          <img src={food.imageUrl} className={styles.image} alt=""/>
        </div>
        <div className={styles.foodConfigBlock} style={{position: "relative",}}>
          <div>
            <h2>{food.title}</h2>
            <h4>{food.price} ₽, {food?.liters ? `${food?.liters} л.` :  <span>{typesName[activeType]}, {food?.sizes![activeSize]} см.</span>}

            </h4>
            {food?.types?.length && food.sizes?.length
              ? <div style={{width: '280px', textAlign: "center", marginTop: "10px"}} className="pizzaBlockSelector">
                <ul>
                  {food.types.map((type) => (
                    <li key={type}
                        className={activeType === type ? 'active' : ''}
                        onClick={() => setActiveType(type)}
                    >
                      {typesName[type]}
                    </li>
                  ))}
                </ul>
                <ul>
                  {food.sizes.map((size, i) => (
                    <li key={size}
                        className={activeSize === i ? 'active' : ''}
                        onClick={() => setActiveSize(i)}
                    >
                      {size} см.
                    </li>
                  ))}
                </ul>
              </div> : ''
            }
            <div style={{display: "flex", justifyContent: "space-between", width: '286px', padding: '0 5px', marginTop: "5px"}}>
              <div>
                <svg fill="none" height="20" viewBox="0 0 16 16" width="20" xmlns="http://www.w3.org/2000/svg"><g
                  fill="currentColor"><path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path><path clipRule="evenodd"
                                                                                                         d="M15.5 8c0-1-3-5-7.5-5S.5 7 .5 8s3 5 7.5 5 7.5-4 7.5-5zm-4 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"
                                                                                                         fillRule="evenodd"></path></g>
                </svg>
                {food.views}
              </div>
              <div>

                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="20" height="20" viewBox="0 0 256 256"
                     xmlSpace="preserve">

<defs>
</defs>
                  <g style={{
                    stroke: "none",
                    strokeWidth: 0,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fill: "none",
                    fillRule: "nonzero",
                    opacity: 1
                  }} transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
	<path d="M 50.755 19.668 c -0.159 0 -0.319 -0.038 -0.466 -0.115 L 45 16.772 l -5.29 2.781 c -0.337 0.177 -0.745 0.148 -1.054 -0.076 c -0.308 -0.224 -0.462 -0.603 -0.398 -0.979 l 1.01 -5.89 l -4.28 -4.172 c -0.273 -0.266 -0.371 -0.663 -0.253 -1.025 s 0.431 -0.626 0.808 -0.681 l 5.915 -0.859 l 2.644 -5.359 c 0.337 -0.683 1.458 -0.683 1.795 0 l 2.644 5.359 l 5.914 0.859 c 0.377 0.055 0.69 0.319 0.808 0.681 c 0.117 0.362 0.02 0.76 -0.253 1.026 l -4.28 4.172 l 1.01 5.89 c 0.064 0.375 -0.09 0.755 -0.398 0.979 C 51.168 19.604 50.962 19.668 50.755 19.668 z M 37.838 8.419 l 3.205 3.124 c 0.235 0.23 0.343 0.561 0.288 0.886 l -0.757 4.41 l 3.961 -2.083 c 0.291 -0.153 0.64 -0.153 0.931 0 l 3.961 2.083 l -0.756 -4.41 c -0.056 -0.324 0.052 -0.656 0.287 -0.886 l 3.205 -3.124 l -4.428 -0.643 c -0.326 -0.047 -0.608 -0.252 -0.753 -0.548 L 45 3.216 l -1.98 4.012 c -0.146 0.296 -0.427 0.5 -0.754 0.548 L 37.838 8.419 z" style={{stroke: "none", strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(0,0,0)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                    <path d="M 79.572 68.851 c 1.361 -1.002 2.245 -2.616 2.245 -4.432 v -0.897 c 0 -1.98 -1.051 -3.719 -2.625 -4.688 c 1.272 -1.008 2.09 -2.567 2.09 -4.313 v -0.897 c 0 -3.033 -2.468 -5.501 -5.503 -5.501 l -17.705 0.028 c 1.064 -11.168 0.059 -17.708 -3.147 -20.539 c -1.851 -1.633 -4.373 -2.048 -7.705 -1.274 l -0.737 0.171 l -0.036 0.755 c -0.464 9.738 -6.423 22.906 -12.256 24.679 v -0.652 c 0 -1.872 -1.652 -3.394 -3.682 -3.394 H 11.669 c -2.03 0 -3.682 1.522 -3.682 3.394 v 35.314 c 0 1.871 1.652 3.393 3.682 3.393 h 18.843 c 2.03 0 3.682 -1.522 3.682 -3.393 v -0.027 c 3.09 2.023 8.158 3.254 13.235 3.134 h 25.367 c 3.033 0 5.501 -2.467 5.501 -5.5 v -0.898 c 0 -1.339 -0.481 -2.568 -1.279 -3.523 c 2.797 -0.255 4.996 -2.614 4.996 -5.476 v -0.898 C 82.013 71.517 81.044 69.838 79.572 68.851 z M 80.012 74.316 c 0 1.93 -1.57 3.499 -3.5 3.499 h -3.717 H 68.31 c -0.553 0 -1.001 0.447 -1.001 1.001 c 0 0.553 0.447 1.001 1.001 1.001 h 4.486 c 1.93 0 3.5 1.57 3.5 3.5 v 0.898 c 0 1.93 -1.57 3.499 -3.5 3.499 H 47.403 c -5.582 0.149 -11.273 -1.511 -13.47 -3.929 l -1.741 -1.915 v 4.738 c 0 0.754 -0.769 1.392 -1.681 1.392 H 11.669 c -0.911 0 -1.681 -0.638 -1.681 -1.392 V 51.293 c 0 -0.755 0.769 -1.393 1.681 -1.393 h 18.843 c 0.911 0 1.681 0.638 1.681 1.393 v 1.844 v 1.06 v 16.449 c 0 0.553 0.448 1.001 1.001 1.001 c 0.553 0 1.001 -0.447 1.001 -1.001 V 53.999 c 7.351 -1.562 13.461 -16.045 14.206 -25.861 c 2.295 -0.41 3.998 -0.089 5.203 0.975 c 2.745 2.423 3.52 8.944 2.371 19.937 l -0.116 1.106 l 19.924 -0.032 c 1.93 0 3.5 1.57 3.5 3.5 v 0.897 c 0 1.93 -1.57 3.5 -3.5 3.5 H 68.31 c -0.553 0 -1.001 0.447 -1.001 1.001 c 0 0.553 0.447 1.001 1.001 1.001 h 7.472 h 0.535 c 1.93 0 3.5 1.57 3.5 3.5 v 0.897 c 0 1.93 -1.57 3.5 -3.5 3.5 H 68.31 c -0.553 0 -1.001 0.447 -1.001 1.001 c 0 0.553 0.447 1.001 1.001 1.001 h 8.007 h 0.195 c 1.93 0 3.5 1.569 3.5 3.499 V 74.316 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: "none", strokeLinecap: 'butt', strokeLinejoin: "miter", strokeMiterlimit: 10, fill: 'rgb(0,0,0)', fillRule: "nonzero", opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                    <path d="M 21.38 83.291 c -2.803 0 -5.083 -2.28 -5.083 -5.083 c 0 -2.803 2.28 -5.084 5.083 -5.084 s 5.083 2.28 5.083 5.084 C 26.463 81.01 24.183 83.291 21.38 83.291 z M 21.38 75.125 c -1.7 0 -3.082 1.383 -3.082 3.083 c 0 1.699 1.383 3.082 3.082 3.082 c 1.699 0 3.082 -1.383 3.082 -3.082 C 24.462 76.508 23.079 75.125 21.38 75.125 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(0,0,0)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                    <path d="M 73.88 29.304 c -0.159 0 -0.319 -0.038 -0.466 -0.115 l -5.289 -2.781 l -5.291 2.781 c -0.334 0.177 -0.744 0.148 -1.053 -0.076 c -0.308 -0.224 -0.462 -0.603 -0.398 -0.979 l 1.01 -5.89 l -4.28 -4.172 c -0.273 -0.266 -0.37 -0.663 -0.253 -1.025 c 0.118 -0.362 0.431 -0.626 0.808 -0.681 l 5.914 -0.859 l 2.645 -5.359 c 0.336 -0.683 1.458 -0.683 1.794 0 l 2.645 5.359 l 5.914 0.859 c 0.377 0.055 0.69 0.319 0.808 0.681 c 0.117 0.362 0.02 0.76 -0.253 1.026 l -4.28 4.172 l 1.01 5.89 c 0.064 0.375 -0.09 0.755 -0.398 0.979 C 74.293 29.239 74.087 29.304 73.88 29.304 z M 60.962 18.054 l 3.205 3.124 c 0.235 0.23 0.343 0.561 0.287 0.885 l -0.756 4.41 l 3.962 -2.083 c 0.291 -0.153 0.638 -0.153 0.931 0 l 3.96 2.083 l -0.756 -4.41 c -0.056 -0.324 0.052 -0.656 0.287 -0.886 l 3.205 -3.124 l -4.428 -0.643 c -0.326 -0.047 -0.608 -0.252 -0.753 -0.548 l -1.98 -4.012 l -1.98 4.012 c -0.146 0.296 -0.427 0.5 -0.753 0.548 L 60.962 18.054 z" style={{stroke: "none", strokeWidth: 1, strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fill:" rgb(0,0,0)", fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                    <path d="M 28.594 29.304 c -0.159 0 -0.319 -0.038 -0.466 -0.115 l -5.29 -2.781 l -5.29 2.781 c -0.337 0.177 -0.745 0.148 -1.054 -0.076 c -0.308 -0.224 -0.462 -0.603 -0.398 -0.979 l 1.01 -5.89 l -4.28 -4.172 c -0.273 -0.266 -0.371 -0.663 -0.253 -1.025 c 0.118 -0.362 0.431 -0.626 0.808 -0.681 l 5.914 -0.859 l 2.645 -5.359 c 0.169 -0.341 0.516 -0.558 0.897 -0.558 l 0 0 c 0.381 0 0.729 0.216 0.897 0.558 l 2.644 5.359 l 5.915 0.859 c 0.377 0.055 0.69 0.319 0.808 0.681 c 0.118 0.362 0.02 0.76 -0.253 1.025 l -4.28 4.172 l 1.01 5.89 c 0.064 0.375 -0.09 0.755 -0.398 0.979 C 29.008 29.239 28.801 29.304 28.594 29.304 z M 22.839 24.277 c 0.16 0 0.32 0.038 0.466 0.115 l 3.961 2.083 l -0.757 -4.41 c -0.055 -0.324 0.052 -0.656 0.288 -0.886 l 3.205 -3.124 l -4.429 -0.643 c -0.326 -0.047 -0.608 -0.252 -0.754 -0.548 l -1.98 -4.013 l -1.981 4.013 c -0.146 0.296 -0.427 0.5 -0.753 0.548 l -4.429 0.643 l 3.205 3.124 c 0.235 0.23 0.343 0.561 0.288 0.886 l -0.757 4.41 l 3.961 -2.083 C 22.519 24.315 22.679 24.277 22.839 24.277 z" style={{stroke: "none", strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(0,0,0)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
</g>
</svg>
                {food.favorites}
              </div>
            </div>

          </div>

          <div className="pizzaBlockBottom" style={{position: 'absolute', bottom: '30px'}}>
            <button onClick={onClickAdd} className="button buttonOutline buttonAdd">
              <span>Добавить в корзину за {food.price} ₽</span>
              {food.count > 0 && <i>{food.count}</i>}
            </button>
          </div>
        </div>
      </div>
      <Comments foodId={id}/>

    </div>
  );
};
