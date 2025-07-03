import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product, BasketItem } from '../types';

interface BasketState {
  items: BasketItem[];
  total: number;
}

type BasketAction = 
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'CLEAR_BASKET' };

interface BasketContextType {
  state: BasketState;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearBasket: () => void;
  getItemCount: () => number;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

const basketReducer = (state: BasketState, action: BasketAction): BasketState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.product.id === action.payload.id);
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.product.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      
      return {
        ...state,
        items: [...state.items, { product: action.payload, quantity: 1 }]
      };
    }
    
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.product.id !== action.payload)
      };
    
    case 'CLEAR_BASKET':
      return {
        items: [],
        total: 0
      };
    
    default:
      return state;
  }
};

export const BasketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(basketReducer, {
    items: [],
    total: 0
  });

  const addItem = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const removeItem = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  };

  const clearBasket = () => {
    dispatch({ type: 'CLEAR_BASKET' });
  };

  const getItemCount = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <BasketContext.Provider value={{
      state,
      addItem,
      removeItem,
      clearBasket,
      getItemCount
    }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (context === undefined) {
    throw new Error('useBasket must be used within a BasketProvider');
  }
  return context;
};