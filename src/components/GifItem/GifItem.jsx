
const GifItem = ({title, url}) => {

    return ( 
        <di className='card'>
            <img src={url} alt={title}></img>
            <p>{title}</p>

        </di>
     );
}
 
export default  GifItem;