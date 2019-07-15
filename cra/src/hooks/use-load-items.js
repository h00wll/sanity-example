import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const useLoadItems = (model, action) => {
  const dispatch = useDispatch()
  useEffect(() => {
    if (model.isLoaded === false && model.isLoading === false) {
      dispatch(action())
    }
  }, [dispatch, model, action])
}
