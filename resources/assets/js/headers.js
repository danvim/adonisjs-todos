import * as cookies from 'browser-cookies'

export const headers = () => ({
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'x-xsrf-token': cookies.get('XSRF-TOKEN')
})
