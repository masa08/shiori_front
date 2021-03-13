import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';

const getBooks = async () => {
  const bookUrl = process.env.VUE_APP_HOST + '/api/book';

  try {
    const bookRes = await axios.get(bookUrl);
    const books = camelcaseKeys(bookRes.data.books);

    return books;
  } catch (e) {
    alert(e);
  }
};

export { getBooks };
