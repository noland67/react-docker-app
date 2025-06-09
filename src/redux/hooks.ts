import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// dispatch に型をつけたラッパー
export const useAppDispatch = () => useDispatch<AppDispatch>();

// selector に型をつけたラッパー
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
