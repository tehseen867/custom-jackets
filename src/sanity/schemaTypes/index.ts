import { type SchemaTypeDefinition } from 'sanity'
import manProduct from '../schemas/manProduct'
import womenProduct from '../schemas/womenProduct'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [manProduct,womenProduct],
}
