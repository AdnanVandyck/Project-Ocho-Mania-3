import { createGlobalStyle } from 'styled-components';
import Audiowide from "./fonts/audiowide/Audiowide-Regular.ttf";

const FontStyles = createGlobalStyle`

@font-face {
    font-family: 'Audiowide', cursive;
    src: url(${Audiowide}) format('audiowave')
}
`;



export default FontStyles