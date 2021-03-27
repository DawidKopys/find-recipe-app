import { reducer } from './reducer';
import filters from './Components/Modals/ModalFilters/filters';

describe('Reducer', () => {
  const initialState = {
    isLoading: true,
    filteredRecipes: [],
    categoryFilter: 'all',
    nameFilter: '',
    customFilters: filters.reduce(
      (o, filter) => ({ ...o, [filter.filterName]: false }),
      {}
    ),
    ingredientsFilters: [],
  };

  test('should set loaded state on load', () => {
    const newState = reducer(initialState, {
      type: 'SET_LOADED_SUCCESS',
    });

    expect(newState).toEqual({ ...initialState, isLoading: false });
  });

  test('should display some items', () => {
    const newRecipes = [
      {
        id: 1,
        name: 'Peanut Butter Porrige',
        macro: { calories: 554.6, protein: 39.2, carbs: 75.6, fats: 13.4 },
        imageURL:
          'https://res.cloudinary.com/dyk3h7z17/image/upload/v1615488065/find-recipe-app-assets/recipe-image-peanut-butter-porrige-640w_uwtcjk.png',
        category: 'breakfasts and suppers',
        tags: ['gluten free', 'vegetarian', 'vegan', 'high protein', 'low fat'],
        ingredients: [
          'porridge oats',
          'banana',
          'milk',
          'peanut butter',
          'skyr',
          'protein powder',
        ],
      },
      {
        id: 6,
        name: 'Apple Crumpets',
        macro: { calories: 501.7, protein: 15.7, carbs: 87.6, fats: 13.3 },
        imageURL:
          'https://res.cloudinary.com/dyk3h7z17/image/upload/v1615488065/find-recipe-app-assets/recipe-image-apple-crumpets-640w_u4h4iw.png',
        category: 'breakfasts and suppers',
        tags: ['gluten free', 'vegetarian', 'low fat'],
        ingredients: [
          'apple',
          'millet',
          'vanilla pudding',
          'coconut oil',
          'eggs',
          'yoghurt',
        ],
      },
      {
        id: 7,
        name: 'Cocoa Omelette',
        macro: { calories: 289.9, protein: 18.9, carbs: 19.4, fats: 15.1 },
        imageURL:
          'https://res.cloudinary.com/dyk3h7z17/image/upload/v1615488064/find-recipe-app-assets/recipe-image-cocoa-omlette-640w_aamxcl.png',
        category: 'breakfasts and suppers',
        tags: ['vegetarian', 'high protein'],
        ingredients: ['eggs', 'oatmeal', 'cocoa', 'yoghurt', 'frozen fruits'],
      },
      {
        id: 8,
        name: 'Scrambled Eggs and Avocado Sandwich',
        macro: { calories: 424.3, protein: 17.3, carbs: 35.2, fats: 24.8 },
        imageURL:
          'https://res.cloudinary.com/dyk3h7z17/image/upload/v1615488065/find-recipe-app-assets/recipe-image-scrambled-eggs-and-avocado-sandwich-640w_u3tg9q.png',
        category: 'breakfasts and suppers',
        tags: ['vegetarian', 'high protein'],
        ingredients: [
          'eggs',
          'wholegrain bun',
          'butter',
          'avocado',
          'cherry tomatoes',
        ],
      },
      {
        id: 10,
        name: 'Fried Eggs Sandwich',
        macro: { calories: 429.3, protein: 20.3, carbs: 34.3, fats: 23.5 },
        imageURL:
          'https://res.cloudinary.com/dyk3h7z17/image/upload/v1615488064/find-recipe-app-assets/recipe-image-fried-egg-sandwich-640w_qbthua.png',
        category: 'breakfasts and suppers',
        tags: ['vegetarian', 'high protein', 'keto'],
        ingredients: ['eggs', 'bread', 'rucola', 'cherry tomatoes'],
      },
      {
        id: 13,
        name: 'Peanut Butter Porrige',
        macro: { calories: 554.6, protein: 39.2, carbs: 75.6, fats: 13.4 },
        imageURL:
          'https://res.cloudinary.com/dyk3h7z17/image/upload/v1615488065/find-recipe-app-assets/recipe-image-peanut-butter-porrige-640w_uwtcjk.png',
        category: 'breakfasts and suppers',
        tags: ['gluten free', 'vegetarian', 'vegan', 'high protein', 'low fat'],
        ingredients: [
          'porridge oats',
          'banana',
          'milk',
          'peanut butter',
          'skyr',
          'protein powder',
        ],
      },
    ];
    const newState = reducer(initialState, {
      type: 'DISPLAY_ITEMS',
      payload: newRecipes,
    });

    expect(newState).toEqual({ ...initialState, filteredRecipes: newRecipes });
  });

  test('should display no items', () => {
    const newRecipes = [];
    const newState = reducer(initialState, {
      type: 'DISPLAY_ITEMS',
      payload: newRecipes,
    });

    expect(newState).toEqual({ ...initialState, filteredRecipes: newRecipes });
  });

  test('should set name filter to "porrige"', () => {
    const newNameFilter = 'porrige';
    const newState = reducer(initialState, {
      type: 'SET_NAME_FILTER',
      payload: newNameFilter,
    });

    expect(newState).toEqual({ ...initialState, nameFilter: newNameFilter });
  });

  test('should set name filter to ""', () => {
    const newNameFilter = '';
    const newState = reducer(initialState, {
      type: 'SET_NAME_FILTER',
      payload: newNameFilter,
    });

    expect(newState).toEqual({ ...initialState, nameFilter: newNameFilter });
  });

  test('should set category filter', () => {
    const newCategoryFilter = 'main courses';
    const newState = reducer(initialState, {
      type: 'SET_CATEGORY_FILTER',
      payload: newCategoryFilter,
    });

    expect(newState).toEqual({
      ...initialState,
      categoryFilter: newCategoryFilter,
    });
  });

  test('should enable custom filter', () => {
    const toggledCustomFilter = 'gluten free';
    const newState = reducer(initialState, {
      type: 'TOGGLE_CUSTOM_FILTER',
      payload: toggledCustomFilter,
    });

    expect(newState).toEqual({
      ...initialState,
      customFilters: {
        ...initialState.customFilters,
        [toggledCustomFilter]: true,
      },
    });
  });

  test('should disable custom filter', () => {
    const toggledCustomFilter = 'gluten free';
    const newState = reducer(
      {
        ...initialState,
        customFilters: {
          ...initialState.customFilters,
          [toggledCustomFilter]: true,
        },
      },
      {
        type: 'TOGGLE_CUSTOM_FILTER',
        payload: toggledCustomFilter,
      }
    );

    expect(newState).toEqual({
      ...initialState,
      customFilters: {
        ...initialState.customFilters,
        [toggledCustomFilter]: false,
      },
    });
  });

  test('should not change custom filters', () => {
    const newState = reducer(initialState, { type: 'RESET_CUSTOM_FILTERS' });

    expect(newState).toEqual(initialState);
  });

  test('should reset all custom filters', () => {
    const newState = reducer(
      {
        ...initialState,
        customFilters: {
          ...initialState.customFilters,
          ['vegetarian']: true,
          ['keto']: true,
          ['low fat']: true,
        },
      },
      { type: 'RESET_CUSTOM_FILTERS' }
    );

    expect(newState).toEqual(initialState);
  });

  test('should add ingredient filter', () => {
    const dateNowStub = jest.fn(() => 1530518207007);
    global.Date.now = dateNowStub;

    const newIngredient = 'avocado';
    const newState = reducer(initialState, {
      type: 'ADD_INGREDIENTS_FILTER',
      payload: newIngredient,
    });

    expect(newState).toEqual({
      ...initialState,
      ingredientsFilters: [
        { id: 1530518207007, ingredientName: newIngredient },
      ],
    });
  });

  test('should delete ingredient filter', () => {
    const ingredient1 = 'avocado';
    const ingredient2 = 'eggs';
    const newState = reducer(
      {
        ...initialState,
        ingredientsFilters: [
          { id: 1530518207007, ingredientName: ingredient1 },
          { id: 1530518207008, ingredientName: ingredient2 },
        ],
      },
      {
        type: 'DELETE_INGREDIENTS_FILTER',
        payload: ingredient1,
      }
    );

    expect(newState).toEqual({
      ...initialState,
      ingredientsFilters: [{ id: 1530518207008, ingredientName: ingredient2 }],
    });
  });

  test('should delete all ingredients filters', () => {
    const ingredient1 = 'avocado';
    const ingredient2 = 'eggs';
    const newState = reducer(
      {
        ...initialState,
        ingredientsFilters: [
          { id: 1530518207007, ingredientName: ingredient1 },
          { id: 1530518207008, ingredientName: ingredient2 },
        ],
      },
      {
        type: 'DELETE_ALL_INGREDIENTS_FILTERS',
      }
    );

    expect(newState).toEqual(initialState);
  });
});
