import useFetchGifs from '../../hooks/useFetchGifs';
import GifItem from '../GifItem/GifItem';
import Spinner from '../../hooks/Spinner'

const GifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>

      {
        isLoading && <Spinner/>
      }
      <div className='card-grid'>
        {images.map((image) => (

          <GifItem
            key={ image.id } 
                { ...image }
            />
        ))}
      </div>

    </>
  );
}

export default GifGrid;