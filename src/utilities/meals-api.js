import sendRequest from './send-request-api';

const BASE_URL = '/api/meals';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export function create(meal) {
    return sendRequest(BASE_URL, 'POST', meal);
}

export function deleteOne(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export function createMeal(meal){
    return sendRequest(`${BASE_URL}/create`,'POST', meal);
}