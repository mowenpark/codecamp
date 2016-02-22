# Flux Stores

### ReviewStore

Holds all persisted note data.

##### Actions:
- `receiveAllReviews`
- `receiveSinglereview`
- `removeReview`

##### Listeners:
- `ReviewIndex` (passes to `ReveiwIndexItem` via props)
- `ReviewDetail`

### ReviewFormStore

Holds un-persisted note data to send to the API.

##### Actions:
- `receiveReveiwFormParams`

##### Listeners:
- `ReviewForm`

### BootcampStore

Holds all persisted notebook data.

##### Actions:
- `receiveAllBootcamps`
- `receiveSingleBootcamp`
- `removeBootcamp`

##### Listeners:
- `BootcampIndex`

### NotebookFormStore

Holds un-persisted notebook data to send to the API.

##### Actions:
- `receiveNotebookFormParams`

##### Listeners:
- `NotebookForm`

### SearchStore

Holds search parameters to send to the API.

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `SearchIndex`

### SearchSuggestionStore

Holds typeahead suggestions for search.

##### Actions:
- `receiveSearchSuggestions`

##### Listeners:
- `SearchSuggestions`
