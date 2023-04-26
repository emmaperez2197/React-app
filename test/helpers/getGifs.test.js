 import { string } from 'prop-types'
import {getGif} from '../../src/helpers/getGifs'

 describe('Test getGifs', ()=>{

    test('Debe retornar el array de gifs',async ()=>{

        const gifs = await getGif('naruto')

        //con toBeGreaterThan comparamos que el largo que llegue sea mayor a 0
        expect(gifs.length).toBeGreaterThan( 0 )
        // aca verificamos si esta llegando el objeto que armamos con sus propoiedades
         // luego con el expect.any  verifica que llegue el tipo de dato que esperamos
        expect(gifs[0]).toStrictEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
 })