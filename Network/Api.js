import React from 'react'
import axios from 'axios'

const fetchList = async (list) => {
  const apiKey = 'e23d8891dde4b093681f4f541d5e24ac:17:73864633'
  const baseUrl = 'https://api.nytimes.com/svc/books/v3/lists/'
  const listNames = 'names.json'
  const response = list === '' ? await axios.get(`${baseUrl}${listNames}?api-key=${apiKey}`) : await axios.get(`${baseUrl}${list}?&api-key=${apiKey}`)
  return response
}
export default fetchList;
