import React from 'react'
import { useSelector } from 'react-redux'

export const Errors = () => {
  const errors = useSelector(state => state.errors)
  return errors.items.map(error => <div>{error.message}</div>)
}
