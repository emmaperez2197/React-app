import { render, screen} from '@testing-library/react'
import GifItem from '../../../src/components/GifItem'


describe('Test component <GifItem/>', ()=>{

    const title = 'Naruto'
    const url = 'https://naruto-uzumaki/images.jpg'

    test('debe de hacer match con el snapshot', ()=>{
        //con el render renderizamosel componente desde nuestros test
        //container es una propiedad de render para poder usar el snapshot (toMatchSnapshot)
        const {container} = render(<GifItem title={title} url={url}/>)

        expect(container).toMatchSnapshot()
    })

    test('debe devolver la URL y el ALT indicado ', ()=>{

        render(<GifItem title={title} url={url} />)
        
        //con el scree.getByrol traemos la etiqueta 'img' y luego corroboramos sus atributos url y alt
        // expect(screen.getByRole('img').src).toBe(url)

        //Forma mas optima


        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(url);
        expect(alt).toBe(alt);


    })

    test('Debe devolver el titulo del componente',() =>{

        render(<GifItem title={title} url={url} />)

        //screen.getByText(title) chequea que este el valor del texto
        expect(screen.getByText(title)).toBeTruthy();
    })
})