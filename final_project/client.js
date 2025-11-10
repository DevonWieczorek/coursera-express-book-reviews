const axios = require('axios');

const ENDPOINT = 'http://localhost:3333/';
const absolutePath = (relativePath = '') => `${ENDPOINT}${relativePath}`

// Task 10
async function getAllBooks() {
  try {
    const response = await axios.get(absolutePath());
    console.log('All books:', response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Task 11
async function getBookByIsbn(isbn){
	try {
		const response = await axios.get(absolutePath(`isbn/${isbn}`));
		return response.data;
	} catch (error) {
		console.error('Error fetching books:', error.message);
		throw error;
	}
}

// Task 12
async function getBooksByAuthor(author){
	try {
		const response = await axios.get(absolutePath(`author/${author}`));
		return response.data;
	} catch (error) {
		console.error('Error fetching books:', error.message);
		throw error;
	}
}

// Task 13
async function getBookByTitle(title){
	try {
		const response = await axios.get(absolutePath(`title/${title}`));
		return response.data;
	} catch (error) {
		console.error('Error fetching books:', error.message);
		throw error;
	}
}

module.exports = {
	getAllBooks,
	getBookByIsbn,
	getBookByTitle,
	getBooksByAuthor
};