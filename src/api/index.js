import instance from './instance'

import authModule from './auth'
import filmsModule from './films'
import documentsModule from './documents'

export default {
  auth: authModule(instance.instanceDocuments),
  documents: documentsModule(instance.instanceDocuments),
  films: filmsModule(instance.instanceFilms),
}
