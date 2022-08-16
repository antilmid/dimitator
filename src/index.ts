import normalizeWrapper from './wrapper/normalizeWrapper';
import rand, {RandOptions} from './features/rand';

export  {
  RandOptions
}

export {
  rand,
}

export default {
  rand: normalizeWrapper(rand),
}