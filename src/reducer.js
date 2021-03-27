export const reducer = (state, action) => {
  if (action.type === 'SET_LOADED_SUCCESS') {
    const newState = { ...state, isLoading: false };
    return newState;
  }
  if (action.type === 'DISPLAY_ITEMS') {
    const newState = {
      ...state,
      filteredRecipes: action.payload,
    };
    return newState;
  }
  if (action.type === 'SET_NAME_FILTER') {
    const newState = {
      ...state,
      nameFilter: action.payload,
    };
    return newState;
  }
  if (action.type === 'SET_CATEGORY_FILTER') {
    const newState = {
      ...state,
      categoryFilter: action.payload,
    };
    return newState;
  }
  if (action.type === 'TOGGLE_CUSTOM_FILTER') {
    let newState;
    if (state.customFilters[action.payload] === true) {
      newState = {
        ...state,
        customFilters: { ...state.customFilters, [action.payload]: false },
      };
    } else {
      newState = {
        ...state,
        customFilters: { ...state.customFilters, [action.payload]: true },
      };
    }
    return newState;
  }
  if (action.type === 'RESET_CUSTOM_FILTERS') {
    let newCustomFilters = { ...state.customFilters };
    for (const filterName in newCustomFilters) {
      newCustomFilters[filterName] = false;
    }
    const newState = { ...state, customFilters: newCustomFilters };
    return newState;
  }
  if (action.type === 'ADD_INGREDIENTS_FILTER') {
    const newState = {
      ...state,
      ingredientsFilters: [
        ...state.ingredientsFilters,
        { id: Date.now(), ingredientName: action.payload.toLowerCase() },
      ],
    };
    return newState;
  }
  if (action.type === 'DELETE_INGREDIENTS_FILTER') {
    const newState = {
      ...state,
      ingredientsFilters: state.ingredientsFilters.filter(
        (currentIngredient) =>
          currentIngredient.ingredientName !== action.payload
      ),
    };
    return newState;
  }
  if (action.type === 'DELETE_ALL_INGREDIENTS_FILTERS') {
    const newState = {
      ...state,
      ingredientsFilters: [],
    };
    return newState;
  } else {
    console.log('Unhandled action type:', action.type);
    return { ...state };
  }
};
