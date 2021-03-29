import axios from 'axios';

const getBookFromRakuten = async (keyword) => {
  const applicationId = process.env.VUE_APP_RAKUTEN_KEY;
  const rakutenApi = `${process.env.VUE_APP_RAKUTEN_HOST}
                          ?format=json
                          &title=${keyword}
                          &applicationId=${applicationId}`;

  try {
    const res = await axios.get(rakutenApi);
    const books = res.data;

    return books;
  } catch (e) {
    alert(e);
  }
};

export { getBookFromRakuten };
