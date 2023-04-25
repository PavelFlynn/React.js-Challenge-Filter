export async function getData() {
    const url = '/api';
    const request = await  fetch(url);
    const { data } = await request.json();

    return data
}