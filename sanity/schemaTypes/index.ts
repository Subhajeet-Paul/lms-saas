import { type SchemaTypeDefinition } from 'sanity'

import { courseType } from './courseType'
import { lessonType } from './lessonType'
import { moduleType } from './moduleType'
import { categoryType } from './categoryType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [courseType, lessonType, moduleType, categoryType],
}
