export const ERROR_SHOW = 'ERROR_SHOW'
export const ERROR_HIDE = 'ERROR_HIDE'

export const actionErrorShow = ({key = Date.now(), message = undefined, duration = 5000}) => {
  return {
    type: ERROR_SHOW,
    payload: { key, message, duration },
  }
}

export const actionErrorHide = key => {
  return { type: ERROR_HIDE, key }
}
