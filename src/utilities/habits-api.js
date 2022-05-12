import sendRequest from './send-request';

const BASE_URL = '/api/habits/';


export function create(formData) {
    return sendRequest(BASE_URL, 'POST', formData);
  }

export function getHabits(setFormData) {
  return sendRequest(BASE_URL, 'GET', setFormData)
}
